// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then(res => res.data.topics.map(
        topic => 
            document.querySelector('.topics').appendChild(createTab(topic))
        )
    );

function createTab(topic){
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = topic;
    tab.addEventListener('click', () =>
        document.querySelectorAll('.card').forEach( card => {
            if(topic==='node.js')topic='node';
            if(card.getAttribute('data-topic')===topic)
                card.classList.remove('hidden');
            else if(!card.classList.contains('hidden'))
                card.classList.add('hidden');
            document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('selected'));
            tab.classList.add('selected');
        })
    );
    return tab
}