
let card = document.querySelector(".trend");
let card2 = document.getElementById(".trendSec");

// console.log(card);
let blog = document.querySelector(".trends");

let mainPage = document.querySelector(".main");
console.log(blog)

function shops(){
mainPage.style.display="none";
blog.style.display="none";

}
function blogs(){
    console.log("dog")
    console.log(card)
    console.log('main',mainPage)
    mainPage.style.display="none";
    card.style.display="none";
    // card.style.display="none";
    blog.style.display="block";
    

document.getElementById("blog").style.color="grb(2, 173, 173)";
document.getElementById("shop").style.color="black";
document.getElementById("home").style.color="black";
document.getElementById("contact").style.color="black";
document.getElementById("about").style.color="black";

}