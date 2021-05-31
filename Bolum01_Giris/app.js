// ** Konsolda mesaj vermek için console.log() fonksiyonu kullanılır.

console.log("Hello javascript");
console.log("Javascript javadan kolay bir dildir..");
console.error("Bu bir hatadır.");
console.warn("Bu bir uyarıdır");

// alert("Dikkat"); // ? Ekrana pop-up mesaj çıkarır.

// ** ======================= DEĞİŞKEN TANIMLAMA ======================

//**  -----  VAR -----
// ? var keyword ile değişken tanımlanabilir.
// ? Ancak, modern JS var keyword'unun kullanımı azaldı.
//? Çünkü, var global değişken gibi düşünülebilir.
// ? Günümüzde programcılar global değişken gerekmedikçe VAR tercih etmemektedir.

var pi = 3.14;
console.log(pi);
console.log(typeof pi); // ? Number
pi = "3";
console.log(pi);
console.log(typeof pi); // ? String
pi = true;
console.log(pi);
console.log(typeof pi); // ? Boolean

// ** değişken tanımlama keyword'u kullanılmasa da değişken tanımlanmış oluyor.

isim = "Ahmet";
console.log(isim);
console.log(typeof isim); // ? String
isim = 4;
console.log(isim);
console.log(typeof isim); // ? Number

//**  -----  CONST -----
// ? const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.

// ! CONST: Sadece başlangıçta değer atılabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler hariç).

// const piSayisi = 3.14;
// console.log(piSayisi);
// piSayisi = 3; // ! Hata const değişkene sonradan değer atılamaz.
// console.log(piSayisi); // ! Hata const değişkene sonradan değer atılamaz.

//**  -----  LET -----
// ? Eğerki değişkenimzin değerinin değişmesi gerekiyor ise const kullanamayız. Bunun yerine LET kullanabiliriz.
// ! LET Block-scope bir değişkendir
// Block Scope : Sadece tanimli oldugu alanda gecerlidir..
let fiyat;
console.log(fiyat);
fiyat = 5.5;
console.log(fiyat);
console.log(typeof fiyat);

let isim1 = "Mustafa"; // cift tirnak
let isim2 = "Ahmet"; // tek tirnak
let isim3 = `AliCan`; // Backthick  (Alt Gr ;)

console.log(isim3);

const dil = null;
console.log(dil);
console.log(typeof dil);

/* 
+ Toplama işlemi ve String’lerde birleştirme işlemi gerçekleştirir.
- Çıkarma işlemi gerçekleştirir
* Çarpma işlemi gerçekleştirir
% Mod alma işlemi gerçekleştirir.
++ Bir arttırma işlemi gerçekleştirir.
-- Bir azaltma işlemi gerçekleştirir
** Üs alma işlemi gerçekleştirir
*/

const sucuk = 40;
const sakiz = 2;
const kola = 5;
let toplamFiyat = sucuk + sakiz + kola; //const yerine let yaptik
toplamFiyat++; // const variable degisken atiyor degerini attirirken bunu kabul etmez const yerine let yazariz..
toplamFiyat += 50;

//? Birden fazla degeri yazdirmak icin.. virgul kullanilir
console.log(toplamFiyat, kola);
console.log("Toplam:", toplamFiyat, " TL"); // 98 5     //JS de tercih edilir
console.log("Toplam:" + toplamFiyat + " TL"); //Toplam: 98 TL

// ?     + oparatörü string birleştime işlemi de gerçekleştirir.

const ad = "Can";
const soyad = "Canan";
console.log(ad + soyad);
console.log(ad + " " + soyad);

const s1 = 7;
s2 = "7";

console.log(s1 + s2);

const ad1 = "Ahmet";
const yas = 35;

console.log("Benim adim " + ad1 + " " + "yasim " + yas + " dir");
console.log(`Benim adim :${ad1} yasim :${yas} dir`);

//? arada enter a basinca devami cikti da alt satira geciyor
console.log(`Benim adim :${ad1}  
yasim :${yas} dir`);

const yil = 2021;
const dogumTarihi = 1980;
const yasi = yil - dogumTarihi;
console.log("YAS:" + yasi);
console.log("YAS:" + (yil - dogumTarihi)); //dogru versiyon
console.log("YAS:" + yil - dogumTarihi); //!Hata ---> yanlis versiyon  NaNNaN = Not a Number (Sayı degil)
console.log(`YAS: ${yil} - ${dogumTarihi}`); //YAS 2021 1980
console.log(`YAS: ${yil - dogumTarihi}`); // expression:ifade ile..  YAS 41  // * Template Literal ile yazdirma.

const taban = 2;
const us = 8;

const sonuc = taban ** us; // us alma oparatoru
console.log(sonuc); //256

// Mod alma %

