    // event listener for the Save button
document.getElementById("saveBtn").addEventListener("click",()=>{
    const nameInput = document.getElementById("userName");
    const ageInput = document.getElementById("userAge");
    // validate that both input elements exist
    if (!nameInput || !ageInput) {
        console.error("Form elements does not exist");
        return;
    }
    // get the values from the inputs
    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);
    // save data to Local Storage if valid
    if (name && !isNaN(age)) {
        localStorage.setItem ("userName", name);
        localStorage.setItem ("userAge", age);
        displayData();// update the view with saved data
    } else {
        alert ("Please, enter a valid name as well as a number for age")
    }
    updateInteractionCount();
});
// function to display saved data on the page
function displayData() {
    const output = document.getElementById("output");

    const name = localStorage.getItem("userName");
    const age = localStorage.getItem("userAge");
    // show stored data or display a fallback message
    if (name && age) {
        output.innerHTML = `<p><strong>Name:</strong> ${name}</p><p><strong>Age:</strong> ${age}</p>`;
    } else {
        output.innerHTML = `<p>No stored data found.</p>`;
    }
}

// function to track and display session interactions
function updateInteractionCount() {
    let count = sessionStorage.getItem("interactionCount");
    
    if (!count) {
        count = 0;
    }
    
    count++;
    sessionStorage.setItem("interactionCount", count);
    // show interaction count in real time
    const counterDisplay = document.getElementById("interactionCount");
    if (counterDisplay) {
        counterDisplay.textContent = `Session Interactions: ${count}`;
    }
}

// event listener for the Clear button
document.getElementById("clearBtn").addEventListener("click", () => {
    // clear all data from Local Storage
    localStorage.removeItem("userName");
    localStorage.removeItem("userAge");

    // clear the displayed content
    displayData();

    // count the interaction
    updateInteractionCount();
});

// when the page loads, show stored data and initialize counter
window.addEventListener("DOMContentLoaded", () => {
    displayData();
    updateInteractionCount();
});