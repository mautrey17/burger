document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }

// fetch('/api/burgers').then((resp) => {
//     return resp.json()
// }).then((data) => {
//     console.log(data)
// });

//create burger function
const newBurgerForm = document.querySelector('#new-burger-form');

if(newBurgerForm) {
    newBurgerForm.addEventListener('submit', (event) => {
        event.preventDefault();

        console.log('hi round 2');

        const newBurger = {
            burger_name: document.querySelector('#burger-name').value.trim(),
            devoured: 0,
        };

        fetch('/api/burgers', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(newBurger)
        })
        console.log("New burger successfully added")
        location.reload()
    })
}

const test32 = document.getElementById('test');
console.log(test32)

if(test32){
    console.log('I exist')
    test32.addEventListener('click', (event) => {
        event.preventDefault();

        console.log('hi round 2');

        // const newBurger = {
        //     burger_name: document.querySelector('#burger-name').value.trim(),
        //     devoured: document.querySelector('#uneaten').checked,
        // };

        
    })
}

});