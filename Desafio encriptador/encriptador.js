// encriptador.js

// Función para encriptar el texto
function encriptar() {
    let texto = document.querySelector('.inputText').value;
    let textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    mostrarResultado(textoEncriptado);
}

// Función para desencriptar el texto
function desencriptar() {
    let texto = document.querySelector('.inputText').value;
    let textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    mostrarResultado(textoDesencriptado);
}

// Función para mostrar el resultado en el área de texto de salida
function mostrarResultado(texto) {
    let outputText = document.querySelector('.outputText');
    let messagePlaceholder = document.querySelector('.messagePlaceholder');

    if (texto.trim() === '') {
        messagePlaceholder.querySelector('p').textContent = 'Ningún mensaje fue encontrado';
        messagePlaceholder.querySelector('span').textContent = 'Ingresa el texto que desees encriptar o desencriptar.';
    } else {
        outputText.textContent = texto;
        outputText.style.display = 'block';
        messagePlaceholder.style.display = 'none';
    }
}

// Para ocultar el mensaje placeholder y mostrar el texto encriptado/desencriptado
function ocultarPlaceholder() {
    let messagePlaceholder = document.querySelector('.messagePlaceholder');
    messagePlaceholder.style.display = 'none';
    document.querySelector('.outputText').style.display = 'block';
}
