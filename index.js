// Code your solutions in this file

const names =["James", "Isaac", "Winfred"];
const event = "birthday";

function writeCards(names, event){
    const messages = [];
    for(let i=0; i < names.length; i++){
        messages.push(`Thank you, ${names[i]} for the wonderful ${event} gift!`);
    }
    return messages;
}
//console.log(writeCards(names, event));


function countDown(num){
    while (num >= 0){
    console.log(num);
    num--;
    }
}
countDown(10);