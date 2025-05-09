function changeText() {
    let title = document.getElementById("title");
    title.innerHTML = "COUNTER SPELL!!!!";

}


function priceChange(price1, price2){
    let price;
    if (price2>price1){
        price=alert('this card is becoming popular!');
    }
    else if(price1>price2){
        price=alert('this card has dropped in price!');
    }
    console.log(price);

}
priceChange(5,6)
priceChange(6,5)

function addCard(deck, card){
    deck.push(card);
    console.log(deck);
    return deck;
}

cDeck=['Atraxa', 'Genesis Wave', 'Smothering Tithe'];
addCard(cDeck, 'Counter Spell')
console.log(cDeck);

function isCommander(deck, pos){
    let commander=deck[pos];
    console.log("Your Commander is " + commander + "!");

}

isCommander(cDeck, 0)

