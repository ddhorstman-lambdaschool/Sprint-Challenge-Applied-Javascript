/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

document.querySelector('.carousel-container').appendChild(createCarousel());
/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


function createCarousel() {
  const img = ['./assets/carousel/mountains.jpeg',
    './assets/carousel/computer.jpeg',
    './assets/carousel/trees.jpeg',
    './assets/carousel/turntable.jpeg'];

  let selectedImage = 0;
  const carousel = document.createElement('div');
  const left = document.createElement('div');
  const right = document.createElement('div');
  const images = img.map(url => {
    const image = document.createElement('img');
    image.src = url;
    return image
  });
  images[0].classList.add('selected');

  carousel.classList.add('carousel');
  left.classList.add('left-button');
  left.textContent = " < ";
  right.classList.add('right-button');
  right.textContent = " > ";

  left.addEventListener('click', () => {
    selectedImage = selectedImage === 0 ? images.length - 1 : selectedImage - 1;
    for (let i = 0; i < images.length; i++) {
      if (i == selectedImage){ 
        images[i].classList.add('selected');
        images[i].classList.add('left');
        images[i].classList.remove('right');
      }
      else images[i].classList.remove('selected');
    }
  });

  right.addEventListener('click', () => {
    selectedImage = selectedImage === images.length -1 ? 0 : selectedImage + 1;
    for (let i = 0; i < images.length; i++) {
      if (i == selectedImage) {
        images[i].classList.add('selected');
        images[i].classList.add('right');
        images[i].classList.remove('left');
      }
      else images[i].classList.remove('selected');
    }
  });
  carousel.appendChild(left);
  images.forEach(img => carousel.appendChild(img));
  carousel.appendChild(right);

  return carousel;
}