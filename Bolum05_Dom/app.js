// querySelector : .classlara erisim icin adi(.h) veya
// id li bir HTML elemanina erisim icin #id (#r) seklinde kullanir

function hesapla() {
  const r = document.getElementById("r").value;
  const h = document.querySelector(".h").value;

  const hacim = document.querySelector(".hacim");
  const sonuc = (Math.PI * r * r * h).toFixed(2);
  console.log(sonuc, r, h); //141.37 3 5
  document.querySelector(".hacim").innerHTML = sonuc; //hacim.innerHTML = Math.round(sonuc);
}

//? DOM (DOCUMENT OBJECT MODEL)
/*
• DOM (Belge Nesne Modeli) dokümanların yapısallaştırılmış gösterimidir ve W3C (World Wide Web Consortium) standardıdır.
• DOM, dokümanlarının stillerinin, yapısının, içeriğinin erişilmesine ve güncellenmesine olanak sağlayan, dilden-bağımsız bir arabirimdir.
• W3C DOM standardı 3 farklı alt birime ayrılmaktadır.
      • Core DOM – Bütün doküman tipleri için standart modeldir.
      • XML DOM – XML dokümanları için standart modeldir.
      • HTML DOM – HTML dokümanları için standart modeldir.

//! HTML DOM => KISACA DOM
• HTML dökümanları için standart nesne modeli ve programlama
arabirimidir (API ).
• DOM şunları tanımlar;
    • HTML elemanlarını Nesneler (objects) olarak,
    • Tüm HTML elemanlarını özelliklerini (properties)
    • Tüm HTML elemanlarının erişimine olanak sağlayan metotları (methods),
    • Tüm HTML elemanları için olayları (events)
• Diğer bir ifade ile HTML elemanlarının okunması, değiştirilmesi, eklenmesi ve silinmesi gibi işlemlerin nasıl yapılacağını belirleyen bir standarttır.    

//! DOM ELEMANLARINA NASIL ERİŞİLİR
• Bir HTML sayfasındaki elemanları seçmek için DOM API’de bir çok hazır metot bulunmaktadır.
//**HTML Elemanları Seçmek için metotlar;
          Metot                        Açıklaması

document.getElementById(id)            Bir elemanı id’ye göre bul

document.getElementsByTagName(isim)    Bir elemanı Tag (Etiket) adına göre bul

document.getElementsByClassName(isim)  Bir elemanı Class (Sınıf) adına göre bul

document.querySelector(CSS seçici)     Bir elemanı id, class, özellik, tür ve değere göre seçmek için kullanılır. 
                                       Eşleşen ilk elemanı seçer.

document.querySelectorAll(CSS seçici)  Bir elemanı id, class, özellik, tür ve değere göre seçmek için kullanılır. 
                                       Eşleşen elemanların listesini döndürür.

 • HTML elemanları bir önceki slaytta bulunan metotlar ile seçildikten sonra O elemana ait bazı özellikler ve stiller değiştirilebilir.                                      
//**HTML Elemanları Özellik ve Stillerini Degistirmek
          Metot                        Açıklaması

element.innerHTML = yeni               içerik Bir HTML elemanın içerğini değiştirme

element.attribute = yeni değer         Bir HTML elemanının özelliğini değiştirme

element.setAttribute(özellik, değer)   Bir HTML elemanının özelliğini değiştirme

element.style.property = yeni stil     Bir HTML elemanın stilini değiştirme         


//! YENİ BİR HTML ELEMANI NASIL OLUŞTURULUR?
//**Yeni bir HTML Elemanı oluşturmak için metotlar
Metot                                   Açıklaması

document.createElement(isim)            Yeni bir eleman oluşturur.

Document.createTextNode(text)           Bir eleman için text düğümü oluşturur.

element.appendChild(text düğüm)         Bir text düğümüne elemana bağlar.

Element.removeChild(child düğüm)        Bir elemanın çocuk düğümünü siler.
*/


/*
java.lang.StackOverflowError hatasını neden alırsınız?
Merhaba,

Bu hatayı deadlock durumlarında alırsınız ve bunun 2 nedeni olabilir.

1. Eğer bir method kendi kendini sonsuz kere çağırıyorsa (Recursive methodlar)
private int getX(int b){
    b += 1;
    ...
    ...
    return getX(b);
}

2. Ya da birinci method ikinci methodu çağırırken ikinci method içindeki herhangi bir satır birinci methodu çağırıyorsa.
*/