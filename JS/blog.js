async function fetchData() {
    const response = await fetch('http://course-assignment-cms.local/wp-json/wp/v2/posts/');
    const data = await response.json();
    const postsElement = document.getElementById('posts');
  
    data.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
  
      const headerElement = document.createElement('h2');
      headerElement.innerText = post.title.rendered;
      postElement.appendChild(headerElement);
  
      postElement.addEventListener('click', () => {
        window.location.href = `post.html?id=${post.id}`;
      });
  
      postsElement.appendChild(postElement);
    });
  }
  
  fetchData();
  