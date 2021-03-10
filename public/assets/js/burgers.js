document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }

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

//devour burger
const devourerBtns = document.querySelectorAll('.eat-btn');


if(devourerBtns){
    console.log('I exist')
    devourerBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const id = event.target.getAttribute('data-id');
            const nowEaten = {
                devoured: 1,
            };

            fetch(`/api/burgers/${id}`, {
                method: 'PUT', 
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(nowEaten)
            }).then(() => {
                location.reload('/');
            })
    
            // const newBurger = {
            //     burger_name: document.querySelector('#burger-name').value.trim(),
            //     devoured: document.querySelector('#uneaten').checked,
            // };
    
            
        })
    })
    
}

});