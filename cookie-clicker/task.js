
const img = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");

img.onclick = () => {
    if (img.width == 200) {
        img.width += 20;
        img.height += 20;
        clickerCounter.textContent ++;
    } else {
        img.width -= 20;
        img.height -= 20;
        clickerCounter.textContent ++;
    }
    //img.onclick = null;
};

