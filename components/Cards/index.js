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
//document.querySelector('.cards-container').appendChild(makeCard("Everybody poops","google.com","David"));
axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response =>
        Object.values(response.data.articles)
            .flat()
    )
    .then(articleData =>
        articleData.map(item => makeCard(item.headline, item.authorPhoto, item.authorName))
    )
    .then(
        articles => articles.forEach(article => document.querySelector('.cards-container').appendChild(article))
    );

function makeCard(_headline, _authorPhoto, _authorName) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const byLine = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    headline.textContent = _headline;
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    image.src = _authorPhoto;
    byLine.textContent = `By ${_authorName}`;

    card.append(headline, author);
    author.append(imgContainer, byLine);
    imgContainer.appendChild(image);

    return card;
}