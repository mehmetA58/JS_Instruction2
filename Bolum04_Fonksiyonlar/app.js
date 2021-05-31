// * =======================================================
// *                    FONKSİYONLAR
// * =======================================================

// ?? 1.YÖNTEM  : FUNCTION DECLARATION
//Fonksiyonun tanimlanmasi
function yazdir(params) {
  console.log("Ahmet");
}
yazdir(); // Fonksiyonun cagirilmasi

//Ornek: Paramatreli(Argumanli) Fonksiyon
function yazdirAd(ad, yas) {
  console.log(`Adiniz ${ad} Yasiniz ${yas}`);
}
yazdirAd("Mustafa", 23); //Call / invoke  //Adiniz Mustafa Yasiniz 23
yazdirAd("John", 21); //Call / invoke

//Ornek: Paramatreli, donus degerliFonksiyon
function yasHesapla(dogum) {
  return 2021 - dogum;
}
console.log(`Yasiniz : ${yasHesapla(1990)}`); //Yasiniz : 31
alert(`Yasiniz : ${yasHesapla(1910)}`); // Yasiniz : 111
const yas = yasHesapla(1995);
console.log(`Yasiniz : ${yas}`); //Yasiniz : 26

// Örnek: klavyeden girilien sayinin tek ve çift olduğunu döndüren bir fonksyon yazınız

const sayiniz = prompt("Sayinizi giriniz :");

//Function Declaration yontemiyle fonk tanimlanmasi cagrilmasindan once veya sonra olabilir..
console.log(tekCift(sayiniz));
function tekCift(sayiniz) {
  const sonuc = sayiniz % 2 == 0 ? `${sayiniz} cifttir` : `${sayiniz} tektir`;
  // return sayi % 2 ? "tek" : "cift"; bu sekilde kullanim da yaygindir..
  return sonuc;
}
// console.log(tekCift(sayiniz)); bu satirda da yazabiliriz

//sunumda ornek 4 yapistir....

//* Avantajlari :
//* 1) Programciyi once fonksiyonlarin tanimlanmasi, sonra kullanilmasina zorladigi icin aslinda daha duzenli ve daha
//* anlasilir kod yazmaya olanak saglamaktadir.
//* 2) Fonksiyonlarin ve degerlerin degiskenlerde saklanmasini gerektirmektedir. Bu da daha sade bir kodlama demektir.

// ?? 2. YONTEM : FUNCTION EXPRESSION

// ** daha yaygin 1.yonteme gore..
// ** Function expression yöntemi ile  fonksiyonun tanımlanması çağrılmasında önce veya sonra olacak sekilde serbest degildir. Bu yontemde  Mutlaka cagrilmasi sonraya birakilmalidir.

const tekCift1 = function (sayiniz) {
  return sayiniz % 2 == 0 ? "Çift" : "Tek";
};
console.log(tekCift1(5)); // invoke

//Ornek : Buyuk sayiyi bulma
let buyukBul = function (x, y, z) {
  let enBuyuk;
  if (x > y && x > z) {
    enBuyuk = x;
  } else if (y > x && y > z) {
    enBuyuk = y;
  } else if (z > x && z > y) {
    enBuyuk = z;
  }
  return enBuyuk;
};

console.log("Enbuyuk:" + buyukBul(5, 3, 8)); //Enbuyuk:8
//console.log daki parametreleri function a yolla, orada ne istiyorsa yap, return sayesinde direk sonuç yazılsın

console.log(Math.max(1, 3, 2)); // expected output: 3

console.log(Math.max(-1, -3, -2)); // expected output: -1

const array1 = [1, 3, 2];
console.log(Math.max(...array1)); // expected output: 3

// ?? 3. YONTEM : ARROW (OK) FONKSİYONLARI
//ok isareti fonk  (=>)
//bu fonksiyonlarda suslu parantez kullanmazsak otomatik return yapar..

const topla = (a, b) => a + b; // Arrow fonk tanimlamasi

console.log(topla(5, 2)); //invoke
console.log(topla(3, 10)); //invoke

//Ornek:
const ciftMi = (sayi) => (sayi % 2 == 0 ? "cift" : "tek");
console.log(ciftMi(5));
console.log(ciftMi(2));

// Ornek: Us alma
const taban = prompt("taban giriniz");
const us = prompt("us giriniz");

const usAl = (t, u) => t ** u;
console.log(usAl(taban, us)); //t=2  u=3....8

// Ornek: Menu

const menu = () => {
  console.log("===============================");
  console.log("      JAVASCRIPT DERSI         ");
  console.log("===============================");
};
menu();

//Ornek
// const bilgiVer = (ad, soyad, dogum) => {
//   const bilgi = `Adim ${ad}, Soyadim ${soyad} ve yasim ${2021 - dogum}`;
//   return bilgi;
// };
const bilgiVer = (ad, soyad, dogum) => {
  `Adim ${ad}, Soyadim ${soyad} ve yasim ${2021 - dogum}`;
  console.log(bilgiVer("Mehmet", "Cakmak", 1989));
};

// Ornek: daire alani(silindir hacmini) hesaplama
const r = prompt("yaricapi giriniz");  //2
const h = prompt("yukseklik giriniz");  //3
const hacimHesapla = (r, h) => Math.PI * r * r * h;
//**En yakın sayiya yuvarlar.
console.log("Silindir Hacmi:" + Math.round(hacimHesapla(r, h)));  //Silindir Hacmi:38
//** Virgulden sonra 2 basamak alir.
console.log("Silindir Hacmi:" + hacimHesapla(r, h).toFixed(2));  //Silindir Hacmi:37.70
//toFixed(): Virgulden sonra kac sayiya yuvarlamak(kac basamak yazsin)istiyorsak onu belirtmek icin kullaniyoruz

