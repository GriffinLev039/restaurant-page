import { applyContent } from "./home";
import {createPage} from "./menu";
import "./styles.css";
(() => {
    const content = document.getElementById('content');
    const homeBtn = document.getElementById('homeBtn');
    const menuBtn = document.getElementById('menuBtn');
    const abtBtn = document.getElementById('abtBtn');
    console.log("Functional!");

    homeBtn.addEventListener('click', () => {
        clearContent();
        applyContent(content);
        homeBtn.classList.add("Selected");
        menuBtn.classList.remove("Selected");
        abtBtn.classList.remove("Selected");
    });

    menuBtn.addEventListener('click', () => {
        clearContent();
        content.appendChild(createPage());
        homeBtn.classList.remove("Selected");
        menuBtn.classList.add("Selected");
        abtBtn.classList.remove("Selected");
    });

    abtBtn.addEventListener('click', () => {
        clearContent();
        const para = document.createElement('p');
        para.textContent = "About";
        content.appendChild(para);
        homeBtn.classList.remove("Selected");
        menuBtn.classList.remove("Selected");
        abtBtn.classList.add("Selected");
    });
    applyContent(content);
    homeBtn.classList.add("Selected");
})();



function clearContent() {
    while (content.hasChildNodes()) {
        content.removeChild(content.firstChild);
    }
}




//Function to wipe document clean
// Use IIFE for this? Not IIFE but similar, basically just to have modular and private variables.