// refer to question 4 before development starts for scope document

function formValidation() {
    //Checks if firstname is filled in.
    var firstName = document.getElementById('firstName');
    if (firstName.value === '') {
        var showNameError = document.getElementsByClassName('error')[0];
        showNameError.style.display = 'inline';
    } else {
        console.log('Alles gut');
    }
    
    //Checks if lastname is filled in.
    var lastName = document.getElementById('lastName');
    if (lastName.value === '') {
        var showNameError = document.getElementsByClassName('error')[1];
        showNameError.style.display = 'inline';
    } else {
        console.log('Alles gut');
    }
    
    //Validates phone number.
    var phoneNumber = document.getElementById('phone');
    var checkNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!checkNumber.test(phoneNumber.value)) {
        var showPhoneError = document.getElementsByClassName('error')[2];
        showPhoneError.style.display = 'inline';
    } else {
        console.log('Alles gut');
    }
    
    //Validates e-mail address.
    var email = document.getElementById('email');
    var checkMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!checkMail.test(email.value)) {
        var showMailError = document.getElementsByClassName('error')[3];
        showMailError.style.display = 'inline';
    } else {
        console.log('Alles gut');
    }
}

var submit = document.getElementById('submitContact');
submit.addEventListener('click', function(){
    formValidation();
})

