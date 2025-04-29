/**document.getElementById('micky-mouse-btn')
    .addEventListener('mouseenter', function () {
        console.log('Event Triggered');
    })
document.getElementById('micky-mouse-btn')
    .addEventListener('mousemove', function () {
        console.log('Event Triggered');
    })
document.getElementById('micky-mouse-btn')
    .addEventListener('mouseout', function () {
        console.log('Event Triggered');
    })**/
document.getElementById('user-name')
    .addEventListener('focus', function () {
        console.log('triggered');
    })
document.getElementById('user-email')
    .addEventListener('focus', function () {
        console.log('triggered');
    })
document.getElementById('user-name')
    .addEventListener('blur', function () {
        console.log('triggered');
    })
document.getElementById('user-email')
    .addEventListener('blur', function () {
        console.log('triggered');
    })
document.getElementById('user-email')
    .addEventListener('keydown', function (event) {
        console.log('triggered',event);
    })
