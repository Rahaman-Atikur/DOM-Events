document.getElementById('btn-update-text').addEventListener('click', function () {
    const pageTitleElement = document.getElementById('page-title');
    pageTitleElement.innerText = 'Hey Changed';
})

document.getElementById('btn-login').
    addEventListener('click', function () {
        const buttonLoggedIn = document.getElementById('user-logged-in');
        buttonLoggedIn.innerText = 'Logged In';
    })

