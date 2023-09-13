const formSection = document.getElementById("form");
const userCountSlider = document.getElementById("userCount");
const userCountDisplay = document.getElementById("userCountDisplay");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const submitButton = document.getElementById("submitButton");
const submitForm = document.getElementById("submitForm");
const slider = document.getElementById("user-slider");






function priceHandler() {
    formSection.setAttribute('id', 'active')
    slider.setAttribute('id', 'user-slider')
}




// Update the display with the initial value
userCountDisplay.innerText = userCountSlider.value;

// Add an event listener to update the display when the slider changes
userCountSlider.addEventListener("input", function () {
    userCountDisplay.innerText = userCountSlider.value;
});



// const userData = {};


// // Add a click event listener to the submit button
// submitButton.addEventListener("click", function() {
//     // Get the values from the input fields
//     const name = nameInput.value;
//     const email = emailInput.value;

//     // const userCount = userCountSlider.value;



//     // Check if the inputs are not empty
//     if (name && email ) {
//         // Store the data in the userData object
//         userData.name = name;
//         userData.email = email;

//         // Display the stored data (you can modify this part)
//         JSON.stringify(userData)
//         console.log(userData);
//         // Clear the input fields
//         nameInput.value = "";
//         emailInput.value = "";
//     } else {
//         alert("Please fill out fields.");
//     }
// });

const userData2 = {};

submitForm.addEventListener('click', async event => {
    event.preventDefault();
    formSection.setAttribute('id', 'active')
    slider.setAttribute('id', 'active')

    const data = new FormData(formSection);
    const AcessCode = 'M9K9FWNL8WDZH912EJN4O83VL';

    console.log(Array.from(data));

    try {
        const res = await fetch(
            'forms.maakeetoo.com/formapi/383',
            {
                method: 'POST',
                body: data,
                AcessCode: AcessCode,
            },
        );

        const resData = await res.json();

        console.log(resData);
    } catch (err) {
        console.log(err.message);
    }
    formSection = null
});



formSection.addEventListener('submit', async event => {
    event.preventDefault();

    let data = new FormData(formSection);
    const AcessCode = 'M9K9FWNL8WDZH912EJN4O83VL';

    console.log(Array.from(data));

    try {
        const res = await fetch(
            'forms.maakeetoo.com/formapi/383',
            {
                method: 'POST',
                body: data,
                AcessCode: AcessCode,
            },
        );

        const resData = await res.json();

        console.log(resData);
    } catch (err) {
        console.log(err.message);
    }
    data = ""
});
