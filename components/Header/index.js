// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
Header();
/** Creates the header object and adds it to the DOM.
 * Reads the current date to update accordingly.
*/
function Header() {
    const months = ['January', 'February','March','April','May','June','July','August','September','October','November','December'];
    let now = new Date(Date.now());
    let dateString = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
    const header = makeHeader(dateString);
    document.querySelector('.header-container').appendChild(header);
}
/** Makes the actual header element. 
 * @param {string} _date The formatted date string.
 * @returns {HTMLDivElement} The header div.
*/
function makeHeader(_date){
    const header = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    header.classList.add('header');
    date.classList.add('date');
    date.textContent=_date;
    title.textContent="Lambda Times";
    temp.classList.add('temp');
    temp.textContent ="41°";

    header.append(date,title,temp);

    return header;
}
