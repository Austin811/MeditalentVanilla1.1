
//constructor function for card 
function Card(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
}

//initialize object
let prod1 = new Card("9405 Super Tonic Herb 120 capsules","$72.99","Ginsenoside Rh2 - the highest quality and most concentrated form of Ginseng Awarded Excellent product award by W.H.O. World Superior Traditional Medical Products Fair, 1996");
let prod2 = new Card("9405 Super Tonic Herb Powder","$85.99","Alleviating side effects of chemotherapy, protects bone marrow inhibition induced by chemotherapeutic agents, activates lymphoblast cells, enhances the cellular immunity function");
let prod3 = new Card("","","");
let prod4 = new Card("","","");
let prod5 = new Card("","","");
let prod6 = new Card("","","");
let prod7 = new Card("","","");
let prod8 = new Card("","","");
let prod9 = new Card("","","");
let prod10 = new Card("","","");
let prod11 = new Card("","","");
let prod12 = new Card("","","");
let prod13 = new Card("","","");
let prod14 = new Card("","","");
let prod15 = new Card("","","");
let prod16 = new Card("","","");


let numberOfBuyButtons = document.querySelectorAll(".cartbtn").length;
let innerhtmlOfModal = document.querySelector(".modal-body").innerHTML;

const cart = [];

console.log(innerhtmlOfModal)

//adds event listeners to buttons
for(var i =0; i<numberOfBuyButtons; i++) {

    document.querySelectorAll(".cartbtn")[i].addEventListener("click", function() {
    //on click change innerhtmlofmodal to clicked buttons product

    innerhtmlOfModal = prod1.name;
    
    console.log(prod1.name);
    console.log(innerhtmlOfModal);

    });


}