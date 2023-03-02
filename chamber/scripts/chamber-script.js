var date = document.lastModified;
document.getElementById("result").innerHTML = "The document was last modified on : " + date;

const d = new Date();
let year = d.getFullYear();
document.getElementById("date").innerHTML = year;

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
	document.querySelector(".menu").classList.toggle("active");
  }
  document.querySelector(".icon").addEventListener("click",myFunction);