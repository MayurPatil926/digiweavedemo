// Typing effect for company name
const companyName = "Digiweave Mediatech";
let i = 0;
function typeCompanyName() {
  if (i < companyName.length) {
    document.getElementById("companyName").innerHTML += companyName.charAt(i);
    i++;
    setTimeout(typeCompanyName, 100);
  }
}

window.onload = function() {
  typeCompanyName();
};
