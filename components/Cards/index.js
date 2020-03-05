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

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response =>
        Object.keys(response.data.articles)
            .map(topic => {
            //Use the Object keys to add the topic into each article
                const articlesByTopic = response.data.articles[topic];
                articlesByTopic.forEach(item => item.topic = topic);
                return articlesByTopic;
            })
            .flat()
            .forEach(item => {
            //Make the article element and attach it to the DOM
                const article = makeCard(item.headline, item.authorPhoto, item.authorName, item.topic);
                document.querySelector('.cards-container').appendChild(article);
            })
    )
    .catch(e => console.log(e));

/** Creates a card for a given news article.
 * @param  {string} _headline The headline.
 * @param  {string} _authorPhoto The address of the author's photo.
 * @param  {string} _authorName The author's name.
 * @param  {string} _topic The article's topic - used for sorting.
 * @returns {HTMLDivElement} The formatted article div.
 */
function makeCard(_headline, _authorPhoto, _authorName, _topic) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const byLine = document.createElement('span');

    card.classList.add('card');
    card.setAttribute('data-topic', _topic);
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