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
});
