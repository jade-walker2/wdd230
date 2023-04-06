const url2 = "./scripts/fruityvice.json";
async function getFruitData() {
    const response = await fetch(url2);
    if(response.ok){
        const data = await response.json();
        displayFruitsOptions(data.fruits);
    }
}
function displayFruitsOptions(fruits) {
    const option1 = document.querySelector("#fruit-1");
    const option2 = document.querySelector("#fruit-2");
    const option3 = document.querySelector("#fruit-3");

    for(let i = 0; i < fruits.length; i++){
        option1.innerHTML += `<option value = "${fruits[i].name}">${fruits[i].name}</option>`
        option2.innerHTML += `<option value = "${fruits[i].name}">${fruits[i].name}</option>`
        option3.innerHTML += `<option value = "${fruits[i].name}">${fruits[i].name}</option>`
    }
}
getFruitData()