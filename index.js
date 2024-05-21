document.addEventListener("DOMContentLoaded", function() {
    // Function to load blog posts dynamically
    function loadBlogPosts() {
        // Simulated data for blog posts (replace with actual data)
        const blogPosts = [
            { title: "Post Title 1", content: "This is the content of the first blog post." },
            { title: "Post Title 2", content: "This is the content of the second blog post." }
            // Add more blog posts as needed
        ];

        const blogPostsContainer = document.querySelector(".blog-posts");

        // Clear existing content
        blogPostsContainer.innerHTML = "";

        // Loop through blog posts and create HTML elements for each
        blogPosts.forEach(post => {
            const article = document.createElement("article");
            article.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
            `;
            blogPostsContainer.appendChild(article);
        });
    }

    // Load blog posts when the page loads
    loadBlogPosts();

    // Example of adding an event listener for a button click
    const refreshButton = document.getElementById("refresh-button");
    refreshButton.addEventListener("click", function() {
        // Reload blog posts when the refresh button is clicked
        loadBlogPosts();
    });
});
