
function generatePassword(passswordLength,includeLowerCase,includeUpperCasr,includeNumbers,includeSymboles){
    const lowercaseChars = "qwertyuiopasdfghjklzxcvbnm";
    const uppercaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const numberChars = "0123456789";
    const symbolesChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowercaseChars : "";
    allowedChars += includeUpperCasr ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymboles ? symbolesChars : "";

    if(passswordLength <= 0){
        return '(password length should be greater than 0)';
    }
    if(allowedChars.passswordLength === 0){
        return '(at least one character type should be selected)';
    }
    for(let i = 0; i < passswordLength; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}
const passswordLength = 21;
const includeLowerCase = true;
const includeUpperCasr = true;
const includeNumbers = true;
const includeSymboles = true;
const password = generatePassword(passswordLength,includeLowerCase,includeUpperCasr,includeNumbers,includeSymboles);

console.log(`Generated password: ${password}`)