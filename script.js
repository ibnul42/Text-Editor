function updateText() {
    let text = document.getElementById("text-input").value;
    document.getElementById("text-output").innerText = text;
}

function makeBold(elem) {
    elem.classList.toggle('active');
    document.getElementById("text-output").classList.toggle('bold');
}

function makeItalic(elem) {
    elem.classList.toggle('active');
    document.getElementById("text-output").classList.toggle('italic');
}

function makeUnderline(elem) {    
    elem.classList.toggle('active'); 
    document.getElementById("text-output").classList.toggle('underline');
}

function alignText(elem, alignType) {
    document.getElementById("text-output").style.textAlign = alignType;
    let buttonList = document.getElementsByClassName('align');
    for (let i=0; i<buttonList.length; i++){
        buttonList[i].classList.remove('active');
    }
    elem.classList.add('active');
}
