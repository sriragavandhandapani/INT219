document.getElementById("nameInput").oninput = function () {
    document.getElementById("nameOutput").innerText = this.value;
    checkForm();
};

document.getElementById("contactInput").onkeypress = function (event) {
    if (event.key < '0' || event.key > '9') {
        event.preventDefault()
    }
    checkForm();
};

document.getElementById("eventSelect").onchange = function () {
    document.getElementById("eventOutput").innerText = this.value;
    checkForm();
};


function checkForm() {
    let name = document.getElementById("nameInput").value;
    let contact = document.getElementById("contactInput").value;
    let event = document.getElementById("eventSelect").value;
    let button = document.getElementById("registerBtn");

    if (name && contact && event) {
        button.disabled = false;
        button.classList.remove("bg-gray-400", "cursor-not-allowed");
        button.classList.add("bg-blue-600", "hover:bg-blue-700");
    } else {
        button.disabled = true;
        button.classList.remove("bg-blue-600", "hover:bg-blue-700");
        button.classList.add("bg-gray-400", "cursor-not-allowed");
    }
}

// Show registration message on click
document.getElementById("registerBtn").onclick = function () {
    document.getElementById("registrationMessage").classList.remove("hidden");
};
