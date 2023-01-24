var date = document.lastModified;
document.getElementById("result").innerHTML = "The document was last modified on : " + date;

const d = new Date();
let year = d.getFullYear();
document.getElementById("date").innerHTML = year;