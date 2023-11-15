const search = document.querySelector("#search");
const recipes = document.querySelectorAll(".recipe");


search.addEventListener('keyup', function(event){
    const word = event.target.value.toLowerCase();
    recipes.forEach(item => {
        item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display = 'block') : (item.style.display = 'none');
    })
    recipes.forEach(itemTwo => {
        itemTwo.querySelector(".par").textContent.toLowerCase().includes(word) ? (itemTwo.style.display = 'block') : (item.style.display = 'none');
    })
})
