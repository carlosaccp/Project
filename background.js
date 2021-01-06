const button = document.getElementById("clicker")
const body = document.querySelector("body")


body.style.backgroundColor = 'violet'
button.addEventListener('click', changeBackground)

function changeBackground(){
    var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    body.style.backgroundColor = randomColor;
    document.getElementById("color").innerHTML = `HEX COLOR: ${randomColor}`;
}
