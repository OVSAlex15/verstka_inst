document.addEventListener('DOMContentLoaded', () => {
    const likeBtn = document.getElementById('like-btn');
    const likeIcon = document.getElementById('like-icon');
    const commentsList = document.getElementById('comments-list');
    const newCommentInput = document.getElementById('new-comment');
    const addCommentBtn = document.getElementById('add-comment-btn');
  

    const isLiked = localStorage.getItem('liked') === 'true';
    if (isLiked) {
      likeBtn.classList.add('liked');
    }
  
    likeBtn.addEventListener('click', () => {
      const liked = likeBtn.classList.toggle('liked');
      likeIcon.classList.toggle('liked');
      localStorage.setItem('liked', liked);
    });
  

    comments.forEach(({ username, text }) => {
      const commentItem = document.createElement('li');
      commentItem.textContent = `${username}: ${text}`;
      commentsList.appendChild(commentItem);
    });
  

    addCommentBtn.addEventListener('click', () => {
      const newComment = newCommentInput.value.trim();
      if (newComment) {
        alert('Комментарий добавлен');
        const commentItem = document.createElement('li');
        commentItem.textContent = `nick: ${newComment}`;
        commentsList.appendChild(commentItem);
        newCommentInput.value = '';
      }
    });
  });
  