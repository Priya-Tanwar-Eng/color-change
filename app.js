let array = ["pinki", "red", "green","yello","orange","skyblue"];
let Btn = document.querySelector("div");
let arr = () => {
    let random = parseInt(Math.random()*6)
    Btn.style.backgroundColor = array[random];
    console.log("click");
}