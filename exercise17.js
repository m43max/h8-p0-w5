function kaliTerusRekursif(angka) {
    if(String(angka).length>1){
        let product = +(String(angka)[0])    //first digit of parameter

        for(let i=1; i<String(angka).length; i++){
            product *= +(String(angka)[i])    //multiplies variable "product" by all other digits
        }
        
        return kaliTerusRekursif(product)
    }
    return angka
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6