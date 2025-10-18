const fetchSequential = async () => {
    try {

    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postsResponse.json();
    console.log('Posts:', posts.slice(0, 3)); 

    const firstPost = posts[0];
    const authorId = firstPost.userId;

    
    const authorResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`);
    const author = await authorResponse.json();
    console.log('Author of the first post:', author);
} catch (error) {
    console.error('Error fetching data:', error);
}
};

fetchSequential();