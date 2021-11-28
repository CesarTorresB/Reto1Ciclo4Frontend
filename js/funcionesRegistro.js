async function registro(event) {
    try {
        const nombre = document.querySelector("#name");
        const email = document.querySelector("#email");
        const password = document.querySelector("#passwor");
        const confirmaPassword = document.querySelector("#confirmaPassword");
        event.preventDefoult();
        const nameValue = nombre.value.trim();
        const emailValue = email.value.trim().toLowerCase();
        const emailFormat = /\S+@\S+\.\S+/;

        const passwordValue = password.value.trim();
        const confirmaPasswordValue = confirmaPassword.value.trim();
        const isEmailOk = emailFormat.test(emailValue);
        console.log(`nombre:`, nameValue);
        console.log(`email:`, emailValue);
        console.log(`password:`, passwordValue);
        console.log(`passwordConfir: `, confirmaPasswordValue);

        if (emailValue != "" && isEmailOk) {
            if (passwordValue != "" && passwordValue == confirmaPasswordValue) {
                console.log("Password valido");
                console.log("Edad Valida");
                console.log("Email Valido");

                await sendDataAsync(nameValue, emailValue, passwordValue);
            } else {
                console.log("Password INVALIDO");
                alert("Password INVALIDO");
            }
        } else {
            console.log("Email INVALIDO");
            alert("Email INVALIDO");
            console.log("Edad INVALIDA");
            alert("Edad INVALIDA");
        }
    } catch (error) {
        console.log(`error`, error);
    }
}

async function sendDataAsync(nombre, email, password) {
    try {
        const respuesta = await fetch('http://158.101.22.48:8080/api/user/new', {
            method: 'POST',
            headers: {
                'content - type': 'aplication/json:charset-uft-8'
            },
            body: JSON.stringify({ nombre, email, password })
        });
        console.log(nombre);
        let resultado = await respuesta.json();
        console.log('resultado', resultado);
        alert(resultado.message);
    } catch (error) {
        console.log('error', error);
    }
}