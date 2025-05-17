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




/////////

function addpost() {
    let postLayout = document.getElementById("post-layout")
    let displayPost = ""

    newArray.forEach((post) => {
        displayPost+= `
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <span>${post?.id}</span>
                    <h1 class="mb-4">
                        ${post?.title}
                    </h1>
                    <p>${post.body}</p>
                </div>
            </div>
        </div>
        
    `
    });
    postLayout.innerHTML = displayPost;

    viewPost()
}


function viewPost() {
    let viewPost = document.querySelectorAll(".view-post")

    viewPost.forEach((e, index) => {
            e.addEventListener("click", () => {
                localStorage.setItem("blogId", index+1)

                window.location.href = "post.html"
        })
    })
}

getPost()