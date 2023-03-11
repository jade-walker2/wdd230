const url2 = "./scripts/directory.json";
let card = document.querySelector("#directory-data");
function displayBusinesses(business) {
    
    let section = document.createElement("section");
    section.innerHTML = `
        <img src=${business.logo} alt="Logo">
        <p>${business.name}</p>
        <p>${business.address}</p>
        <p>${business.phone}</p>
        <p><a href=${business.url} target="_blank">${business.url}</a></p>
    `
    if (business.membershipLevel == "Gold") {
        section.classList.add("gold-member")
    };
    card.appendChild(section);
};

async function getBusinesses() {
    const response = await fetch(url2);

    if (response.ok){
        const data = await response.json();
        data.business.forEach(displayBusinesses);
    }
    else{
        console.log("error");
    }
};

getBusinesses();

function changeView() {
    document.querySelector("#directory-data").classList.toggle("directory-list");
};



let grid = document.querySelector("#grid");
let list = document.querySelector("#list");
grid.addEventListener("click",()=>{
    if (card.classList.contains("directory-list")){
        card.classList.remove("directory-list");
        card.classList.add("directory-grid");
    }
});

list.addEventListener("click",()=>{
    if (card.classList.contains("directory-grid")){
        card.classList.remove("directory-grid")
        card.classList.add("directory-list");
    }
});