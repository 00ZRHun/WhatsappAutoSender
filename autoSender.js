/* var event_object = document.getElementById('pos-paid');

function emitKeyEvent() {

    //    This function triggers the event
    var keyEvent = new KeyboardEvent("keypress", {key : "p", char : "p", ctrlKey: true, shiftKey: true});
    event_object.dispatchEvent(keyEvent);
}

event_object.addEventListener('keypress', function(e){

    //    This function listens to the event
    console.log('abc');
    console.log(event, 'ctrlKey: ' + e.ctrlKey, 'shiftKey: '+ e.shiftKey, e.char, e.key);
    alert('CTRL + SHIFT + p pressed')

    e.preventDefault();

});

//    Just trigger CTRL + SHIFT + p with emitKeyEvent();
emitKeyEvent(); */

// location.href = 'https://www.codexworld.com';
// window.open('https://www.codexworld.com', '_blank');
/* window.globalStorage
windows.open("https://api.whatsapp.com/send?phone=601110604061&text=Hello%20World!%0AAnother%20World"); */
// openInChrome("https://google.com");
// chrome.browser.openTab("https://abc.com/");

// var phoneList = ["601110604061", "601110851018", "60187843196"];
var phoneList = [
  /* "01115049981",
      "0187856548",
      "0126063213",
      "0164225133",
      "0197586276",
      "0126113361",
      "0177896680",
      "01121704867",
      "0127517415",
      "0197722070",
      "01110707807",
      "0127888332",
      "0127161461",
      "0167819336",
      "0186614169",
      "0126246046",
      "0126246046",
      "0126246046",
      "0127644991",
      "0167211721",
      "0137403757",
      "0187683133",
      "0197889891",
      "0122199005",
      "0127644991",
      "0109205007",
      "0106618068",
      "0126113361",
      "0127017718",
      "0138169026",
      "65812288", */
  /*  "0167646260",
      "0122691835",
      "0182484528",
      "0143132245",
      "0167771006",
      "0182291885",
      "0177081858",
      "0127088879",
      "0167055823",
      "01111409123",
      "0167991776" */

  "0167646260",
  "0122691835",
  "0182484528",
  "0143132245",
  "0167771006",
  "0182291885",
  "0177081858",
  "0127088879",
  "0167055823",
  "01111409123",
  "0167991776",
  "01111225039",
  "0175127245",
  "587524290",
];
/* var phoneList = [
    "0123304159",
    "0167952118",
    "xxx",
    "0127090696",
    "0166222131",
    "0132898268",
    "0182409456",
    "582993899",
    "01116502701",
    "0184031677",
    "0124671315",
    "0127741118",
    "0167898337",
    "0122629368",
    "0167535999",
    "0125839368",
    "0127279145",
    "0127574538",
    "0102887216",
    "0167500808",
    "0122789131",
    "0127119693",
    "0102599271",
    "0127618519",
    "0124309191",
    "0122251482",
    "0167285294",
    "0122853403",
    "0167657003",
    "0177687777",
    "0196887808",
    "0177096683"
]; */
var text =
  "%E6%82%A8%E5%A5%BD%F0%9F%91%8B%F0%9F%8F%BB%0A%E6%88%91%E6%98%AF%E8%8C%83%E7%A5%96%E8%8D%A3%0A%E8%A1%8C%E5%8A%A8%E7%AE%A1%E5%88%B6%E4%BB%A4%E5%B7%B2%E7%BB%8F%E5%BB%B6%E8%BF%9F%E5%88%B06%E6%9C%889%E6%97%A5%0A%E5%B8%8C%E6%9C%9B%E5%A4%A7%E5%AE%B6%E5%9C%A8%E8%BF%99%E4%B8%AA%E6%97%B6%E5%80%99%E8%83%BD%E5%A4%9F%E4%BF%9D%E6%8C%81%E5%81%A5%E5%BA%B7%0A%0A%E7%94%B1%E4%BA%8E%E6%88%91%E4%BB%AC%E6%94%B6%E5%88%B0%E8%9B%AE%E5%A4%9A%E4%BA%BA%E7%9A%84%E8%AF%A2%E9%97%AERequest%0A%E9%9C%80%E8%A6%81%E9%87%8D%E6%B8%A9%E6%9C%89%E5%85%B3UTMSpace%E5%85%B6%E4%B8%AD%E8%80%81%E5%B8%88%E7%9A%84Digital%20Marketing%E6%95%99%E5%AD%A6%0A%E6%89%80%E4%BB%A5%E6%88%91%E4%BB%AC%E4%BA%BA%E5%91%98%E4%BC%9A%E5%8F%91%0A%E6%9C%89%E5%85%B3%E5%85%8D%E8%B4%B990%E5%88%86%E9%92%9FVideo%E8%AF%BE%E7%A8%8B%E7%9A%84%E9%93%BE%E6%8E%A5%0A%E5%B8%8C%E6%9C%9B%E6%82%A8%E5%8F%AF%E4%BB%A5%E9%87%8D%E6%B8%A9%E6%9C%89%E5%85%B3%E7%9A%84Online%20Digital%20Marketing%E7%9F%A5%E8%AF%86%0A%E5%A6%82%E6%9E%9C%E9%9C%80%E8%A6%81%E5%85%B6%E4%BB%96%E5%85%8D%E8%B4%B9%E6%88%96%E4%BC%98%E6%83%A0%E8%AE%A4%E8%AF%81%E8%AF%BE%E7%A8%8B%E8%AF%B4%E6%98%8E%0A%E9%83%BD%E5%8F%AF%E4%BB%A5%E9%9A%8F%E6%97%B6%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC%F0%9F%99%82%0A%E8%B0%A2%E8%B0%A2%F0%9F%99%8F%0A%0A90%E5%88%86%E9%92%9F%E5%AE%9E%E6%88%98OnlineMarketing%E6%96%87%E6%A1%88%E6%95%99%E5%AD%A6%E5%88%86%E4%BA%AB%0Ahttps%3A%2F%2Fyoutu.be%2FSaoHCrjFlo0";
