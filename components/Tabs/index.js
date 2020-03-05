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
/** Create a tab event based on a given topic. When clicked, it toggles visibility of
 * posts pertaining to that topic.
 * 
 * @param {string} topic The topic the tab controls.
 * @returns {HTMLDivElement} A clickable tab button.
 */
function createTab(topic){
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = topic;
    tab.addEventListener('click', () => {
        if(tab.classList.contains('selected')){
            tab.classList.remove('selected');
            document.querySelectorAll('.card').forEach(
                card => card.classList.remove('hidden')
            );
            if(document.selection) document.selection.empty();
            return;
        }
        //else - no need b/c of return above
        document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('selected'));
        tab.classList.add('selected');

        if (topic === 'node.js') topic = 'node';
        document.querySelectorAll('.card').forEach( card => {
            if(card.getAttribute('data-topic')===topic)
                card.classList.remove('hidden');
            else if(!card.classList.contains('hidden'))
                card.classList.add('hidden');
        })
       if (document.selection) document.selection.empty();
    });
    return tab
}