var displayFood = document.getElementById('display-food');
var displayDrink = document.getElementById('display-drink');
var foodMenu = document.getElementById('food-menu');
var drinkMenu = document.getElementById('drink-menu');
var bodyStyle =  window.getComputedStyle(document.body);
var bgColor = bodyStyle.getPropertyValue("background-color");
var textColor = bodyStyle.getPropertyValue("color");
var clickedColor = '#666';

displayFood.addEventListener("click", displayFoodMenu);
displayDrink.addEventListener("click", displayDrinkMenu);

function displayFoodMenu(){
	displayDrink.style.backgroundColor = bgColor;
	displayDrink.style.color = textColor;
	displayFood.style.backgroundColor = clickedColor;
	displayFood.style.color = bgColor;
	drinkMenu.style.display="none";
	foodMenu.style.display = "block";
}

function displayDrinkMenu(){
	displayFood.style.backgroundColor = bgColor;
	displayFood.style.color = textColor;
	displayDrink.style.backgroundColor = clickedColor;
	displayDrink.style.color = bgColor;
	foodMenu.style.display = "none";
	drinkMenu.style.display = "block";
}

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}