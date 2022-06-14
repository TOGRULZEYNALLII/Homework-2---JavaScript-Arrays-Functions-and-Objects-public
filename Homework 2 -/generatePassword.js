//
 function generatePassword(passwordLength) {
    const alphabet = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let password = '';
  
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = random(0, alphabet.length);
      const randomCharacter = alphabet.charAt(randomIndex);
      password += randomCharacter;
    }
  
    return password;
  }
  