document.getElementById('input-delete')
    .addEventListener('keyup', function (event) {
        const text = event.target.value;
        const btnDelete = document.getElementById('btn-delete');
        if (text === 'delete') {
            btnDelete.removeAttribute('disabled');
            const secretTag = document.getElementById('secrete-info');
            secretTag.style.display = 'none';
        }
        else {
            btnDelete.setAttribute('disabled', true);
        }
    })