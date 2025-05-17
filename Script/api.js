let postTitle = document.getElementById("post-title")
let postBody = document.getElementById("post-body")
let postForm = document.getElementById("post-form")

let newArray = []


//////Fetch blog post
function getPost() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
            newArray = data
            addpost()
    })

    console.log(newArray)
}