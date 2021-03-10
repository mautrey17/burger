console.log('hi')

fetch('/api/burgers').then((resp) => {
    return resp.json()
}).then((data) => {
    console.log(data)
})