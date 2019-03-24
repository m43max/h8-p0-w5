function sorting(arrNumber) {
    if(arrNumber.length === 1) return arrNumber;
    else{
        var pivot = [arrNumber[0]];
        var front = [];
        var rear = [];

        for(let i=1; i<arrNumber.length; i++){
            if(arrNumber[i] < pivot[0]){
                front.push(arrNumber[i]);
            }
            else rear.push(arrNumber[i]);
        }

        if(front.length > 0) front = sorting(front);
        if(rear.length > 0) rear = sorting(rear);
        return front.concat(pivot,rear);
    }
}


function getTotal(arrNumber) {
    if(arrNumber[0] === undefined) return ""

    let largest = arrNumber[arrNumber.length-1]
    let count = 0

    for(let i=0; i<arrNumber.length; i++){
        if(arrNumber[i] === largest){
            count ++
        }
    }
    
    return `angka paling besar adalah ${largest} dan jumlah kemunculan sebanyak ${count} kali`
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''