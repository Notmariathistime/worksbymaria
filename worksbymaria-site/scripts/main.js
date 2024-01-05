const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cat1.png") {
    myImage.setAttribute("src", "images/cat2.png");
  } else {
    myImage.setAttribute("src", "images/cat1.png");
  }
};

  // Personalized welcome code

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'My cat is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'My cat is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}