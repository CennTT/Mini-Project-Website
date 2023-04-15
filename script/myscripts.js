function getName() {
    var name = prompt("Please enter your name:", "");
    document.getElementById("name").innerText = name;
}

function validateForm() {
    const name = document.forms["form"]["name"].value;
    const birthDate = document.forms["form"]["birthdate"].value;
    const gender = document.forms["form"]["gender"].value;
    const messages = document.forms["form"]["message"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);
    return false;
}


function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}