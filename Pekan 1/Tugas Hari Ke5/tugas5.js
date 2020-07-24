/*	--------------- TUGAS  HARI KE 5 ---------------	*/


//	Soal Nomor 1


function halo() {

  console.log(' "Halo ' + 'Sanbers" ');

}
 
halo();


//	Soal Nomor 2


function kalikan() {

	hasilkali = 12 * 4
	return hasilkali
}
	var num1	= 12
	var num2	= 4

	var hasilkali = kalikan(num1, num2)

	console.log(hasilkali)


//	Soal Nomor 3



function introduce() {

	perkenalan = (' "Nama saya '+'' + name +' umur saya '+'' + age + ' tahun'  + ' Alamat saya '+'' +  address + ' dan saya punya hobi yaitu '+'' + hobby +'"');
	return perkenalan

}

	var name	= "Doni"
	var age 	= 24
	var address	= "Yogyakarta"
	var hobby	= "Berenang"

	var perkenalan	= introduce(name,age,address,hobby)
	
	console.log(perkenalan)