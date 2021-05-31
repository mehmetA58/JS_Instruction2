//? =========================IF ELSE =========================
const s1 = Number(prompt("Birinci sayi :")); //+prompt("Birinci sayi :"); bu sekilde de number aliyor
const islem = prompt("İslemi Giriniz :");
const s2 = Number(prompt("ikinci sayi :"));
//JS; degerleri default olarak String alir..ve concatination yapar bunu engellemek icin Number a cevirmek gerek
let sonuc = 0;

if (islem == "+") {
  sonuc = s1 + s2;
} else if (islem == "-") {
  sonuc = s1 - s2;
} else if (islem == "*") {
  sonuc = s1 * s2;
} else if (islem == "/") {
  sonuc = s1 / s2;
} else {
  alert("yanlis islem yaptiniz..");
}
console.log(`${s1} ${islem} ${s2} = ${sonuc}`);

const age = prompt("yasinizi giriniz :");
const health = prompt("Saglikli misiniz E/H");

//1.yol : degiskene atayarak
result = age > 18 && health == "E" ? "Askere gidebilir" : "Askere gidemez";
console.log(result);
alert(result); // bu sekilde de yazdirilir..

//2.yol degiskene atamadan, direkt console a yazdirarak
age >= 18 && health == "e"
  ? console.log("askere gidebilir")
  : console.log("askere gidemez");

//? ========================SWITCHCASE=========================

const gunNo = Number(prompt("Gun no girinz :"));
switch (gunNo) {
  case 1:
    gunAdi = "Pazartesi";
    break;
  case 2:
    gunAdi = "Sali";
    break;
  case 3:
    gunAdi = "Carsamba";
    break;
  case 4:
    gunAdi = "Persembe";
    break;
  case 5:
    gunAdi = "Cuma";
    break;
  case 6:
    gunAdi = "Cumartesi";
    break;
  case 7:
    gunAdi = "Pazar";
    break;
  default:
    alert("gunAdi 1-7 arasında olmalidir");
    break;
}
console.log(gunAdi);

//? ========================TERNARY=========================

const hiz = 90;
const mesaj = hiz >= 120 ? "Hızlı" : hiz >= 90 ? "Normal" : "Yavas";
console.log(mesaj); //Normal

const maas = prompt("Maasinizi giriniz :"); //5000
const calismaSuresi = prompt("Calisma suresi giriniz :"); //10

const zamlimaas =
  calismaSuresi > 10 ? maas * 1.5 : calismaSuresi > 5 ? maas * 1.2 : maas * 1.1;
console.log(zamlimaas); //6000

const maas1 = 5000;
const calismaSuresi1 = 10;
const zamliMaas = calismaSuresi1 < 5 ? maas1 * 1.1 : maas1 * 1.25;
console.log(zamliMaas); //6250

const borc = 0;
const maas2 = 3000;
console.log(!borc && maas2 > 2825.9 ? "Kredi Alabilir 🤑" : "Kredi Alamaz 🥺"); //Kredi Alabilir 
// windows + (nokta)   ya basarak emoji klavyesi cikar

// ** HATIRLATMA: Ternary deyimini fazla sayıda koşul içeren durumlarda kullanmak programın anlaşılabilirliğini azaltacaktır. Bunun yerine, eğer mümkün ise switch-case veya if-else deyimlerini kullanmalıyız.

//? =======================DONGULER=========================

//********************FOR**********************************
//---For döngüsünün Syntax’ı
for (başlangic; kosul; guncellemeMiktarı) {
  // dongu ici
}
 //! NOT: Koşul doğru olduğu müddetçe döngüye devam edilir. Eğer, koşul baştan yanlış ise bu döngüye girilmemiş olur.

//ÖRNEK: 1 den 10 kadar olan sayıların toplamını yazdıran program:
let toplam=0;
for (let t = 1; t <= 10; t++) {
toplam += t;
}
console.log(toplam);
//ÖRNEK: 1 den n kadar olan sayıların toplamını yazdıran program. NOT: n prompt ile dışarıdan girilebilir.
const n = prompt("Hangi Sayıya kadar toplamak istiyorsunuz:");
let toplam = 0;
for (let t = 1; t <= n; t++) {
  toplam += t;
}
console.log(toplam);


const sayi = prompt("Dongu miktarini giriniz :"); //10 girince 10 adet Mehmet
for (let i = 1; i <= 10; i++) {
  //console.log("Mehmet"); //10Mehmet tek satir
  console.log(`${i} -Mehmet`); //Alt alta 10 tane yazdi
}

//Asal sayi tespiti

const number = Number(prompt("Sayi giriniz :"));
let asal = true;
for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    asal = false;
    break;
  }
}
const asalMi = asal ? "ASAL" : "ASAL DEGİL";
console.log(asalMi);


//********************WHILE*********************************
//---While döngüsünün Syntax’ı
while ( koşul) {
// Döngü içi
}
//! While döngüsü yapı olarak fordöngüsünden farklı olsa da benzer işleri yapmak içindir.
//! Döngü koşulu doğru olduğu müddetçedöngü tekrar ettirilir. Yanlış olur olmaz döngüden çıkılır.




let not;
not = Number(prompt("0-100 arasında bir not giriniz:"));
while (not < 0 || not > 100);
console.error("Girilen not 0-100 arasinda olmalidir");
console.log("Giridiğiniz not 0-100 arasındadır");


//********************Do-WHILE*********************************
//---Do While döngüsünün Syntax’ı
do{
// Döngü içi
} while ( koşul) ;

//! Do-While döngüsü yapı olarak while döngüsüne çok benzer. Tek farkı döngü koşulunun en sonda kontrol edilmesidir.
//! Bu yüzden bir do-while döngüsü en az bir kere çalışır.

let not1;
do {
not1 = prompt("0-100 arasında bir not giriniz:");
} while (not1 < 0 || not1 > 100);
console.log("Giridiğiniz not 0-100 arasındadır");


// orn: klavyeden Q karakteri girilene kadar not girisi yapan bir programi dongu kullanarak yaziniz..
//1.yol
let giris;
do {
  giris = prompt("Harf giriniz: ");
  console.log("Program devam");
} while (giris == Q);

console.log("Program cikis");

//2.yol
let note;
let i = 1;
while (true) {
  //sonsuz dongu: Sonsuza kadar calismasi icin, icerde de sadece Q veya q tusunu yazinca donguyu durduk dedik
  note = prompt(i + ".kisinin notunu giriniz");
  note = note.toLowerCase(); //girilen karekteri kücük harfe çevirir.
  if (note == "q") {
    // sadece su sekildede yazılabilir      if (note == "Q" || note == "q")
    break;
  }
  i++;
  console.log(Number(note));
  //console.log(`${Number(i)} ${Number(note)}`);
}
