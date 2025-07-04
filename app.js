let newsdata = document.getElementById("newsdata");
let getinp = document.getElementById("search");





function searchNews(){

newsdata.innerHTML = ""



let fetchdataapi = async () => {

    let getgata = await fetch(`https://newsapi.org/v2/everything?q=${getinp.value}&from=2025-06-03&sortBy=publishedAt&apiKey=ac46aa61c4a544b892b3f31dd7c7fd80`);
    let data = await getgata.json();
    data.articles.map((item)=>{

        newsdata.innerHTML += `<div class="card" style="width: 18rem;">
  <img src=${item.urlToImage} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.author}</h5>
    <p class="card-text">${item.title}</p>
    <p class="card-text">${item.description.slice(0,50)}</p>
  </div>
</div>`
    })

}

fetchdataapi()

}
