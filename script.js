class PopupObj{
    constructor(title, text, imgSrc, cList){
        this.title = title
        this.text = text
        this.imgSrc = imgSrc
        this.cList = cList
    }
}

function Send(){
    let message = document.getElementById("mes")
    let clientName = document.getElementById("clientName")
    alert("Повідомлення: " + message.value + "\nВідправлено від: " + clientName.value)
}

let popupArr = [
    new PopupObj("Перший проект", "Сад для молодої сім'ї задуманий у стилі лаунж (лаунж - дозвільне проведення часу). Компактна територія відокремлена від сусідніх ділянок стриженими огорожами із вічнозелених рослин та сприймається як єдина зелена кімната. «Серце» саду – зона відпочинку сучасного планування з альтанкою та декоративною водоймою. Рух води, створюваний гейзерами, підтримує атмосферу спокою, розслабленості та комфорту. У саду багато вічнозелених рослин, які весь рік зберігають структуру та форму. Однак кожну пору року відзначено яскравим сезонним цвітінням — сакури, ірисів, гортензій та анемон.", "img/pr1.jpg", "readMoreBtn popup1"),

    new PopupObj("Другий проект", "Сад на схилі на схилі потребує особливого підходу та вирішення технічних завдань. Але вирішивши ці технічні питання, ви отримаєте квітник на схилі або сад на схилі, який виглядатиме більш виразно і видовищно, ніж на рівній поверхні. Це далеко не єдиний наш сад, який ми створили на схилі ділянки, але, напевно, один із найулюбленіших. Важливе та складне завдання, яке стояло перед нашою компанією – це зміцнити схил та зробити сад сучасним та стильним. Сад на схилі характерний використанням технічних рішень щодо організації зміцнення схилу та його дренування.", "img/pr2.jpg", "readMoreBtn popup2"),

    new PopupObj("Третій проект", "У цьому проекті нашої компанії перед фахівцями нашої компанії стояло не просте завдання. Лаванда в ландшафтному дизайні саду мала зіграти особливу роль і виглядати насиченою яскравою плямою. На даному об'єкті будинок розташований у нижній частині схилу та територія, дизайн якого нам потрібно було спроектувати, повинен був вміщувати в себе і господарську зону з великим вольєром для собаки, і великий повноцінний город, майданчик для споглядання заходів сонця у верхній частині схилу.", "img/pr3.jpg", "readMoreBtn popup3") ]

$("a.scroll-to").on("click", function(e){
    e.preventDefault();
    let anchor = $(this).attr('href');
    console.log(anchor);
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 1500);
});
function goTop(){
    $("button.scroll-to").on("click", function(e){
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $("#header").offset().top - 60
        }, 1500);
    });
}





let popupBtn = document.getElementsByClassName("readMoreBtn")

$(".readMoreBtn").on("click", function(e){
    if(this.classList == "readMoreBtn popup1"){
        document.getElementsByClassName("popupTitle")[0].innerHTML = popupArr[0].title
        document.getElementsByClassName("popupText")[0].innerHTML = popupArr[0].text
        document.getElementsByClassName("popupImgSrc")[0].setAttribute("src", popupArr[0].imgSrc)
    }else if(this.classList == "readMoreBtn popup2"){
        document.getElementsByClassName("popupTitle")[0].innerHTML = popupArr[1].title
        document.getElementsByClassName("popupText")[0].innerHTML = popupArr[1].text
        document.getElementsByClassName("popupImgSrc")[0].setAttribute("src", popupArr[1].imgSrc)
    }else if(this.classList == "readMoreBtn popup3"){
        document.getElementsByClassName("popupTitle")[0].innerHTML = popupArr[2].title
        document.getElementsByClassName("popupText")[0].innerHTML = popupArr[2].text
        document.getElementsByClassName("popupImgSrc")[0].setAttribute("src", popupArr[2].imgSrc)
    }
    e.preventDefault()
    let popup = document.getElementsByClassName("popup")
    let popupCont = document.getElementsByClassName("popupCont")
    document.body.classList = "active"
    popup[0].classList = "popup active"
    popupCont[0].classList = "popupCont active"
})

$(".popupClose").on("click", function(e){
    e.preventDefault()
    let popup = document.getElementsByClassName("popup")
    let popupCont = document.getElementsByClassName("popupCont")
    document.body.classList = ""
    popup[0].classList = "popup"
    popupCont[0].classList = "popupCont"
})

$(".background").on("click", function(e){
    e.preventDefault()
    let popup = document.getElementsByClassName("popup")
    let popupCont = document.getElementsByClassName("popupCont")
    document.body.classList = ""
    popup[0].classList = "popup"
    popupCont[0].classList = "popupCont"
})