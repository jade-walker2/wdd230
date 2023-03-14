
const button = document.querySelector("#submit");
const list = document.querySelector("#list");

button.addEventListener('click', function() {
    let del = document.createElement("button");
    del.textContent = "X";
    let li = document.createElement("li");
    const input = document.querySelector("#favchap").value;
    if (input != ""){
        li.appendChild(document.createTextNode(input));
        li.appendChild(del);
        list.appendChild(li);
        document.querySelector("#favchap").value = "";
    }
    else {
        alert("This is empty please type something.");
    }
    del.addEventListener("click", ()=> {
        list.removeChild(li);
    })
});