const sayi = 123;
// ? Math.floor asagi yuvarlama Math.ceil yukari yuvarlama Math.round hangi tam sayiya yakinsa ona yuvarlama
const birler = sayi % 10;
const onlar = Math.floor(sayi / 10) % 10;
const yuzler = Math.floor(sayi / 100);

console.log("Birler:" + birler);
console.log("Onlar:" + onlar);
console.log("Yuzler:" + yuzler);

//?========================= karsılastırma operatörleri=========================
/*
==    İki değişkenin veri tipine bakmaksızın eşitliğini kontrol eder. Eşitse true
       aksi takdirde false döndürür.
===    Veri tipi de dahil olmak üzere eşitliğini kontrol eder. Eşitse true aksi
       takdirde false döndürür.
 !=    İki değişkenin eşit olmamasını kontrol eder. Eşit değilse true aksi
       takdirde false döndürür.
>     Soldaki değişkenin değeri sağdakinden büyükse true aksi takdirde
      false döndürür.
<     Soldaki değişkenin değeri sağdakinden küçükse true aksi takdirde
      false döndürür.
>=     Soldaki değişkenin değeri sağdakine eşit veya büyükse true aksi
       takdirde false döndürür.
<=     Soldaki değişkenin değeri sağdakine eşit veya küçükse true aksi
       takdirde false döndürür.
*/

const sayi1 = 100;
const sayi2 = "100";
console.log(typeof sayi1, typeof sayi2); //number, String

console.log(sayi1 == sayi2); //true
console.log(sayi1 === sayi2); //false

/*const s1 = 5;
console.log(s1 == 5); //true
console.log(s1 == "5"); //true
console.log(s1 === "5"); //false

console.log(s1 !== 5); //false;  === ve !== operatörleri veri tipini de kontrol eder.
console.log(s1 != "5"); //false;
console.log(s1 !== "5"); //true

//JS, operatörlere bakarak gerektiğinde string formatındaki sayıyı number formatına çevirerek işlemi gerçekleştiriyor.
console.log(s1 > 5); //false;
console.log(s1 > "4"); //true

//Büyük eşit ve küçük eşit işlemlerinde veri tipi kontrolü yapılamıyor.
console.log(s1 >= 5); //true
console.log(s1 > "6"); //false;
*/
// ?========================= MANTIKSAL OPERATÖRLER=========================

/*
&& :
MANTIKSAL VE işlemi gerçekleştirir. Kontrol ettiği değişkenlerin tamamı
TRUE ise TRUE değer döndürür. Aksi takdirde FALSE değer döndürür.

|| :
MANTIKSAL VEYA işlemi gerçekleştirir. Kontrol ettiği değişkenlerin
sadece bir tanesi bile TRUE ise TRUE değer döndürür. Ancak tamamı
FALSE ise FALSE değer döndürür.
! :
MANTIKSAL DEĞİL işlemi gerçekleştirir. Yani, kontrol ettiği değişkenin
değerinin tersini döndürür. Değişken TRUE ise FALSE, FALSE ise TRUE
değer döndürür.

ÖNEMLİ: & ve | operatörleri Bit-temelli VE ,VEYA işlemi gerçekleştirir.
*/
/*
let s2 = true;
let s3 = true;
console.log(s2 && true); // true
console.log(s2 && s3); // true
console.log(s2 && s3 && false); // false

s3 = false;
console.log(s2 || s3 || false); // true

s3 = null;
console.log(s2 && s3); // null
console.log(s2 || s3); // true

// ÖNEMLİ: 0, FALSE, NULL, undefined, "" ve NaN dışındaki durumlar TRUE kabul edilir.
//NULL, undefined, NaN  ---> JS False kabul eder

s2 = "kuş";
s3 = "kedi";
console.log(s2 || s3); // kuş
console.log(s2 && s3); // kedi
s2 = true;
s3 = false;

console.log(!s2); // false
console.log(!s3); // true
s3 = null;
console.log(!s3); // true
*/

// ÖNEMLİ: • VEYA işleminde ilk TRUE değerin bulunması yeterlidir. Diğerlerinin kontrolüne gerek yoktur.
//Bu yüzden, ilk değişkenin değeri döndürülür.

// • VE işleminde ise en sona kadar kontrol edilmesi gerekir. Dolayısıyla, hepsi doğru ise en sondaki değişkenin değeri döndürülür.

// ?========================= ATAMA OPERATÖRLERİ=========================
/*
=      x = y        Soldaki değişkenin değerini sağdakine kopyalar.
+=     x += 1       x= x+1 işlemi gerçekleştirir.
-=     x -= 2       x= x-2 işlemi gerçekleştirir.
*=     x *= 3       x= x*3 işlemi gerçekleştirir.
/=     x /= 4       x= x/4 işlemi gerçekleştirir.
**=    x **= 2      x= x2 işlemi gerçekleştirir.
%=     x %= 3       x = x mod 3 işlemi gerçekleştirir.
&=     x &= y       x = x VE y işlemi gerçekleştirir.
|=     x |= y       x = x VEYA y işlemi gerçekleştirir.
*/

