let arr = [1, 3, 4, 6, 12, 33];
subdtituirNumerosPares(arr);

function subdtituirNumerosPares(array) {

    if (!array) return -1;
    if (!array.length) return -1;

    for(let i = 0; i < array.length; i++){

        if(array[i] === 0) {
            console.log('Você já é zero!');
        } else if (array[i] % 2 ===0){
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }

    return array;
}

console.log(arr);
