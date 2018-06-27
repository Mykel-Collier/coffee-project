"use strict";

function renderCoffee(coffee) {
    var html = '<div>';
    html += '<div class=" col-lg-6 float-right coffee_div"><span class="coffee_name">' + coffee.name + '</span>';
    html += '<span class="coffee_roast">' + coffee.roast + '</span></div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


function click_add(e) {

    add_coffee();
    updateCoffees(e);
}

function add_coffee(){

    var roast = document.getElementById('new_roast').value;
    var name = document.getElementById('new_coffee_name').value;

    var coffee = {name: name, roast: roast};

    coffees.unshift(coffee);
}


function updateCoffees(e) {

    e.preventDefault(); // don't submit the form, we just want to update the data

    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    var coffee_name = document.getElementById('coffee_name').value;

    if(coffee_name === ""){
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast || selectedRoast === "all") {
            filteredCoffees.push(coffee);
        }
    })
    }else{
       coffees.forEach((function (coffee) {
           if (coffee.name.toLowerCase().match(coffee_name.toLowerCase())){

               filteredCoffees.push(coffee);
           }
       }))
    }

    tbody.innerHTML = renderCoffees(filteredCoffees);

}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#add_coffee');
var roastSelection = document.querySelector('#roast-selection');
var coffee_name = document.querySelector('#coffee_name');

tbody.innerHTML = renderCoffees(coffees);


roastSelection.addEventListener('change', updateCoffees);
coffee_name.addEventListener('input', updateCoffees);

submitButton.addEventListener('click', click_add);