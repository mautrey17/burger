console.log('hi')

fetch('/api/burgers').then((resp) => {
    return resp.json()
}).then((data) => {
    console.log(data)
});

//create burger function
// const newBurgerForm = document.querySelector('#new-burger-form');

// if(newBurgerForm) {
//     newBurger.addEventListener('submit', (event) => {
//         event.preventDefault();
//     })
// }