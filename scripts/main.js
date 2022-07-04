//the root class of every element in the questionary, the parent of questions and textfields
class Element{

    constructor(elementTitle,type, options, dificulty){
        this.elementTitle = elementTitle;
        this.type = type;
        this.options = options;   

        //this is made so the dificulty is always in between 1 and 10
        if(dificulty > 10 || dificulty < 1){
            this.dificulty = 10;
        }else{
                    this.dificulty = dificulty;
        }  
    }


}

//the types of elements are listed on this array
let optionsTypes = ["radio","checkbox","textfield"]

//an array of all elements, wich will be compiled into html later
let elementList = [];

let surveyTitle = prompt("Insert the title of your survey")

//order type entry
let orderType
while(orderType !== 1 && orderType !== 2){
    orderType = parseInt(prompt("Sort by 1-difficulty 2-type(enter the number)"))
}


//the entry of all the data
let elementTitle = prompt("enter element title, cancel to stop")
while(elementTitle !== null){
    let type = optionsTypes[parseInt(prompt("enter this survey type: \n 1-radio button \n 2-checkbox \n 3-textfield"))-1];
    let options = [];
    if(type != optionsTypes[2]){
        let option = "";
        while(option != null){
            option = prompt("enter the question or section of your survey element")
            options.push(option)
        }
        options.push(option);

    }else{
        //this is for the textfield
        options.push(prompt("textfield text"))
    }
    
    let dificulty = parseInt(prompt("enter survey element dificulty(from 1 to 10, being 10 the most dificult)"))

    elementList.push(new Element(elementTitle,type,options,dificulty))

    elementTitle = prompt("enter element title, cancel to stop")
}

// switch (orderType) {
//     case 1:
        elementList.sort((a , b) => a.dificulty-b.dificulty);
//        break;

//     case 2:
//         console.log(elementList)
//         elementList = elementList.sort((a , b) => {
//             console.log(a)
//             console.log(b)
//             return optionsTypes.find(element => element === a.type) - optionsTypes.find(element => element === b.type)})
//         break;
//     default:
//         break;
// }

console.log(elementList)
