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


    // It's a better way to do this but this is the first solution that comes to mind
    if (monthValue == birthdays[0] && birthDay >= 20 || monthValue == birthdays[1] && birthDay <= 18) {
        console.log('Aquarius');
    } else if (monthValue == birthdays[1] && birthDay >= 19 || monthValue == birthdays[2] && birthDay <= 20) {
        console.log('Pisces');
    } else if (monthValue == birthdays[2] && birthDay >= 21 || monthValue == birthdays[3] && birthDay <= 19) {
        console.log('Aries');
    } else if (monthValue == birthdays[3] && birthDay >= 20 || monthValue == birthdays[4] && birthDay <= 20){
        console.log('Taurus');
    } else if (monthValue == birthdays[4] && birthDay >= 21 || monthValue == birthdays[5] && birthDay <= 20) {
        console.log('Gemini');
    } else if (monthValue == birthdays[5] && birthDay >= 21 || monthValue == birthdays[6] && birthDay <= 22) {
        console.log('Cancer');
    }  else if (monthValue == birthdays[6] && birthDay >= 23 || monthValue == birthdays[7] && birthDay <= 22) {
        console.log('Leo');
    } else if (monthValue == birthdays[7] && birthDay >= 23 || monthValue == birthdays[8] && birthDay <= 22) {
        console.log('Virgo');
    } else if (monthValue == birthdays[8] && birthDay >= 23 || monthValue == birthdays[9] && birthDay <= 22) {
        console.log('Libra');
    } else if (monthValue == birthdays[9] && birthDay >= 23 || monthValue == birthdays[10] && birthDay <= 21) {
        console.log('Scorpio');
    } else if (monthValue == birthdays[10] && birthDay >= 22 || monthValue == birthdays[11] && birthDay <= 21) {
        console.log('Sagitarius');
    } else if (monthValue == birthdays[11] && birthDay >= 22 || monthValue == birthdays[0] && birthDay <= 19) {
        console.log('Capricorn');
    }
});



