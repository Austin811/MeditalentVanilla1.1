
//constructor function for card 
function Card(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
}

//initialize object
let prod1 = new Card("9405 Super Tonic Herb Powder","$72.99","Ginsenoside Rh2 - the highest quality and most concentrated form of Ginseng Awarded Excellent product award by W.H.O. World Superior Traditional Medical Products Fair, 1996")


console.log(prod1.name);

//name 
//price
//description





let numberOfBuyButtons = document.querySelectorAll(".cartbtn").length;
let innerhtmlOfModal = document.querySelector(".modal-body").innerHTML;


const cart = [];

for(var i =0; i<numberOfBuyButtons; i++) {

    document.querySelectorAll(".cartbtn")[i].addEventListener("click", function() {
    //on click change innerhtmlofmodal to clicked buttons product


    console.log(innerhtmlOfModal = "hi")
    });
}