// var phoneList = ["601110604061", "601110851018"];
phoneList.forEach(myFunction);

function myFunction(item, index) {
  // document.getElementById("someText").innerHTML +=  "https://api.whatsapp.com/send?phone=" + item + "&text=Hello%20World!%0AAnother%20World" + "</br>";
  // document.getElementById("someText").innerHTML +=  "<a id='anchor" +index+ "' target='_blank' href='" +　"https://api.whatsapp.com/send?phone=" + item + "&text=" +text+ "'>" + index + "</a>" + "</br>";
  document.getElementById("someText").innerHTML +=
    /* "</br>" + 
    "https://api.whatsapp.com/send?phone=6" + item + 
    "<a id='anchor" +index+ "' target='_blank' href='" +　"https://api.whatsapp.com/send?phone=" + item + "</a>" + 
    "</br>"; */
    /* "</br>" +index+ "</br>" +
    "https://api.whatsapp.com/send?phone=60" +item+  "&text=" +text+ 
    "<a id='anchor" +index+ "' target='_blank' href='" +　"https://api.whatsapp.com/send?phone=60" +item+  "&text=" +text+ "</a>" + 
    "</br>"; */
    index +
    1 +
    "</br>" +
    "https://api.whatsapp.com/send?phone=6" +
    item +
    // "<a id='anchor" +index+ "' target='_blank' href='" +　"https://api.whatsapp.com/send?phone=6" +item+ "</a>" +
    "</br>";
  // location.href =  "https://api.whatsapp.com/send?phone=" + item + "&text=Hello%20World!%0AAnother%20World";
  //   document.getElementById("someText").innerHTML +=  "<a href=\"" + "https://api.whatsap.com/send?phone=" + item + "&text=Hello%20World!%0AAnother%20World" + "\">" + index + "</a></br>";
  // document.getElementById("anchor" +index+ "").click();
}

// console.log()

/* let a = "Hello World";
alert('yoo');


document.getElementById('someText').innerHTML = a; */
// app window
/* function openInChrome(url) {
  chrome.runtime.sendMessage({action: "openURL", url: url});
} */

// background
/* chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if(message.action == "openURL") window.open(message.url);
}); */
