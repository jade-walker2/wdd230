let count = localStorage.getItem("order-count");


function addCount() {
    if(count == null) {
        localStorage.setItem("order-count", 1)
    } else {
        localStorage.setItem("order-count", parseInt(count)+1)
    }
}
document.querySelector("#orderform").addEventListener("submit", addCount)