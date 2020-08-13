
//constructor function for card 
function Card(id,name, price, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
}

//initialize object
let prod1 = new Card(1,"9405 Super Tonic Herb 120 capsules","$72.99","Ginsenoside Rh2 - the highest quality and most concentrated form of Ginseng Awarded Excellent product award by W.H.O. World Superior Traditional Medical Products Fair, 1996");
let prod2 = new Card(2,"9405 Super Tonic Herb Powder","$85.99","Alleviating side effects of chemotherapy, protects bone marrow inhibition induced by chemotherapeutic agents, activates lymphoblast cells, enhances the cellular immunity function");
let prod3 = new Card(3,"","","");
let prod4 = new Card(4,"","","");
let prod5 = new Card(5,"","","");
let prod6 = new Card(6,"","","");
let prod7 = new Card(7,"","","");
let prod8 = new Card(8,"","","");
let prod9 = new Card(9,"","","");
let prod10 = new Card(10,"","","");
let prod11 = new Card(11,"","","");
let prod12 = new Card(12,"","","");
let prod13 = new Card(13,"","","");
let prod14 = new Card(14,"","","");
let prod15 = new Card(15,"","","");
let prod16 = new Card(16,"","","");

let numberOfBuyButtons = document.querySelectorAll(".cartbtn").length;
let innerhtmlOfModal = document.querySelector(".modal-prod");

const cart = [];



let prodName = document.querySelector(".prod_name").innerHTML
let cartBody = document.querySelector(".modal-body").innerHTML

//adds event listeners to buttons
for(var i =0; i<numberOfBuyButtons; i++) {

    document.querySelectorAll(".cartbtn")[i].addEventListener("click", function() {
    //on click change innerhtmlofmodal to clicked buttons product


    if (prodName == "9405 Super Tonic Herb Powder"){
        cartBody = prod2.name;
        console.log(cartBody);
    } else if (prodName == "9405 Super Tonic Herb 120 capsules") {
         cartBody = prod1.name;
        console.log("bye");
    }



    });

    
}