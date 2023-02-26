import Image from"../assets/Image.jpeg"

export function run() {

    const posts = document.getElementById("posts")
    
    for(let i=0;i<5;i++){
        const post = document.createElement('section');
        const img = document.createElement('img');
        img.src = Image
        posts.appendChild(post);
        post.appendChild(img);
    }
}