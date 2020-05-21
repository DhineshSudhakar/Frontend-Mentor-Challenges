
const form = document.getElementById('form');


form.addEventListener('submit', event1);

function event1(event){
  const first = form['firstname'].value;
  const last = form['lastname'].value;
  const email = form['email'].value;
  const password = form['password'].value;

  if (first === ""){
    addInputMsg("firstname", "Please enter first name");
  }else{
    removeInputMsg("firstname");
  }

  if (last === ""){
    addInputMsg("lastname", "Please enter last name");
  }else{
    removeInputMsg("lastname");
  }

  if (email === ""){
    addInputMsg("email", "Please enter your email");
  // }else if (!isValid("email")){
  //   addInputMsg("email", "enter a valid email");
  }else{
    removeInputMsg("email");
  }

  if (password === ""){
    addInputMsg("password", "Please enter password")
  }else{
    removeInputMsg("password");
  }

  event.preventDefault();
};

function addInputMsg(field, message){
  const guide = form[field].parentNode.querySelector("h5");
  const image = form[field].parentNode.querySelector("img");
  guide.innerText = message;
  guide.style.display = "block";
  image.style.display = "block";
};

function removeInputMsg(field){
  const guide = form[field].parentNode.querySelector("h5");
  const image = form[field].parentNode.querySelector("img");
  guide.style.display = "none";
  image.style.display = "none";
};

function isValid(field) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
