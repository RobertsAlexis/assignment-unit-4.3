console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
console.log('basket')

const maxItems = 5;

function isFull(){
    if(basket.length < maxItems){
        return false;
    }
    return true;
}

function addItem(item) {
    if (isFull() === false) {
        basket.push(item)
        return true;
    }
    return false;
}

function empty(){
    while (basket.length !=0) {
        basket.pop();
    }
}

//adding and logging 3 items in basket

console.log ('adding banana', addItem('banana'));
console.log ('adding apple', addItem('apple'));
console.log ('adding brocolli', addItem('brocolli'));

function listItems() {
    console.log(basket)
}
console.log('Items that are in my basket:', basket);

console.log(`My basket has a ${basket}`);






// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
