let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
// Selecting side bar and menu icon
var sidenav = document.getElementById("sidenav");
var menuicon = document.getElementById("menuicon");

menuicon.addEventListener("click", function () {
  sidenav.style.left = 0;
});
// Selecting close nav
var closenav = document.getElementById("close-nav");
closenav.addEventListener("click", function () {
  sidenav.style.left = "-50%";
});

const scriptURL = "https://script.google.com/macros/s/AKfycbxn6b033qINKiegeuKjERThHj-2EOQy85w2Q2KlEZPXGz4oHfopMnwisdxo-QdfllIXxQ/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg")
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>{
      msg.innerHTML = "Message Sent Successfully"
      setTimeout(()=>{
        msg.innerHTML = ""
      },5000)
      form.reset()
    })
    .catch((error) => console.error("Error!", error.message));
});
