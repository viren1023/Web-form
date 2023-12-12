function collectData() {
    
    let firstName = document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    let dob = document.getElementById('dob').value;
    let gender = document.getElementById('gender').value;

    let formData = {
        firstName,
        lastName,
        email,
        pass,
        dob,
        gender,
    };
    validateForm(formData);
}

function validateForm(data) {
    let fname = data.firstName.trim();
    let lname = data.lastName.trim();
    let pop = 0;
    
    // firstname validation
    if(fname == '') {
        document.getElementById("firstname_para").innerHTML = "Firstname cannot be empty.";
        document.getElementById("firstname").style.border = "solid rgb(255, 120, 120)";
        document.getElementById("firstname").style.borderRadius = "3px";
    }
    else if(letter_only(fname) === false) {
        document.getElementById("firstname_para").innerHTML = "Firstname cannot contain numbers.";
        document.getElementById("firstname").style.border = "solid red";
        document.getElementById("firstname").style.borderRadius = "3px";
    }
    else {
        document.getElementById("firstname_para").innerHTML = ""
        document.getElementById("firstname").style.border = "1px solid black";
        document.getElementById("firstname").style.borderRadius = "3px";
        pop++;
    }
    
    // lastname validation
    if(lname == '') {
        document.getElementById("lastname_para").innerHTML = "Lastname cannot be empty.";
        document.getElementById("lastname").style.border = "solid red";
        document.getElementById("lastname").style.borderRadius = "3px";
    }
    else if(letter_only(lname) === false) {
        document.getElementById("lastname_para").innerHTML = "Lastname cannot contain numbers.";
        document.getElementById("lastname").style.border = "solid red";
        document.getElementById("lastname").style.borderRadius = "3px";
    }
     else {
        document.getElementById("lastname_para").innerHTML = "";
        document.getElementById("lastname").style.border = "1px solid black";
        document.getElementById("lastname").style.borderRadius = "3px";
        pop++;
    }

    // email validation
    if(data.email == '') {
        document.getElementById("email_para").innerHTML = "E-mail cannot be empty.";
        document.getElementById("email").style.border = "solid red";
        document.getElementById("email").style.borderRadius = "3px";
    }
    else if(validateEmail(data.email) === false) {
        document.getElementById("email_para").innerHTML = "Invalid E-mail ID.";
        document.getElementById("email").style.border = "solid red";
        document.getElementById("email").style.borderRadius = "3px";
    }
     else {
        document.getElementById("email_para").innerHTML = "";
        document.getElementById("email").style.border = "1px solid black";
        document.getElementById("email").style.borderRadius = "3px";
        pop++;
    }

    // password validation
    if(data.pass == '') {
        document.getElementById("password_para").innerHTML = "Password cannot be empty.";
        document.getElementById("password").style.border = "solid red";
        document.getElementById("password").style.borderRadius = "3px";
    }
    else if(data.pass.length < 8) {
        document.getElementById("password_para").innerHTML = "Password should contain minimun of 8 character.";
        document.getElementById("password").style.border = "solid red";
        document.getElementById("password").style.borderRadius = "3px";
    }
     else {
        document.getElementById("password_para").innerHTML = "";
        document.getElementById("password").style.border = "1px solid black";
        document.getElementById("password").style.borderRadius = "3px";
        pop++;
    }

    // date of birth validation
    if(data.dob == '') {
        document.getElementById("dob_para").innerHTML = "Date of Birth cannot be empty.";
        document.getElementById("dob").style.border = "solid red";
        document.getElementById("dob").style.borderRadius = "3px";
    }
     else {
        document.getElementById("dob_para").innerHTML = "";
        document.getElementById("dob").style.border = "1px solid black";
        document.getElementById("dob").style.borderRadius = "3px";
        pop++;
    }
    // gender option validation
    if(data.gender == 0) {
        document.getElementById("gender_para").innerHTML = "Gender not selected.";
        document.getElementById("gender").style.border = "solid red";
        document.getElementById("gender").style.borderRadius = "3px";
    }
     else {
        document.getElementById("gender_para").innerHTML = "";
        document.getElementById("gender").style.border = "1px solid black";
        document.getElementById("gender").style.borderRadius = "3px";
        pop++;
    }

    if(pop === 6) {
        alert("The Form has been Submitted.");

        var jsonData = JSON.stringify(data);
    localStorage.setItem('formData',jsonData);
    console.log(localStorage);
    }
}

function letter_only(str) {
    const n = /^[a-zA-Z]+$/;
    return n.test(str);
  }

  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }