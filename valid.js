var users=[{
  name: 'razin',
  email:'razinmed@gmail.com',
  password:'123456'
},
{
  name: 'ghita',
  email:'ghita@gmail.com',
  password:'123456'

}]



const container = document.querySelector(".container"),
pwShowHide = document.querySelectorAll(".showHidePw"),
pwFields = document.querySelectorAll(".password"),
signUp = document.querySelector(".signup-link"),
login = document.querySelector(".login-link");

//   js code to show/hide password and change icon
pwShowHide.forEach(eyeIcon =>{
  eyeIcon.addEventListener("click", ()=>{
	  pwFields.forEach(pwField =>{
		  if(pwField.type ==="password"){
			  pwField.type = "text";

			  pwShowHide.forEach(icon =>{
				  icon.classList.replace("uil-eye-slash", "uil-eye");
			  })
		  }else{
			  pwField.type = "password";

			  pwShowHide.forEach(icon =>{
				  icon.classList.replace("uil-eye", "uil-eye-slash");
			  })
		  }
	  }) 
  })
})


// js code to appear signup and login form
signUp.addEventListener("click", ( )=>{
  container.classList.add("active");
});
login.addEventListener("click", ( )=>{
  container.classList.remove("active");
});


// Script pour gérer les événements de clic sur les boutons

  // Récupérer les éléments du formulaire de connexion
const loginForm = document.getElementById("loginForm");
const loginBtn = document.getElementById("loginBtn");

// Ajouter un écouteur d'événement au bouton de connexion
loginBtn.addEventListener("click", function(event) {
  event.preventDefault(); // Empêcher la soumission du formulaire

  // Récupérer les valeurs des champs de saisie
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (email == users[0].email && password == users[0].password) {
      alert("Login successful!");
    return true;
  }
  else{
    alert("password or email do not match");
    return false;
  }
   
});



// Récupérer les éléments du formulaire d'inscription
const signupForm = document.getElementById("signupForm");
const signupBtn = document.getElementById("signupBtn");

// Ajouter un écouteur d'événement au bouton d'inscription
signupBtn.addEventListener("click", function(event) {
  event.preventDefault(); // Empêcher la soumission du formulaire

  // Récupérer les valeurs des champs de saisie
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (name !== "" && email !== "" && password !== "" && confirmPassword !== "" && confirmPassword == password) {
	  alert("You are just registered successfully!");
  }
  else{
    alert("password not confirmed");
  }
});