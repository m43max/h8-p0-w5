function changeVocals (str) {
    let out = ""
    let vowels = ["A","E","I","O","U","a","e","i","o","u"]    //list of all vowels

    for(let i=0; i<str.length; i++){
        var flag = 0
        for(let v=0; v<vowels.length; v++){
            if(str[i]===vowels[v]) flag = 1;
        }
        if(flag===1){
            out += String.fromCharCode((str.charCodeAt(i))+1)
        }
        else{
            out += str[i]
        }
    }

    return out
}

function reverseWord (str) {
    let out = ""

    for(let i=str.length-1; i>=0; i--){
        out += str[i]
    }

    return out
}

function setLowerUpperCase (str) {
    let out = ""

    for(let i=0; i<str.length; i++){
        if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
            out += String.fromCharCode(str.charCodeAt(i)+32)
        }
        else if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
            out += String.fromCharCode(str.charCodeAt(i)-32)
        }
        else out += str[i]
    }

    return out
}

function removeSpaces (str) {
    let out = ""

    for(let i=0; i<str.length; i++){
        if(str[i]!==" "){
            out += str[i]
        }
    }
    
    return out
}

function passwordGenerator (name) {
    if(name.length<5){
        return "Minimal karakter yang diinputkan adalah 5 karakter"
    }
    return removeSpaces(reverseWord(setLowerUpperCase(changeVocals(name))))
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'