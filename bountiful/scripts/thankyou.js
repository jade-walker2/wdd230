let url3 = new URL(window.location);
let params  = url3.searchParams;

document.querySelector('#first-name').textContent = params.get("first-name");
document.querySelector('#phone-number').textContent = params.get("phone");
document.querySelector('#email').textContent = params.get("email");
document.querySelector('#fruit1').textContent = params.get("fruit-1");
document.querySelector('#fruit2').textContent = params.get("fruit-2");
document.querySelector('#fruit3').textContent = params.get("fruit-3");
document.querySelector('#special').textContent = params.get("special-instructions");
let orderDate = new Date();
document.querySelector('#order-date').textContent = orderDate.toLocaleString();

const url4 = "./scripts/fruityvice.json";
async function getFruitData() {
    const response = await fetch(url4);
    if(response.ok){
        const data = await response.json();
        calculateNutrition(data.fruits);
    }
}

function calculateNutrition(fruits){
    let calories = 0
    let protein = 0
    let fats = 0
    let carbs = 0
    fruits.filter(checkCalories)
    fruits.filter(checkProteins)
    document.querySelector("#cals").textContent = calories
    document.querySelector("#protein").textContent = protein
    document.querySelector("#fats").textContent = fats
    document.querySelector("#carbs").textContent = carbs
    function checkCalories(fruit) {
        
        if (fruit.name == params.get("fruit-1") || fruit.name == params.get("fruit-2") || fruit.name == params.get("fruit-3")) {
            calories += fruit.nutritions.calories
            
            console.log(fruit.nutritions.calories)
        }
    }

    function checkProteins(fruit) {
        if (fruit.name == params.get("fruit-1") || fruit.name == params.get("fruit-2") || fruit.name == params.get("fruit-3")) {
            protein += fruit.nutritions.protein
            
            console.log(fruit.nutritions.protein)
        }
    }

    function checkFat(fruit) {
        
        if (fruit.name == params.get("fruit-1") || fruit.name == params.get("fruit-2") || fruit.name == params.get("fruit-3")) {
            fats += fruit.nutritions.fat
            
            console.log(fruit.nutritions.fat)
        }
    }

    function checkCarbs(fruit) {
        
        if (fruit.name == params.get("fruit-1") || fruit.name == params.get("fruit-2") || fruit.name == params.get("fruit-3")) {
            carbs += fruit.nutritions.carbohydrates
            
            console.log(fruit.nutritions.carbohydrates)
        }
    }
    console.log(calories)

    
}

getFruitData()