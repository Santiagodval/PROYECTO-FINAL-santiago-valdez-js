let section = {
    title: "",
    type: "",
    subsections: [],
    i: 0
}

localStorage.getItem("sections") === null ? starter() : generateHTML();

document.getElementById("addCheckBox").addEventListener("click", addCheckBox);
document.getElementById("addRadioButton").addEventListener("click", addRadioButton);
document.getElementById("addTextarea").addEventListener("click", addTextarea);
document.getElementById("addSubsection").addEventListener("click", addSubsectionToElement);
document.getElementById("deleteAllSections").addEventListener("click", deleteAllSections);
document.getElementById("dark-mode").addEventListener("click", darkMode);

function starter(){
   localStorage.setItem("sections",JSON.stringify({}));
    fetch("./instrucciones.json").then(respuesta => respuesta.json()).then(data => {
        section = data[0];
        addHTML();
        let newSection = JSON.parse(localStorage.getItem("sections"));
        newSection[Object.keys(newSection).length || 0] = section;
        localStorage.setItem("sections", JSON.stringify(newSection))
        section.i = section.i + 1;

        resetSection();
    })
    
}

//--------------

function addCheckBox() {
    section.type = "checkbox";
    section.title = document.getElementById("title").value;
    addHTML();
    let newSection = JSON.parse(localStorage.getItem("sections"));
    newSection[Object.keys(newSection).length || 0] = section;
    localStorage.setItem("sections", JSON.stringify(newSection))

    resetSection();
}

function addRadioButton() {
    section.type = "radio";
    section.title = document.getElementById("title").value;
    addHTML();
    let newSection = JSON.parse(localStorage.getItem("sections"));
    newSection[Object.keys(newSection).length || 0] = section;
    localStorage.setItem("sections", JSON.stringify(newSection))

    resetSection();
}

function addTextarea() {
    section.type = "textarea";
    section.title = document.getElementById("title").value;
    addHTML();
    let newSection = JSON.parse(localStorage.getItem("sections"));
    newSection[Object.keys(newSection).length || 0] = section;
    localStorage.setItem("sections", JSON.stringify(newSection))

    resetSection();
}

//---------------

function addSubsectionToElement() {
    section.subsections.push({value:document.getElementById("subsectionText").value, number:section.i});
    section.i = section.i + 1;
    section.subsections[0].i;
}

//-------------

function addHTML() {
    if (section.type != "" && section.title != "" && section.subsections != [] && section.type!="textarea") {

        let container = document.createElement("fieldset");

        container.className = "fieldset";
        container.innerHTML = `<legend>${section.title}</legend> ${createHTML()}`;
        
        document.body.append(container);


    } else if(section.type === "textarea"){
        let container = document.createElement("fieldset");

        container.className = "fieldset";
        container.innerHTML = `<legend>${section.title}</legend> ${createHTMLtextarea()}`;
        
        document.body.append(container);
    }else{
        swal("Complete the inputs!");
    }
}

function createHTMLtextarea(){
    let html ="";
    array = section.subsections;
    array.forEach((coso,index) => {html = html+(`<br><label class='container'><span class='label'>${coso.value}</span><textarea type='${section.type}' id='cbox${coso.number}' name='${section.type}${section.i}' value='${coso.value}'></textarea></label><br>`)});
    return html;
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
    array.forEach((coso,index) => {html = html+(`<label class='container'><span class='label'>${coso.value}</span><input type='${section.type}' id='cbox${coso.number}' name='${section.type}${section.i}' value='${coso.value}'><span class='checkmark ${section.type}'></span></label><br>`)});
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
    document.getElementById("body").innerHTML = ` <h1>Automatic survey generator</h1><button id="dark-mode"><i class="fa-solid fa-moon"></i></button>

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
    <button id="addTextarea">Add textarea</button>
    <button id="deleteAllSections">Delete all sections</button>

    </fieldset>


    <script src="scripts/main.js"></script>`;

    localStorage.removeItem("sections");
    localStorage.getItem("sections") === null ? localStorage.setItem("sections",JSON.stringify({})) : generateHTML();

document.getElementById("addCheckBox").addEventListener("click", addCheckBox);
document.getElementById("addRadioButton").addEventListener("click", addRadioButton);
document.getElementById("addTextarea").addEventListener("click", addTextarea);
document.getElementById("addSubsection").addEventListener("click", addSubsectionToElement);
document.getElementById("deleteAllSections").addEventListener("click", deleteAllSections);
document.getElementById("dark-mode").addEventListener("click", darkMode);

}

//dark mode

function darkMode(){

    if(document.querySelector("body").className.includes("dark")){
        document.querySelector("body").className = "light";
    }else{
        document.querySelector("body").className = "dark";
    }
}