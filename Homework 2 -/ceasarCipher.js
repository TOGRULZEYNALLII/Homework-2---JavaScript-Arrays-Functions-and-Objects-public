function ceasarCipher(string, k) {
    let decrypted = '';
  
    for (let char of string) {
      const charCode = char.charCodeAt(0);
      if (isLowerCaseLetter(char)) {
        let nextCode = charCode + k;
        if (nextCode > 122) {
          nextCode = nextCode - 26;
        }
        const decodedLetter = String.fromCharCode(nextCode);
        decrypted += decodedLetter;
      } else if (isUpperCaseLetter(char)) {
        let nextCode = charCode + k;
        if (nextCode > 90) {
          nextCode = nextCode - 26;
        }
        const decodedLetter = String.fromCharCode(nextCode);
        decrypted += decodedLetter;
      } else {
        decrypted += char;
      }
    }
  
    return decrypted;
  }
  