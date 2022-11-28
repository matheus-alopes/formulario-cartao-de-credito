// import "../src/css/index.css"

const ccBgColor01 = document.querySelector(".cc .cc-bg svg > g g:nth-child(1) path");
const ccBgColor02 = document.querySelector(".cc .cc-bg svg > g g:nth-child(2) path");
const ccLogo = document.querySelector(".cc .cc-logo span:nth-child(2) img")

console.log(ccLogo);


function setCardType(type) {
    const colors = {
        visa: ["#436D99", "#2D57F2"],
        mastercard: ["#DF6F29", "#C69347"],
        default: ["black", "gray"],
    }

    ccBgColor01.setAttribute("fill", colors[type][0]);
    ccBgColor02.setAttribute("fill", colors[type][1]);
    ccLogo.setAttribute("src", `./public/cc-${type}.svg`);
}

globalThis.setCardType = setCardType;

