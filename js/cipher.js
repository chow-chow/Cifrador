'use-strict';

const cifrado = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const descifrado = {};

for(let clave in cifrado){
    descifrado[cifrado[clave]] = clave;
}

function cifrar(){
    if(document.getElementById("texto").value.length == 0){
        document.getElementById("img-message").src = "./img/oops.png";
        document.getElementById("titulo").textContent = "Oops! Algo salió mal..."
        document.getElementById("desc").textContent = "Recuerda escribir un texto para cifrar o descifrar."
    }else{
        let texto = document.getElementById("texto").value;
        cipherText = texto.replace(/[eiaou]/g, vocal => cifrado[vocal]);
        document.getElementById("texto").value = cipherText;
        document.getElementById("img-message").src = "./img/cifrar.png";
        document.getElementById("titulo").textContent = "Mensaje cifrado con éxito"
        document.getElementById("desc").textContent = "Ahora puedes enviárselo a alguien más sin que los demás sepan qué están diciendo."
    }
}

function descifrar(){
    if(document.getElementById("texto").value.length == 0){
        document.getElementById("img-message").src = "./img/oops.png";
        document.getElementById("titulo").textContent = "Oops! Algo salió mal..."
        document.getElementById("desc").textContent = "Recuerda escribir un mensaje para cifrar o descifrar."
    }else{
        let textoCifrado = document.getElementById("texto").value;
        plainText = textoCifrado.replace(/enter|imes|ai|ober|ufat/g, cadena => descifrado[cadena]);
        document.getElementById("texto").value = plainText;
        document.getElementById("img-message").src = "./img/descifrar.png";
        document.getElementById("titulo").textContent = "Se ha descifrado el mensaje!"
        document.getElementById("desc").textContent = "Parace que alguien te ha mandado un mensaje oculto."
    }
}