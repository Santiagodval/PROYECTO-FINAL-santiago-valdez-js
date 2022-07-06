let checkButton = document.getElementById("addCheckBox");
let radioButton = document.getElementById("addRadioButton");
let txtfldButton = document.getElementById("addTextfield");
let addSubsection = document.getElementById("addSubsection");

let section = {
    title:"",
    type:"",
    subsections: []
}

checkButton.addEventListener("click", addCheckBox);
radioButton.addEventListener("click", addRadioButton);
txtfldButton.addEventListener("click", addTextfield);
addSubsection.addEventListener("click", addSubsectionToElement);


//--------------

function addCheckBox(){
    console.log("addCheckBox");
    section.type = "checkbox";
    section.title = document.getElementById("title").value;  
    addHTML();

    section.subsections = [];
}

function addRadioButton(){
    console.log("addRadioButton");
}

function addTextfield(){
    console.log("addTextfield");
}

//---------------

function addSubsectionToElement(){
    console.log(document.getElementById("subsectionText").value);
    section.subsections.push("asdf");    
}

//-------------

function addHTML(){
    if(section.type != ""){
    console.log(section)
    }
}