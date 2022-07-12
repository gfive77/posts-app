import './style.css'

const isLocal: boolean = true

const title: HTMLDivElement  = document.querySelector<HTMLDivElement>('#title')!
const postsContainer: HTMLDivElement = document.querySelector<HTMLDivElement>('#posts-container')!


const urlLocalPosts: string = 'http://localhost:3100/posts';
const urlApiPosts: string = 'https://jsonplaceholder.typicode.com/posts';
const url: string = isLocal ? urlLocalPosts : urlApiPosts
let posts: any[] = [];

title.innerHTML = `
  <h1>Posts App</h1>
`

fetch(url) //  Responde en ALGUN MONENTO FUTURO
  .then(response => response.json()) // transforma la respuesta en un objeto Javascript
  .then(data => resultData(data)); // Obtenemos el resultado final, listo para ser manipulado


  function resultData( data: any[] ){
    posts = data
    let htmlCards: string = ''
          // Para cada post construyo una card
    posts.forEach( post => {
      //console.log(post)
      htmlCards = htmlCards + buildDataCard(post)
    })
    
    postsContainer.innerHTML = htmlCards

  }

  function buildDataCard(post: any): string {

    if(isLocal === true){
      return `
      <div class="card m-2 col-4">
        <img src=${post.image} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.text}</p>
          <a href="#" class="btn btn-primary">${post.author}</a>
        </div>
      </div>
      `
    }else {
      return `
      <div class="card m-2 col-4">
      <div class="card-body">
        <h5 class="card-title">${post.title}</h5>
        <p class="card-text">${post.body}</p>
        <a href="#" class="btn btn-primary">${post.userId}</a>
      </div>
    </div>` 
    }

   
  }