var itemNames = ["Cat", "Dog", "Fox"];
var itemCosts = [25, 100, 150];
var foxClicks = 0;
var catClicks = 0;
var dogClicks = 0;
var totalCost = 0;


for (i=0;i<itemNames.length;i++)
{
document.getElementById("list" + i).innerHTML =(itemNames[i] + ": $" +itemCosts[i] +  "<br >");
}

function addFoxToCart() {
foxClicks += 1;  
totalCost += 150;
document.getElementById("cartFox").innerHTML = ("Foxes: " + foxClicks);
document.getElementById("grandTotal").innerHTML = ("Grand total: $ " + totalCost);

}

function addCatToCart() {
catClicks += 1;  
totalCost += 25;
document.getElementById("cartCat").innerHTML = ("Cats: " + catClicks);
document.getElementById("grandTotal").innerHTML = ("Grand total: $ " + totalCost);

}


function addDogToCart() {
dogClicks += 1;  
totalCost += 100;
document.getElementById("cartDog").innerHTML = ("Dogs: " + dogClicks);
document.getElementById("grandTotal").innerHTML = ("Grand total: $ " + totalCost);
}