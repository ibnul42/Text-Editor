updateText = () => {
    let text = document.getElementById("text-input").value;
    document.getElementById("text-output").innerText = text;
}

makeBold = (elem) => {
    elem.classList.toggle('active');
    document.getElementById("text-output").classList.toggle('bold');
}

makeItalic = (elem) => {
    elem.classList.toggle('active');
    document.getElementById("text-output").classList.toggle('italic');
}
makeUnderline = (elem) => {    
    elem.classList.toggle('active'); 
    document.getElementById("text-output").classList.toggle('underline');
}

alignText = (elem, alignType) => {
    document.getElementById("text-output").style.textAlign = alignType;
    let buttonList = document.getElementsByClassName('align');
    for (let key of buttonList) {
        key.classList.remove('active'); 
    }
          
    // for (let i=0; i<buttonList.length; i++){
    // }
    elem.classList.add('active');
}
