const posts = [
    { title: "Postagem 1", description: "Descrição da postagem 1", date: "20/09/2024" },
    { title: "Postagem 2", description: "Descrição da postagem 2", date: "21/09/2024" },
    { title: "Postagem 3", description: "Descrição da postagem 3", date: "22/09/2024" },
    { title: "Postagem 4", description: "Descrição da postagem 4", date: "23/09/2024" },
    { title: "Postagem 5", description: "Descrição da postagem 5", date: "24/09/2024" },
    { title: "Postagem 6", description: "Descrição da postagem 6", date: "25/09/2024" },
    { title: "Postagem 7", description: "Descrição da postagem 7", date: "26/09/2024" },
    { title: "Postagem 8", description: "Descrição da postagem 8", date: "27/09/2024" },
    { title: "Postagem 9", description: "Descrição da postagem 9", date: "28/09/2024" },
    { title: "Postagem 10", description: "Descrição da postagem 10", date: "29/09/2024" },
    { title: "Postagem 11", description: "Descrição da postagem 11", date: "30/09/2024" },
  ];


const posts_por_pag = 5

let pag_atual = 1

const lista = document.getElementById('lista')

const pag_anterior = document.getElementById('anterior')
const pag_proxima = document.getElementById('proximo')

const pag1 = document.getElementById('pag1')

const Postagem = document.getElementById('postagem')

function mudar_tema(){

const body = document.body

body.classList.toggle('dark-mode')

}


function mostrar_posts(pagina){

lista.innerHTML=``

const startIndex = (pagina - 1)*posts_por_pag
const endIndex = (pagina * posts_por_pag)
const posts_atual = posts.slice(startIndex, endIndex)

posts_atual.forEach(posts => {

const posts_element = document.createElement('div')
posts_element.classList.add('post')
posts_element.innerHTML=`
<h2>${posts.title}</h2>
<p>${posts.description}</p>
<small>${posts.date}</small>
`
lista.appendChild(posts_element)

pag_anterior.disabled = pagina === 1

pag_proxima.disabled = pagina === Math.ceil(posts.length / posts_por_pag)

pag1.textContent=`Página ${pagina}`

})

}

pag_anterior.addEventListener('click', ()=>{

if(pag_atual > 1){

pag_atual--;
mostrar_posts(pag_atual)

}


})


pag_proxima.addEventListener('click', ()=>{

if(pag_atual < Math.ceil(posts.length / posts_por_pag)){
    
pag_atual++;
mostrar_posts(pag_atual)
    
}
    
    
})


Postagem.addEventListener('submit', (e)=>{

e.preventDefault()
const title = document.getElementById('title').value
const description = document.getElementById('descricao').value

const date = new Date().toLocaleDateString('pt-BR')

const new_post = {title, description, date}

posts.unshift(new_post)

Postagem.reset()

pag_atual = 1

mostrar_posts(pag_atual)
})






mostrar_posts(pag_atual)