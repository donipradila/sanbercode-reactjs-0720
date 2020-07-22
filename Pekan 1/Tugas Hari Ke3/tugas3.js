
/* Tugas Hari Ke - 3

/* Soal 1 */

var kataPertama 	= 'saya';
var kataKedua 		= 'senang';
var kataKetiga 		= 'belajar';
var kataKeempat 	= 'javascript';

console.log (kataPertama.concat(kataKedua).concat(kataKetiga).concat(kataKeempat));


/* Soal 2 */

var kataPertama 	= '1';
var kataKedua 		= '2';
var kataKetiga 		= '4';
var kataKeempat 	= '5';

var hasil = parseInt(kataPertama) + parseInt(kataKedua) + parseInt(kataKetiga) + parseInt(kataKeempat);
console.log(hasil);


/* Soal 3 */

var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring (0, 3);
var kataKedua	= kalimat.substring (4, 14);
var kataKetiga	= kalimat.substring (15, 18);
var kataKeempat	= kalimat.substring (19, 24);
var kataKelima	= kalimat.substring (25, 31);

console.log('kataPertama: '	+ kataPertama);
console.log('kataKedua: '	+ kataKedua);
console.log('kataKetiga: '	+ kataKetiga);
console.log('kataKeempat: ' + kataKeempat);
console.log('kataKelima: '	+ kataKelima); 


/* Soal 4 */

/* pilih angka dari 0 - 100, misal 75. lalu isi variabel tersebut
dengan angka tersebut. lalu buat pengkondisian if - else if dengan
kondisi sebagai berikut : 

nilai => 80 indeksnya A
nilai => 70 dan nilai < 80 indeksnya B
nilai => 60 dan nilai < 70 indeksnya C
nilai => 50 dan nilai < 60 indeksnya D
nilai < 50 indeksnya E */

var nilai = 81;

if (nilai => 80) {
	console.log("Indexs Nilai A")
}

else if (nilai >= 70 && nilai <= 80) {
	console.log("Indexs Nilai B")
}

else if (nilai >= 60 && nilai <= 70) {
	console.log("Indexs Nilai C")
}

else if (nilai >= 50 && nilai <= 60) {
	console.log("Indexs Nilai D")
}

else {
	console.log("Indeks Nilai E")
}


/* Soal 5 
ganti tanggal ,bulan, dan tahun sesuai dengan tanggal lahir anda 
dan buatlah switch case pada bulan, lalu muncul kan string nya dengan 
output seperti ini 22 Juli 2020 (isi di sesuaikan dengan tanggal lahir masing-masing)*/

var tanggal	= 7;
var bulan	= 1;
var tahun	= 1996;

switch (bulan) {

	case 1 : {console.log ('Januari');
			 break;
			 }

	case 2 : {console.log ('Februari');
			 break;
			 }

	case 3 : {console.log ('Maret');
			 break;
			 }

	case 4 : {console.log ('April');
			 break;
			 }

	case 5 : {console.log ('Mei');
			 break;
			 }

	case 6 : {console.log ('Juni');
			 break;
			 }

	case 7 : {console.log ('Juli');
			 break;
			 }

	default : {console.log('Bulan tidak tersedia');
			  }
}

var tampilTanggal = "tanggal: " + tanggal + " " + bulan + " " + tahun;

console.log(tampilTanggal);

