
document.write(Date());

const welcomecontainer = document.getElementById('welcomeContainer');
    const greeting = welcomecontainer.firstChild;
   const featureList = greeting.nextSibling;
   const firstFeature = featureList.firstChild;
   const lastFeature = featureList.lastChild;
  const nextFeature = firstFeature.nextElementSibling;







  let tittleEl = document.getElementById("Welcome");
  tittleEl.style.textAlign = "center"


  function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }