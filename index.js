// Select DOM elements
const inputField = document.getElementById("inputText"); // Input box for text
const addButton = document.getElementById("addButton"); // Button to add text
const textList = document.getElementById("textList"); // UL to display the text

// Add event listener to the button
addButton.addEventListener("click", function() {
    const newText = inputField.value; // Get the value from the input box
    if (newText.trim() !== "") {
        // Create a new list item (li) to hold the text
        const li = document.createElement("li");
        li.textContent = newText;
        
        // Append the new list item to the textList
        textList.appendChild(li);
        
        // Clear the input field
        inputField.value = "";
    }
})



/* Practing javascript code  - its un related to the project hence it is commneted out
// let 
// const
//var ( outdated wayy to create variables)

let userEmail = "biidy@gdgd";
let age = 99;

age = age + 1;

// const varaibles are always constant 


let hadFood = true;

if(hadFood == true){
    return 
}

 loggedIn && hasMebership ? "show vide" : "dont show vide"

 //loops - repeat same code over and over agin

//DRY - Dont repeat yourself - use loop
 

for(let i = 0; i < 5; i++){
    console.log(i)

}


for(let i =1; i <= 15; i++){
    if(i % 5 == 0){
        console.log("ASAP frontednend");
    }
    else if(i % 2 == 0 ){
        console.log("Frontend")
    }
    else {
        console.log("ASAPS");
    }
  
}

let str = "Asjajs";

for(i = 0; i < str.length; i++){
    comdole(str[i]);
}


//functions - resuable cloks of cod ethat perfrom specfic tasks
// 


function greetUser(name) {
 
    console.log(`kskksk, ${name}`)
}

greetUser("nsus")


function sum(num1, num2){
    return num1 + num2;
}

sum(2,4)

//regular function
function convertusdtoasd(usd){
 let aud = usd * 1.5;
 return aud;
}


//arrow function
const convertUsdoo = (dollars) => {

    retun
}






convertusdtoasd(100)






let array = ["lslsl","sjsj"];

array[0]

console.log(array[array.length -1 ])

array.push("bob");
array.filter(() => {})



let arrays = [23,12,17,29];

let filteredArray = arrays.filter((element) => {
    return element <= 15;
});

console.log(filteredArray)


let arraye = [18, 20,16,15,21];

let filteredArrays = array.filter((element)=>
    {
            return element <= 18;
});

console.log()
*/