import "./style.css";


const navbaricon = document.querySelector(".navbaricon");
const dropDown = document.querySelector(".dropDown");

const dropDownElements = () =>{
    dropDown.classList.toggle("visible");
}

navbaricon.addEventListener("click",dropDownElements);