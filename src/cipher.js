const cipher = {
  //CIFRADO PARA PADRES
  encode: (offset, codigo) => {

    let upperCase = codigo.toUpperCase(); //pasa a mayúscula los carácteres
    let finalMessage = ''; //declara que el mensaje debe ser escrito
    let desplazamiento = parseInt(offset); //devuelve el valor entero al offset ingresado

    for (let i = 0; i < upperCase.length; i++) { //desde 0 recorriendo la cadena de caracteres
      let letterInAscii = upperCase.charCodeAt(i); //indica el valor ascii de cada caracter
      let newLetterInAscii = 0;
      if (letterInAscii == 32) {
        newLetterInAscii = 32; //deja el valor ascii 32 como espacio
      } else {
        newLetterInAscii = ((letterInAscii - 65 + desplazamiento) % 26) + 65; // indica el valor ascii con el desplazamiento incluído
      }
      let letterEncoded = String.fromCharCode(newLetterInAscii); // devuelve el valor de cada letra en ascii

      finalMessage = finalMessage + letterEncoded;
    }
    return finalMessage;
  },

  //DESCIFRADO PARA NIÑOS
  decode: (offset, codigo) => {
    let upperCase = codigo.toUpperCase(); //pasa a mayúscula los carácteres
    let finalMessage = '';
    let desplazamiento = parseInt(offset);

    for (let i = 0; i < upperCase.length; i++) {
      let letterInAscii = upperCase.charCodeAt(i); //indica el valor ascii de cada caracter
      let newLetterInAscii = 0;
      if (letterInAscii == 32) {
        newLetterInAscii = 32;
      } else {
        newLetterInAscii = ((letterInAscii + 65 - desplazamiento) % 26) + 65; // indica el valor ascii con el desplazamiento incluído
      }
      let letterEncoded = String.fromCharCode(newLetterInAscii);

      finalMessage = finalMessage + letterEncoded;
    }

    return finalMessage;
  }
};
export default cipher;
