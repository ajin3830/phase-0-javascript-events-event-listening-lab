// create an alert
function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', () => alert('I was clicked!'));
}
addingEventListener()

// log something
document.querySelector("#button").addEventListener('mouseover', () => console.log('that tickles!'))

// create a different alert
document.querySelector("#button").addEventListener('click', () => alert('Hey I was clicked!'))


