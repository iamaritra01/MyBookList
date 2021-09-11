console.log("hello");
//d4f2bd27a24047f09952dfd0f4715ecf

let newsAccordian = document.getElementById("accordionExample");

//create a ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET','https://newsapi.org/v2/top-headlines?country=in&apiKey=d4f2bd27a24047f09952dfd0f4715ecf',true);

xhr.onload = function(){
    if (this.status===200) {
       let json = JSON.parse(this.responseText);
       let articles = json.articles;
    //    console.log(json);
    let newshtml = "";
      articles.forEach(function(element,index) {
        let news = ` <div class="card">
                        <div class="card-header" id="heading${index}">
                        <h5 class="mb-0">
                            <button
                            class="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapse${index}"
                            aria-expanded="true"
                            aria-controls="collapse${index}"
                            >
                            <b>Breaking News ${index+1}</b>: ${element["title"]}
                            </button>
                        </h5>
                        </div>

                        <div
                        id="collapse${index}"
                        class="collapse"
                        aria-labelledby="heading${index}"
                        data-parent="#accordionExample"
                        >
                        <div class="card-body">
                            ${element["content"]}. <a href="${element['url']}">Read more here</a>
                        </div>
                        </div>
                        </div>`
                        newshtml += news;
      });
      newsAccordian.innerHTML = newshtml;
    }else{
        console.log("Some error occured");
    }
}

xhr.send();


