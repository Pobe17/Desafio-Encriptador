<h1>Challenge Alura</h1>
# Encriptador y Desencriptador de Textos

Este proyecto es una aplicación web que permite encriptar y desencriptar textos utilizando un algoritmo simple. Está diseñado para recibir texto en minúsculas y sin acentos.

## Estructura del Proyecto

- **index.html**: El archivo principal HTML que define la estructura de la interfaz de usuario.
- **style.css**: Archivo de estilos que define la apariencia visual de la aplicación.
- **encriptador.js**: Archivo JavaScript que contiene la lógica para encriptar y desencriptar textos.

## Cómo Funciona

1. **Encriptar Texto**:
   - Reemplaza las vocales en el texto con una secuencia de caracteres predefinida.
   - Ejemplos:
     - `e` se convierte en `enter`
     - `i` se convierte en `imes`
     - `a` se convierte en `ai`
     - `o` se convierte en `ober`
     - `u` se convierte en `ufat`

2. **Desencriptar Texto**:
   - Reversa el proceso de encriptación para recuperar el texto original.
   - Ejemplos:
     - `enter` se convierte en `e`
     - `imes` se convierte en `i`
     - `ai` se convierte en `a`
     - `ober` se convierte en `o`
     - `ufat` se convierte en `u`


## Instalación

No se requiere instalación adicional. Simplemente abre el archivo `index.html` en tu navegador para usar la aplicación.

## Uso

1. Ingresa el texto que deseas encriptar o desencriptar en el área de texto proporcionada.
2. Haz clic en el botón **"Encriptar"** para encriptar el texto o en el botón **"Desencriptar"** para desencriptar el texto.
3. El resultado se mostrará en el área de texto de salida.
