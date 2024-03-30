function getNews(){
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-02-29&sortBy=publishedAt&apiKey=cb025e2b9dfe4a5bb5af386c4f78b7a6")
    .then((res)=>{
        return res.json();
    
    }).then((newsData)=>{
        console.log(newsData.articles);
        let outPut="";
        newsData.articles.forEach((news)=>{
            outPut+=`<div class="news">
            <h2>${news.title}</h2>
            <img src="${news.urlToImage}" style="width:100%;height:50%;">
            <p>${news.description}</p>
            <a href="${news.url}">Read More</a>
            </div>
            `
        });
        document.getElementById("container").innerHTML=outPut;
    }).catch((err)=>{
        console.log(err);
    })
}

getNews();