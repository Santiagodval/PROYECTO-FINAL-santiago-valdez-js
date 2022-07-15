let section = {
    title: "",
    type: "",
    subsections: [],
    i: 0
}

localStorage.getItem("sections") === null ? localStorage.setItem("sections",JSON.stringify({})) : generateHTML();

document.getElementById("addCheckBox").addEventListener("click", addCheckBox);
document.getElementById("addRadioButton").addEventListener("click", addRadioButton);
document.getElementById("addTextfield").addEventListener("click", addTextfield);
document.getElementById("addSubsection").addEventListener("click", addSubsectionToElement);
document.getElementById("deleteAllSections").addEventListener("click", deleteAllSections);

//--------------

function addCheckBox() {
    console.log("addCheckBox");
    section.type = "checkbox";
    section.title = document.getElementById("title").value;
    addHTML();
    let newSection = JSON.parse(localStorage.getItem("sections"));
    console.log(Object.keys(newSection).length)
    newSection[Object.keys(newSection).length || 0] = section;
    localStorage.setItem("sections", JSON.stringify(newSection))

    resetSection();
}

function addRadioButton() {
    console.log("addRadioButton");
    section.type = "radio";
    section.title = document.getElementById("title").value;
    addHTML();
    let newSection = JSON.parse(localStorage.getItem("sections"));
    console.log(Object.keys(newSection).length)
    newSection[Object.keys(newSection).length || 0] = section;
    localStorage.setItem("sections", JSON.stringify(newSection))

    resetSection();
}

function addTextfield() {
    console.log("addTextfield");
    section.type = "textfield";
    section.title = document.getElementById("title").value;
    addHTML();
    let newSection = JSON.parse(localStorage.getItem("sections"));
    console.log(Object.keys(newSection).length)
    newSection[Object.keys(newSection).length || 0] = section;
    localStorage.setItem("sections", JSON.stringify(newSection))

    resetSection();
}

//---------------

function addSubsectionToElement() {
    console.log(document.getElementById("subsectionText").value);
    section.subsections.push({value:document.getElementById("subsectionText").value, number:section.i});
    section.i = section.i + 1;
    section.subsections[0].i;
    console.log(section.i);
}

//-------------

function addHTML() {
    if (section.type != "" && section.title != "" && section.subsections != []) {
        console.log(section)

        let container = document.createElement("fieldset");

        container.className = "fieldset";
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
        subsections: [],
        i:section.i
    }
}


//returns html from the section object
function createHTML(){
    let html ="";
    array = section.subsections;
    array.forEach((coso,index) => {html = html+(`<label for='cbox${coso.number}' class='container'>${coso.value}<input type='${section.type}' id='cbox${coso.number}' value='${coso.value}'><span class='checkmark'></span></label><br>`)});
    console.log(html)
    return html;
}


//creates and add the html to the dom from local storage
function generateHTML(){
    for(let i = 0;i<Object.keys(JSON.parse(localStorage.getItem("sections"))).length;i++){
        
        section.type = JSON.parse(localStorage.getItem("sections"))[i].type;
        section.title = JSON.parse(localStorage.getItem("sections"))[i].title;
        section.subsections = JSON.parse(localStorage.getItem("sections"))[i].subsections;
        addHTML();
        resetSection();
        section.i = JSON.parse(localStorage.getItem("sections"))[i].i;
    }
    
}

//delete sections

function deleteAllSections(){
    document.getElementById("body").innerHTML = ` <h1>Automatic survey generator</h1>

    <fieldset class="main-fieldset" id="addSectionFieldset">

        <legend>Add subsection</legend>

        <label for="title">Title for the section: </label>
        <input type="text" name="title" id="title"><br>
        <br>
        <label for="subsection">New subsection text:</label>
        <input type="text" name="bubsectionText" id="subsectionText">
        <button id="addSubsection">Add subsection</button>

        <br><br>

    <button id="addCheckBox">Add checkbox</button>
    <button id="addRadioButton">Add radiobutton</button>
    <button id="addTextfield">Add textfield</button>
    <button id="deleteAllSections">Delete all sections</button>

    </fieldset>


    <script src="scripts/main.js"></script>`;

    localStorage.removeItem("sections");
    localStorage.getItem("sections") === null ? localStorage.setItem("sections",JSON.stringify({})) : generateHTML();

document.getElementById("addCheckBox").addEventListener("click", addCheckBox);
document.getElementById("addRadioButton").addEventListener("click", addRadioButton);
document.getElementById("addTextfield").addEventListener("click", addTextfield);
document.getElementById("addSubsection").addEventListener("click", addSubsectionToElement);
document.getElementById("deleteAllSections").addEventListener("click", deleteAllSections);

}