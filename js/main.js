// Birthday months
const birthdays = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// console.log(birthdays);

// targeting the dropdown menu
let select = document.querySelector('#selection');

// targeting submit button
let submit = document.querySelector('#submit');


// Generating days of the month
for (let day = 1; day < 32; day++) {
    document.getElementById('day').innerHTML += `<option>${day}</option>`;
}


// when user picks a month, a event listener is triggered and monthValue will be stored
submit.addEventListener('click', function() {
    let monthValue = select.value;

    let birthDay = document.querySelector('#day').value;

    // console.log(birthDay);
    // console.log(monthValue);

    // for (i = 0; i < birthdays.length; i++) {
    //     if (monthValue === birthdays[0]) {
    //         console.log('worked!!');
    //         break;
    //     }
    // }

    if (monthValue == birthdays[0] && birthDay < 10) {
        console.log('Jan');
    }
});



