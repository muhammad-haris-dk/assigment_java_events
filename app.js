/*function print() {
    var result = document.getElementById("messeage")
    document.write("Thanks to Click Me")
}

function hide() {
    var result = document.getElementById("element")

    var res = document.getElementById("toggle")

    document.write(result.remove("hide"))
}

var link = document.getElementById('hoverLink');

var originalColor = getComputedStyle(link).color;

link.addEventListener('mouseover', () => {
    link.style.color = 'aqua';
});

link.addEventListener('mouseout', () => {
    link.style.color = originalColor;
});

function playSound() {
    var audio = document.getElementById("myAudio");

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
}

function openNewWindow() {
    var url = 'https://www.facebook.com';
    var windowName = 'NewWindow';
    

    window.open(url, windowName);
}

function popup() {
    var result = document.getElementById("popup")
    alert("Thanks for click me..........")
}
function hover() {
    
}

function playSound() {
    var audio = document.getElementById("myAudio");

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
}

function alertMesseage() {
    alert("Mouse is over the element")
}


function hideElement() {
    var hide = document.getElementById("hideElement")
    hide.style.display = 'none'
}

var newWindow;

function openResizableWindow() {
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var windowWidth = mouseX + 200;
    var windowHeight = mouseY + 200;

    newWindow = window.open('', '_blank', 'resizable=yes,width=' + windowWidth + ',height=' + windowHeight);

    newWindow.document.write('<html><head><title>New Window</title></head><body>');
    newWindow.document.write('<h1>New Window Content</h1>');
    newWindow.document.write('<button onclick="closeWindow()">Close Window</button>');
    newWindow.document.write('</body></html>');

    newWindow.document.close();
}

    function closeWindow() {
    if (newWindow) {
    newWindow.close();
    }
}*/

// function print() {
//     var result = document.getElementById("onclick")
//     console.log(result.value);
// }

// function r() {
//     var html = document.getElementById("HTML")

//     console.log(html.value);
// }

// function ea() {
//     var css = document.getElementById("CSS")

//     console.log(css.value);
// }

// function d() {
//     var javascript = document.getElementById("JavaScript")

//     console.log(javascript.value);
// }

// function option(){
//     var select = document.getElementById("mySelect")

//     var selectedValue = select.value

//     console.log("Selected value : " + selectedValue);
// }

// function setTextInField() {
//     var textField = document.getElementById("myTextField");

//     textField.value = "This is some text in the field";
// }

// function setMaritalStatus() {
//     var maritalStatusCheckbox = document.getElementById("maritalStatus");

//     var statusField = document.getElementById("status");

//     var married = maritalStatusCheckbox.checked;

//     if (!married) {
//         statusField.value = "available";
//     } else {
//         statusField.value = "";
//     }
// }


// function fillInput() {
//     var inputField = document.getElementById("myInput");

//     if (inputField.value.trim() === "") {
//         inputField.value = "Default Text";
//     }
// }


function validateRegistration() {
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var emailInput = document.getElementById("email");
    var errorDisplay = document.getElementById("error");

    errorDisplay.textContent = "";

    if (usernameInput.value.trim() === "") {
        errorDisplay.textContent = "Username is required.";
        return;
    }

    if (passwordInput.value.trim() === "") {
        errorDisplay.textContent = "Password is required.";
        return;
    }

    if (emailInput.value.trim() === "") {
        errorDisplay.textContent = "Email is required.";
        return;
    }

    alert("Registration successful!");
}