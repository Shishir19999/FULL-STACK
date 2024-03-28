function getApi(){
fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res)=>{
        return res.json();
      } )
    .then((post)=>{
        let output="";
        post.forEach((post)=>{
            output+=`
            <div class="news">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            </div>`;
        });
        document.getElementById("container").innerHTML=output;
    })
    .catch((err)=>{
        console.log(err);
    })
    }

getApi();