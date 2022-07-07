let section = {
    title: "",
    type: "",
    subsections: []
}

document.getElementById("addCheckBox").addEventListener("click", addCheckBox);
document.getElementById("addRadioButton").addEventListener("click", addRadioButton);
document.getElementById("addTextfield").addEventListener("click", addTextfield);
document.getElementById("addSubsection").addEventListener("click", addSubsectionToElement);


//--------------

function addCheckBox() {
    console.log("addCheckBox");
    section.type = "checkbox";
    section.title = document.getElementById("title").value;
    addHTML();

    resetSection();
}

function addRadioButton() {
    console.log("addRadioButton");
    section.type = "radio";
    section.title = document.getElementById("title").value;
    addHTML();

    resetSection();
}

function addTextfield() {
    console.log("addTextfield");
    section.type = "textfield";
    section.title = document.getElementById("title").value;
    addHTML();

    resetSection();
}

//---------------

function addSubsectionToElement() {
    console.log(document.getElementById("subsectionText").value);
    section.subsections.push(document.getElementById("subsectionText").value);

}

//-------------

function addHTML() {
    if (section.type != "" && section.title != "" && section.subsections != []) {
        console.log(section)

        let container = document.createElement("fieldset");

        container.className = "container";
        container.innerHTML = `<legend>${section.title}</legend> ${createHTML()}`;
        
        document.body.append(container);


    } else {
        alert("complete the inputs")
    }
}

function resetSection() {
    section = {
        title: "",
        type: "",
        subsections: []
    }
}

function createHTML(){
    let html ="";
    array = section.subsections;
    array.forEach((coso,index) => {html = html+(`<label for='cbox1' class='container'>${coso}<input type='${section.type}' id='cbox${index}' value='${coso}'><span class='checkmark'></span></label><br>`)});
    console.log(html)
    return html;
}