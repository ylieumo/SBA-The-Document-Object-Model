
document.write(Date());

const welcomecontainer = document.getElementById('welcomeContainer');
    const greeting = welcomecontainer.firstChild;
   const firstFeature = featureList.firstChild;
   const lastFeature = featureList.lastChild;
 
 let tittleEl = document.getElementById("Welcome");
  tittleEl.style.textAlign = "center"

  document.getElementById("container").style.color = "green";


  function myFunction() {
    const myNodelist = document.querySelectorAll("featureItem");
    for (let i = 0; i < myNodelist.length; i++) {
      myNodelist[i].style.color = "red";
    }
  }

  var features = document.querySelectorAll('.featureItem');
  features.forEach(function(feature) {
    document.getElementById("demo").innerHTML = NewPage();
  });


 a.addEventListener("click", myFunction);

function myFunction() {
  alert ("welcome!");
}
function validatePassword() {
    const passwordInput = document.getElementById('password');
 const errorSpan = document.getElementById('passwordError');

    if (passwordInput.value.length < 8) {
      errorSpan.textContent = 'Password must be at least 8 characters long.';
    } else {
      errorSpan.textContent = '';
    }
  }
  
  function validatePassword() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
