var loggedIn = false;
function app() {
  if (loggedIn == true) {
    var pages = ["Add Grade", "View Grade"];
    nav(pages);
  } else {
    initElements();
    renderPage("login");
  }
}
function initElements() {
  var nav = document.createElement("nav");
  nav.classList.add("nav");
  var wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  document.body.appendChild(nav);
  document.body.appendChild(wrapper);
}

function nav(pageList) {
  for (var i = 0; i < pageList.length; i++) {
    const button = document.createElement("button");
    const val = pageList[i];
    button.innerHTML = pageList[i];
    button.addEventListener("click", function () {
      renderPage(val);
    });
 document.body.querySelector(".nav").appendChild(button);
  }
}
function renderPage(page) {
  if (page === "login") {
    login();
  } else if (page === "Add Grade") {
    addGrade();
  } else if (page === "View Grade") {
    gradeView();
    window.location.reload(false);
  }
}
 var loginInstructions = document.createElement("h4");
  loginInstructions.innerHTML =
    "Enter your Username and Password.";
  loginInstructions.id = "loginInstructions";

function login() {
  var wrapper = document.querySelector(".wrapper");

  var username = document.createElement("input");
  username.id = "inputUser";
  username.placeholder = "Enter Username";

  var password = document.createElement("input");
  password.setAttribute("type", "password");
  password.id = "inputPass";
  password.placeholder = "Enter Password";

  var submitButton = document.createElement("button");
  submitButton.innerHTML = "Login";
  submitButton.className = "loginButton";

  wrapper.innerHTML = "";
  wrapper.appendChild(loginInstructions);
  wrapper.appendChild(username);
  wrapper.appendChild(password);
  wrapper.appendChild(submitButton);

  var inputUser = document.getElementById("inputUser");
  var inputPass = document.getElementById("inputPass");

  document.body
    .querySelector(".loginButton")
    .addEventListener("click", function () {
      if (usernameValid(inputUser) && passwordValid(inputPass)) {
        loggedIn = true;
        app();
        home();
      } else {
        if (!usernameValid(inputUser) && passwordValid(inputPass)) {
          window.alert("Incorrect username. Please try again.");
        } else if (usernameValid(inputUser) && !passwordValid(inputPass)) {
          window.alert("Incorrect Password. Please try again.");
        }
      }
    });

  function usernameValid(ele) {
    if (ele.value == "teacherCool101") {
      return true;
    } else {
      return false;
    }
  }function passwordValid(ele) {
    if (ele.value == "StupidPassword345") {
      return true;
    } else {
      return false;
    }
  }
}
function home() {
  var wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = "";

  var homeInstructions = document.createElement("h4");
  homeInstructions.innerHTML =
    " Do you want to  view grades or add grades?";
  homeInstructions.id = "homeInstructions";

  var gradeButton1 = document.createElement("h2");
  var addButton1 = document.createElement("h2");
  gradeButton1.classList.add("fix");

  wrapper.appendChild(homeInstructions);
  document.body.querySelector(".wrapper").appendChild(gradeButton1);
  document.body.querySelector(".wrapper").appendChild(addButton1);
}

function addGrade() {
  var wrapper = document.querySelector(".wrapper");

  var nameInputText = document.createElement("input");
  nameInputText.id = "nameInput";
  nameInputText.placeholder = "Name";

  var grade = document.createElement("input");
  grade.setAttribute("type", "number");
  grade.setAttribute("min", "0");
  grade.setAttribute("max", "100");
  grade.id = "gradeInput";
  grade.placeholder = "Grade";
 var submitButton = document.createElement("button");
  submitButton.innerHTML = "Submit";
  submitButton.className = "submitButton";

  var gradeInputInstructions = document.createElement("h4");
  gradeInputInstructions.innerHTML =
    "Enter the student's name and grade.";
  gradeInputInstructions.id = "gradeInputInstructions";

  wrapper.innerHTML = "";
  wrapper.appendChild(gradeInputInstructions);
  wrapper.appendChild(nameInputText);
  wrapper.appendChild(grade);
  wrapper.appendChild(submitButton);

  var nameInput = document.getElementById("nameInput");
  var gradeInput = document.getElementById("gradeInput");

  var gradeButton2 = document.createElement("h2");
  gradeButton2.classList.add("goToGrades");
  gradeButton2.addEventListener("click", function () {
    gradeView();
  });
document.body.querySelector(".wrapper").appendChild(gradeButton2);
document.body
    .querySelector(".submitButton")
    .addEventListener("click", function () {
      if (inputValid(nameInput) && gradeValid(gradeInput)) {
        submission();
        window.alert("Grade added to list.");
        gradeView();
      } else {
        if (!inputValid(nameInput) && gradeValid(gradeInput)) {
          window.alert("You forgot to put in the student's name.");
        } else if (inputValid(nameInput) && !gradeValid(gradeInput)) {
          window.alert(
            "You didn't correctly input the student's grade."
          );
        } else {
          window.alert(
            "You did not input correctly: \n- Student's Name \n- Student's Grade\n or \n-"
          );
        }
      }
    });

  function submission() {
    var arrObject = {
      name: nameInput.value,
      grade: Number(gradeInput.value)
    };
    grades.push(arrObject);
  }

  function inputValid(ele) {
    if (ele.value !== "") {
      return true;
    } else {
      return false;
    }
  }

  function gradeValid(ele) {
    if (Number(ele.value) && ele.value >= 0 && ele.value < 101) {
      return true;
    } else {
      return false;
    }
  }
}

function gradeView() {
  var wrapper = document.querySelector(".wrapper");

  wrapper.innerHTML = "";

  for (var i = 0; i < grades.length; i++) {
    var ele = document.createElement("div");
    ele.classList.add("borderBottom");

    grades[i].name =
      '<span class="gradeNameStyle">' + grades[i].name + "</span>";
    grades[i].grade =
      '<span class="gradeGradeStyle">' + grades[i].grade + "</span>";

    ele.innerHTML = grades[i].name + "'s grade is: " + grades[i].grade + "%";
    wrapper.appendChild(ele);
  }

  var addButton2 = document.createElement("h2");
  addButton2.classList.add("goToAddGrades");
  addButton2.innerHTML = "Add Another Grade";
  addButton2.addEventListener("click", function () {
    addGrade();
  });

  document.body.querySelector(".wrapper").appendChild(addButton2);
}

app();