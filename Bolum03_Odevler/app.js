/*Soru-1: Girilen not değerine karşılık gelen harfli notu bildiren programı yazınız.
• 0-25 arası not karşılığı FF olmalı,
26-45 arası DD, 
46-65 arası CC, 
66- 75 arası BB, 
76-90 arası BA, 
91-100 arası AA olarak çevrilmelidir.
• 100’den büyük veya 0‘dan küçük değerlerde hata mesajı verecektir. */

let harfNotu = "";
const not = Number(prompt("Notunuzu giriniz :"));
if (not >= 0 && not <= 25) {
  harfNotu = FF;
} else if (not >= 26 && not <= 45) {
  harfNotu = DD;
} else if (not >= 46 && not <= 65) {
  harfNotu = CC;
} else if (not >= 66 && not <= 75) {
  harfNotu = BB;
} else if (not >= 76 && not <= 90) {
  harfNotu = BA;
} else if (not >= 91 && not <= 100) {
  harfNotu = AA;
} else {
  alert(
    "100’den buyuk veya 0‘dan kucuk not girdiniz..Gecerli not giriniz lutfen "
  );
}

/*Soru-2: Girilen ay ismine karşılık gelen sıra numarası veren programı switch-case yapısı kullanarak yazınız.*/

const ayIsim = prompt("Ay isim girinz :");
switch (ayIsim) {
  case "Ocak":
    ayNo = 1;
    break;
  case "Subat":
    ayNo = 2;
    break;
  case "Mart":
    ayNo = 3;
    break;
  case "Nisan":
    ayNo = 4;
    break;
  case "Mayis":
    ayNo = 5;
    break;
  case "Haziran":
    ayNo = 6;
    break;
  case "Temmuz":
    ayNo = 7;
    break;
  case "Agustos":
    ayNo = 8;
    break;
  case "Eylul":
    ayNo = 9;
    break;
  case "Ekim":
    ayNo = 10;
    break;
  case "Kasim":
    ayNo = 11;
    break;
  case "Aralik":
    ayNo = 12;
    break;

  default:
    alert("Gecerli ay ismi giriniz...");
    break;
}
console.log(ayNo);

/*Soru-3: Girilen farklı 3 tamsayının toplamını, çarpımını, en küçüğünü ve en
büyüğünü yazdıran programı yazınız.*/

alert("3 farkli tamsayi giriniz..");
const s1 = Number(prompt("Birinci sayi giriniz :"));
const s2 = Number(prompt("Ikinci sayi giriniz :"));
const s3 = Number(prompt("Ucuncu sayi giriniz :"));

const islem = prompt("İslemi Giriniz :");
let sonuc;
if (islem == "toplama") {
  sonuc = s1 + s2 + s3;
  console.log(sonuc);
} else if (islem == "carpma") {
  sonuc = s1 * s2 * s3;
  console.log(sonuc);
} else if (islem == "enBuyuk") {
  if (s1 > s2 && s1 > s3) {
    console.log("s1 girilen en buyuk sayidir");
  } else if (s2 > s1 && s2 > s3) {
    console.log("s2 girilen en buyuk sayidir");
  } else if (s3 > s1 && s3 > s2) {
    console.log("s3 girilen en buyuk sayidir");
  }
} else if (islem == "enKucuk") {
  if (s1 < s2 && s2 < s3) {
    console.log("s1 girilen en kucuk sayidir");
  } else if (s2 < s1 && s2 < s3) {
    console.log("s2 girilen en kucuk sayidir");
  } else if (s3 < s1 && s3 < s2) {
    console.log("s3 girilen en kucuk sayidir");
  }
} else {
  console.log("Yanlis giris yaptiniz");
}

//2.yol
const s1 = +prompt("Lutfen 1. sayiyi giriniz");
const s2 = +prompt("Lutfen 2. sayiyi giriniz");
const s3 = +prompt("Lutfen 3. sayiyi giriniz");
​
let sum = s1 + s1 + s3;
let pow = s1 * s1 * s3;
​
const small = s1 < s2 ? (s1 < s3 ? s1 : s3) : s2 < s3 ? s2 : s3;
const big = s1 > s2 ? (s1 > s3 ? s1 : s3) : s2 > s3 ? s2 : s3;
​
alert(
  `Sayilari Toplami ${sum}, Sayilarin Carpimi ${pow}, En kucuk Sayi ${small}, En buyuk sayi ${big} `
);

/*Soru-4: Girilen sayıların tek veya çift olduğunu bildiren programı tasarlayınız. (Ternary deyimi ile yapınız)*/

const sayi = Number(prompt("Sayi giriniz :"));

//1.yol
sayi % 2 == 0 ? console.log("Sayi Cift") : console.log("Sayi Tek");

//2.yol
result = sayi % 2 == 0 ? "Sayi Cift" : "Sayi Tek";
console.log(result);

/*Soru-5: Girilen dereceyi fahrenayta veya fahrenaytı dereceye çeviren programı tasarlayınız. Çevirimin hangi birimden hangi birime olacağı program başında sorulmalıdır.   
c = (f-32)*5/9   //    fhr= drc*1.8  + 32; */

// 1.yol

let birim = prompt(
  "lutfen bir sıcaklık ölçüsü birimi giriniz: fahrenayt-derece"
);
let sicaklik = prompt("lutfen bir sıcaklık ölçüsü  giriniz");
if (birim == fahrenayt) {
  sicaklik = (sicaklik - 32) / 1.8;
  birim = "derece";
} else {
  sicaklik = sicaklik * 1.8 + 32;
  birim = "fahrenayt";
}
console.log(`${sicaklik} ${birim} dir`);

// 2.yol
const hot = prompt("Sıcaklık Birimini 🏹 Seçiniz : Derece C Fahrenhayt F");
let birim = +prompt("istenilen birim miktarını giriniz :");
if (hot == "C") {
  birim = (birim - 32) / 1.8;
  console.log(`${birim} "Fahrenhaytdır"`);
} else if (hot == "F") {
  birim = birim * 1.8 + 32;
  console.log(`${birim} "Derecedir"`);
} else {
  console.log("Uygun sıcaklık birimi seciniz C/F");
}
