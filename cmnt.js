document.getElementById('btn-post-comment')
    .addEventListener('click', function () {
        console.log('btn clicked')
        // Text the comment get
        const commentBoxText = document.getElementById('comment-text');
        const newComment = commentBoxText.value;
        // console.log(newComment);
        const commentContainer = document.getElementById('comment-container');
        // console.log(commentContainer);

        const commentElement = document.createElement('p');
        commentElement.classList.add('comment');
        commentElement.innerText = newComment;
        commentContainer.appendChild(commentElement);
        commentBoxText.value = '';
    })