const x = null;
const y = true;
const z = undefined;
const t = true;

console.log(x && y); //null
console.log(y && t && z); //undefined

//? =========================KOŞUL OPERATÖRÜ=========================
/*
Koşul Operatörü, if-else ifadelerinin tek satırlık hali gibi
düşünülebilir.
• 3 parametre alır.
• Koşul ? ifade1 : ifade2
• Eğer Koşul doğru ise ifade1, yanlış ise ifade2 çalıştırılır.
*/

let yaş = 7;
let okul = yaş >= 7 ? "ilkokul" : "anaokulu";
console.log(okul); //ilkokul
yaş = 6;
okul = yaş >= 7 ? "ilkokul" : "anaokulu";
console.log(okul); //anaokuluhaklsisiniz

//? ========================= TERNARY=========================

//const age = +prompt("yasinizi giriniz:");
const age = Number(prompt("yasinizi giriniz:"));
console.log("Yasiniz;" + age);
console.log(typeof age);

const name1 = prompt("Adiniz giriniz");
//prompt: klavyeden veri girisini saglar.
// Kosul operatoru Javadaki TERNARY gib--> IF-ELSE --> KOSUL ? ifade1(true):ifade2(false)


// 1. yöntem
age >= 18
  ? console.log(`${name1} ehliyet alabilir`)
  : console.log(`${name1} ehliyet alamaz`);

// 2. yöntem
const result =
  age >= 18 ? `${name1} ehliyet alabilir` : `${name1} ehliyet alamaz`;

console.log(result);

/*//? ÖDEV

• const ile let arasındaki farklar nelerdir?
const ile oluşturulan bir değişkene daha sonrasında tekrar değer ataması yapılamaz. let ile oluşturduğumuz bir değişkene daha sonrasında yeni bir değer atayabiliriz.

• let ile var arasındaki farklar nelerdir?
İlk olarak, var ve let’i karşılaştıralım. var ve let arasında ki fark, var function scope özelliği taşırken, let block scope özelliği taşımaktadır. Yani let ile oluşturulan bir değişken sadece oluşturulduğu yerdeki süslü parantezler içerisinde erişilebilirdir ve dışarısında kullanılamaz.

• == ile === farkı nedir?
Her iki işaretin de eşitlik kontrolü yapıyor. Farkı == kullandığımız zaman karşılaştırılan değerlerin tiplerine bakmadan kontrolü yapar. Yani “5” == 5 dediğimiz zaman sonuç true(doğru) dönecektir.   Ama === kullandığımız zaman tiplerinin de aynı olması beklenir, yani 5 === “5" false (yanlış) dönecektir. 5 === 5 ya da “5” === “5" doğru olarak dönecektir. Mümkün olan her yerde === ile karşılaştırma yaparsak Kendinizi daha güvende hissederiz.

• 5 adet falsy değeri içeren veri tipleri nelerdir?
0, null, undefined, NaN, ve ” ” Javascript tarafından false olarak kabul edilir.
Diğer sayılar Boolean’a  çevrildiğinde true olarak kabul edilir.
*/

//? ========================= TİP DÖNÜŞÜMLERİ =========================
//!Number() fonksiyonu tip çevrimi yapılabilir.
const para = "1000";
console.log(para + 15); //100015
console.log(Number(para) + 15); //1015

//! bNumber() fonksiyonu Harfleri sayıya çeviremediği için NaN (Sayı değil - Not a Number) döndürüyor.
const language = "Javascript";
console.log(Number(language)); //NaN
console.log(Number("123abc")); //NaN

//! String() fonksiyonu ile verilen ifadeyi String’e çevirmek mümkündür.
const sayi4 = 54;
console.log(String(sayi4), sayi4); // 54 54 console da ilk 54 String rengi beyaz, ikinci 54 number olan 54 mor renklidir..

//? 0, null, undefined, NaN, ve ” ” Javascript tarafından false olarak kabul edilir.
//? Diğer sayılar Boolean’a  çevrildiğinde true olarak kabul edilir.

const sy1 = 5;
const sy2 = -7;
const isimm = "John";
console.log(Boolean(isimm)); //true
console.log(Boolean(sy1)); //true
console.log(Boolean(sy2)); //true
const sıfır = 0,
  nal = null;
const tanımsız = undefined;
const boş = "",
  sayıDeğil = NaN;
console.log(Boolean(sıfır), Boolean(nal)); //false false
console.log(Boolean(tanımsız), Boolean(boş)); //false false
console.log(Boolean(sayıDeğil)); //false

//isim ve yas girisi iptal olunca hepsi calisiyor..
