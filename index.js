// Code your solutions in this file
function  writeCards(array, event){
    let myArray = []
    for (let index = 0; index < array.length; index++){
        myArray.push(`Thank you, ${array[index]}, for the wonderful ${event} gift!`)
    }
    return myArray
}

function countDown(number){
    while(number >= 0){
        console.log(`${number}`)
        number--
    }
}