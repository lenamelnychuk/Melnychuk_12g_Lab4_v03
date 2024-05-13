const commentForm = document.querySelector('.new-comment form');
const commentCountElement = document.querySelector('.comment-count p');

commentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const commentText = document.querySelector('#comment').value;

    const newCommentElement = `
        <div class="comment">
            <p class="username">${name}</p>
            <p class="date">Сьогодні</p>
            <p class="content">${commentText}</p>
        </div>
    `;

    const commentsElement = document.querySelector('.comments');
    commentsElement.innerHTML += newCommentElement; // Додавання нового коментаря

    const commentCount = parseInt(commentCountElement.textContent);
    commentCountElement.textContent = commentCount + 1;

    commentForm.reset();
});