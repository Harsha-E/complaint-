const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

var username = []
var Name = document.getElementById("Name").value;
var Number = document.getElementById("Number").value;
var Occasion = document.getElementById("Occasion").value;
var City = document.getElementById("City").value;
var SenderName = document.getElementById("SenderName").value;
var Transaction = document.getElementById("Transaction").value;
var Reference = document.getElementById("Reference").value;
var newPostKey = firebase.database().ref().child('vlaue/').push().key;
var database = firebase.database;

function allFunction(){
  writeUserData();
}

  function writeUserData() {
    firebase.database().ref('Wishes/' + newPostKey).set({
      Name: Name,
      Number: Number,
      Occasion: Occasion,
      City: City,
      SenderName: SenderName,
      Transaction: Transaction,
      Reference: Reference
    });
  }

let file = {}

function choosseFile(e){
  file = e.target.files[0];
}