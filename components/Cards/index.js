// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


function cardMaker(headline, authorPhoto, authorName){

    const card = document.createElement('div'),
        headLine = document.createElement('div'),
        author = document.createElement('div'),
        imgContainer = document.createElement('div'),
        authorImg = document.createElement('img'),
        authName = document.createElement('span');

    card.appendChild(headLine);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(authorImg);
    author.appendChild(authName);

    card.classList.add("card");
    headLine.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headLine.textContent = headline;
    authorImg.src = authorPhoto;
    authName.textContent = "Author: " + authorName;

    return card;
}

const entryPoint = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(resp => {    

    resp.data.articles.bootstrap.forEach (elem =>{
        let newCard = cardMaker(elem.headline, elem.authorPhoto, elem.authorName);
        entryPoint.appendChild(newCard)
    })
    resp.data.articles.javascript.forEach (elem =>{
        let newCard = cardMaker(elem.headline, elem.authorPhoto, elem.authorName);
        entryPoint.appendChild(newCard)
    })
    resp.data.articles.jquery.forEach (elem =>{
        let newCard = cardMaker(elem.headline, elem.authorPhoto, elem.authorName);
        entryPoint.appendChild(newCard)
    })
    resp.data.articles.node.forEach (elem =>{
        let newCard = cardMaker(elem.headline, elem.authorPhoto, elem.authorName);
        entryPoint.appendChild(newCard)
    })
    resp.data.articles.technology.forEach (elem =>{
        let newCard = cardMaker(elem.headline, elem.authorPhoto, elem.authorName);
        entryPoint.appendChild(newCard)
    })
})




