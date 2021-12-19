const sr=ScrollReveal({
    distance:'100px',
    duration:3100,
});
sr.reveal('.r',{
    origin:'left',
    interval: 500,
});





  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var newWin = open('url','windowName','height=300,width=300');
newWin.document.write('html to write...');

function ChangeCurrencyToKZT2(){
          document.getElementById("Currency").innerHTML="Price in KZT:"
          var a=document.getElementById("p1").innerHTML;
           document.getElementById("p1").innerHTML="44,099KZT";

}


function ChangeCurrencyToUSD2(){


          document.getElementById("Currency").innerHTML="Price in USD:"
          var a=document.getElementById("p1").innerHTML;
           document.getElementById("p1").innerHTML="100USD";
          


}


function ChangeCurrencyToEUR2(){
           document.getElementById("Currency").innerHTML="Price in EUR:"
           var a=document.getElementById("p1").innerHTML;
            document.getElementById("p1").innerHTML="88.98EUR";
           


}
function ChangeCurrencyToKZT1(){
    document.getElementById("Currency2").innerHTML="Price in KZT:"
    var a=document.getElementById("p2").innerHTML;
     document.getElementById("p2").innerHTML="44,099KZT";

}


function ChangeCurrencyToUSD1(){


    document.getElementById("Currency2").innerHTML="Price in USD:"
    var a=document.getElementById("p2").innerHTML;
     document.getElementById("p2").innerHTML="100USD";
    


}


function ChangeCurrencyToEUR1(){
     document.getElementById("Currency2").innerHTML="Price in EUR:"
     var a=document.getElementById("p2").innerHTML;
      document.getElementById("p2").innerHTML="88.98EUR";
     


}
function ChangeCurrencyToKZT3(){
    document.getElementById("Currency3").innerHTML="Price in KZT:"
    var a=document.getElementById("p3").innerHTML;
     document.getElementById("p3").innerHTML="187,423KZT";

}


function ChangeCurrencyToUSD3(){


    document.getElementById("Currency3").innerHTML="Price in USD:"
    var a=document.getElementById("p3").innerHTML;
     document.getElementById("p3").innerHTML="425USD";
    


}


function ChangeCurrencyToEUR3(){
     document.getElementById("Currency3").innerHTML="Price in EUR:"
     var a=document.getElementById("p3").innerHTML;
      document.getElementById("p3").innerHTML="378.18EUR";
     


}
function ChangeCurrencyToKZT4(){
    document.getElementById("Currency4").innerHTML="Price in KZT:"
    var a=document.getElementById("p4").innerHTML;
     document.getElementById("p4").innerHTML="15,434KZT";

}


function ChangeCurrencyToUSD4(){


    document.getElementById("Currency4").innerHTML="Price in USD:"
    var a=document.getElementById("p4").innerHTML;
     document.getElementById("p4").innerHTML="35USD";
    


}


function ChangeCurrencyToEUR4(){
     document.getElementById("Currency4").innerHTML="Price in EUR:"
     var a=document.getElementById("p4").innerHTML;
      document.getElementById("p4").innerHTML="31.14EUR";
     


}
