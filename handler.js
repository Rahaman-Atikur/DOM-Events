document.getElementById('btn-update-text').addEventListener('click', function () {
    const pageTitleElement = document.getElementById('page-title');
    pageTitleElement.innerText = 'Hey Changed';
})

document.getElementById('btn-login').
    addEventListener('click', function () {
        const buttonLoggedIn = document.getElementById('user-logged-in');
        buttonLoggedIn.innerText = 'Logged In';
    })

document.getElementById('update-btn').
    addEventListener('click', function () {
        const nameInput = document.getElementById('text-box');
        const name = nameInput.value;
        console.log('name', name);

        // set the name
        const nameParagraph = document.getElementById('name-changed');
        nameParagraph.innerText = name;
    })

