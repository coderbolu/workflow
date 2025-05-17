function getPost() {
    let blogId = localStorage.getItem("blogId")

    fetch('http')
    .then(response => response.json())
    .then((data)) => {
        let postBody = document.getElementById("post-body")

        let blogDetails = ""

        blogDetails += `
            <div class="card">
                <div class="card-body">
                    <h1 class="mb-4">
                        ${data.title}
                    </h1>
                    <p>${data.body}</p>
                </div>
            </div>
            
        `
    }
    postBody.innerHTML = blogDetails
}