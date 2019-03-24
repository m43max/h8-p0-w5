function totalDigitRekursif(angka) {
    if(angka>=10){
        let firstDigit = +(String(angka)[0])    //'+' converts its argument into a number, works the same as Number()
        let otherDigits = +(String(angka).slice(1))    //keeps all digits except for the zero'th
        return firstDigit + totalDigitRekursif(otherDigits)
    }
    return angka
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5