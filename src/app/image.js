export function run() {

    const  imageLoader = async() => {
        try {
            const posts = document.getElementById("posts")
            const post = document.createElement('section');
            const img = document.createElement('img');
            const response = await fetch('https://api.thecatapi.com/v1/images/search')
            const data = await response.json();
            const Image = data[0].url;
            img.src = Image
            posts.appendChild(post);
            post.appendChild(img);
        } catch (err) {
            console.log(err)
        }
    }
        imageLoader();
    console.log("console log before image load")
}