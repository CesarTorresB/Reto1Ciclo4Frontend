async function registro(event) {
    try {
        const email = document.querySelector("#email");
        const password = document.querySelector("#passwor");
        event.preventDefoult();
        const emailValue = email.value.trim().toLowerCase();
        const emailFormat = /\S+@\S+\.\S+/;

        const passwordValue = password.value.trim();
        const isEmailOk = emailFormat.test(emailValue);
        console.log(`email:`, emailValue);
        console.log(`password:`, passwordValue);

        if (emailValue != "" && isEmailOk) {
            if (passwordValue != "" && passwordValue) {
                console.log("Password valido");
                console.log("Email Valido");

                await sendDataAsync(emailValue, passwordValue);
            } else {
                console.log("Password INVALIDO");
                alert("Password INVALIDO");
            }
        } else {
            console.log("Email INVALIDO");
            alert("Email INVALIDO");
        }
    } catch (error) {
        console.log(`error`, error);
    }
}

async function sendDataAsync(email, password) {
    try {
        const respuesta = await fetch('http://158.101.22.48:8080/api/user/all', {
            method: 'POST',
            headers: {
                'content - type': 'aplication/json:charset-uft-8'
            },
            body: JSON.stringify({ email, password })
        });
        console.log(email);
        let resultado = await respuesta.json();
        console.log('resultado', resultado);
        alert(resultado.message);
    } catch (error) {
        console.log('error', error);
    }
}