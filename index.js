function displayPosts(posts) {
    const postList = document.getElementById("post-list");

    posts.forEach(post => {
        const li = document.createElement('li');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');

        h1.textContent = post.title;
        p.textContent = post.body;

        li.appendChild(h1);
        li.appendChild(p);
        postList.appendChild(li);
    });
}

async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        displayPosts(data);
        return data;
    } catch (error) {
        console.error("error fetching data", error);
    }
}

fetchPosts();