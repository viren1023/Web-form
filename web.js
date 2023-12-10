function collectData() {
    
    let firstName = document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    let dob = document.getElementById('dob').value;
    let gender = document.getElementById('gender').value;
    // console.log(firstName)
    // console.log(gender);

    let formData = {
        firstName,
        lastName,
        email,
        pass,
        dob,
        gender,
    };
    console.log(formData.gender);

    // Create an object with form data
    validateForm(formData);
}

function validateForm(data) {

    
    if(data.firstName.trim() == '') {
        document.getElementById("firstname_para").innerHTML = "Firstname cannot be empty";
        document.getElementById("firstname").style.border = "solid red";
    }
    // else if(data.firstName.match(/^[a-zA-Z]+$/) === null) {
    //     document.getElementById("firstname_para").innerHTML = "Firstname cannot contain numbers.";
    //     document.getElementById("firstname").style.border = "solid red";
    // }
    else {
        document.getElementById("firstname_para").innerHTML = ""
        document.getElementById("firstname").style.border = "1px solid black";
    }
    
    if(data.lastName.trim() == '') {
        document.getElementById("lastname_para").innerHTML = "Lastname can not be empty";
        document.getElementById("lastname").style.border = "solid red";
    }
     else {
        document.getElementById("lastname_para").innerHTML = "";
        document.getElementById("lastname").style.border = "1px solid black";
    }

    if(data.email == '') {
        document.getElementById("email_para").innerHTML = "E-mail can not be empty";
        document.getElementById("email").style.border = "solid red";
    }
     else {
        document.getElementById("email_para").innerHTML = "";
        document.getElementById("email").style.border = "1px solid black";
    }

    if(data.pass == '') {
        document.getElementById("password_para").innerHTML = "Password can not be empty";
        document.getElementById("password").style.border = "solid red";
    }
    else if(data.pass.length < 8) {
        document.getElementById("password_para").innerHTML = "Password should contain maximum of 8 character.";
        document.getElementById("password").style.border = "solid red";
    }
     else {
        document.getElementById("password_para").innerHTML = "";
        document.getElementById("password").style.border = "1px solid black";
    }

    if(data.dob == '') {
        document.getElementById("dob_para").innerHTML = "Date of Birth can not be empty";
        document.getElementById("dob").style.border = "solid red";
    }
     else {
        document.getElementById("dob_para").innerHTML = "";
        document.getElementById("dob").style.border = "1px solid black";
    }

    if(data.gender == 0) {
        document.getElementById("gender_para").innerHTML = "Gender not selected.";
        document.getElementById("gender").style.border = "solid red";
    }
     else {
        document.getElementById("gender_para").innerHTML = "";
        document.getElementById("gender").style.border = "1px solid black";
    }
    

}
