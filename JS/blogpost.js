const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

async function fetchPostData() {
  const response = await fetch(`http://course-assignment-cms.local/wp-json/wp/v2/posts/${postId}`);
  const data = await response.json();
  return data;
}

async function displayPostData() {
  const postData = await fetchPostData();

  const headerElement = document.createElement('h2');
  headerElement.innerText = postData.title.rendered;
  document.getElementById('post').appendChild(headerElement);

  const paragraphElement = document.createElement('p');
  paragraphElement.innerHTML = postData.content.rendered;
  paragraphElement.classList.add('post-content');
  document.getElementById('post').appendChild(paragraphElement);
}


displayPostData();
