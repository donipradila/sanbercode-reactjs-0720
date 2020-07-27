
//	TUGAS 6

//soal 1

var dataArr = ["Asep", "laki - laki", "baca buku", 1992]
var dataObj = {

    Nama 			: "Asep",
    Jenis_Kelamin	: "laki - laki",
    hobi			: "baca buku",
    tahun_lahir		: 1992
}
 
console.log(dataArr) 


//soal 2

var buah =  [
				{nama: "strawberry", warna: "merah", ada_bijinya: "tidak", harga: 9000}, 
				{nama: "jeruk", warna: "oranye", ada_bijinya: "ada", harga: 8000}, 
				{nama: "semangka", warna: "hijau dan merah", ada_bijinya: "ada", harga: 10000},
				{nama: "pisang", warna: "kuning", ada_bijinya: "tidak", harga: 5000}
			]

var arraybuahFilter = buah.filter(function(item) {
	return item.ada_bijinya != "ada";
})

console.log(arraybuahFilter[0])


//soal 3

var dataFilm = []

var addData = {
	nama : "Moana",
	durasi : "60 menit",
	gender: "animasi",
	tahun : 2018
}

function tambahkanData(AddData) {
	dataFilm.push(AddData);
}

tambahkanData(addData)

console.log(dataFilm)


//Soal 4

//Release 0

class Animal {
    // Code class di sini
    constructor(name) {
    this.name = name;
    this.legs = 4;
    this.cold_blooded = false;
    this._sign = null;
	}
	get sign () {
		return name, legs, cold_blooded;
	}
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

//Release 1
// Code class Ape dan class Frog di sini

class Ape extends Animal{
	constructor(name) {
		super(name);
		this.legs = 2;

	}
	yell() {
		return "Auooo";
	}
}

class Frog extends Animal{
	constructor(name) {
		super(name);
	}
	jump() {
		return "hop hop";
	}
}
 
var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 


//Soal 5

class Clock {

constructor(template) {
  
  var timer;

  function render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    var output = template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  this.stop = function() {
    clearInterval(timer);
  };

  this.start = function() {
    render();
    timer = setInterval(render, 1000);
  };
 }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();