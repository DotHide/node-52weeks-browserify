require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[
  "4-LOM",
  "Aayla Secura",
  "Admiral Ackbar",
  "Admiral Thrawn",
  "Ahsoka Tano",
  "Anakin Solo",
  "Asajj Ventress",
  "Aurra Sing",
  "Senator Bail Organa",
  "Barriss Offee",
  "Bastila Shan",
  "Ben Skywalker",
  "Bib Fortuna",
  "Biggs Darklighter",
  "Boba Fett",
  "Bossk",
  "Brakiss",
  "C-3PO",
  "Cad Bane",
  "Cade Skywalker",
  "Callista Ming",
  "Captain Rex",
  "Carnor Jax",
  "Chewbacca",
  "Clone Commander Cody",
  "Count Dooku",
  "Darth Bane",
  "Darth Krayt",
  "Darth Maul",
  "Darth Nihilus",
  "Darth Vader",
  "Dash Rendar",
  "Dengar",
  "DotHide",
  "Durge",
  "Emperor Palpatine",
  "Exar Kun",
  "Galen Marek",
  "General Crix Madine",
  "General Dodonna",
  "General Grievous",
  "General Veers",
  "Gilad Pellaeon",
  "Grand Moff Tarkin",
  "Greedo",
  "Han Solo",
  "IG 88",
  "Jabba The Hutt",
  "Jacen Solo",
  "Jaina Solo",
  "Jango Fett",
  "Jarael",
  "Jerec",
  "Joruus C'Baoth",
  "Ki-Adi-Mundi",
  "Kir Kanos",
  "Kit Fisto",
  "Kyle Katarn",
  "Kyp Durron",
  "Lando Calrissian",
  "Luke Skywalker",
  "Luminara Unduli",
  "Lumiya",
  "Mace Windu",
  "Mara Jade",
  "Mission Vao",
  "Natasi Daala",
  "Nom Anor",
  "Obi-Wan Kenobi",
  "Padmé Amidala",
  "Plo Koon",
  "Pre Vizsla",
  "Prince Xizor",
  "Princess Leia",
  "PROXY",
  "Qui-Gon Jinn",
  "Quinlan Vos",
  "R2-D2",
  "Rahm Kota",
  "Revan",
  "Satele Shan",
  "Savage Opress",
  "Sebulba",
  "Shaak Ti",
  "Shmi Skywalker",
  "Superman X",
  "Talon Karrde",
  "Ulic Qel-Droma",
  "Visas Marr",
  "Watto",
  "Wedge Antilles",
  "Yoda",
  "Zam Wesell",
  "Zayne Carrick",
  "Zuckuss"
]
},{}],2:[function(require,module,exports){
'use strict';
var uniqueRandom = require('unique-random');

module.exports = function (arr) {
	var rand = uniqueRandom(0, arr.length - 1);

	return function () {
		return arr[rand()];
	};
};

},{"unique-random":3}],3:[function(require,module,exports){
'use strict';
module.exports = function (min, max) {
	var prev;
	return function rand() {
		var num = Math.floor(Math.random() * (max - min + 1) + min);
		return prev = num === prev && min !== max ? rand() : num;
	};
};

},{}],"external":[function(require,module,exports){
var ele = document.getElementById('starwars');
ele.textContent = 'External: ' + starwars.random();
},{}],"starwars-names-dothide":[function(require,module,exports){
var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./starwars-names.json');
var getRandomItem = uniqueRandomArray(starWarsNames);

module.exports = {
  all: starWarsNames,
  random: random
}

function random(input) {
  if (input === undefined) {
    return getRandomItem();
  } else if (typeof input === 'number') {
    var randomItems = [];
    for (var i = 0; i < input; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  } else {
    if (input.length === 1) {
      var filteredStarWarsNames =
        starWarsNames.filter(function(item) {
          return item.charAt(0) === input.toUpperCase();
        });
      return uniqueRandomArray(filteredStarWarsNames)();
    } else {
      throw 'One char only!';
    }
  }
}

},{"./starwars-names.json":1,"unique-random-array":2}]},{},[]);
