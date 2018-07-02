const ImageGallery = (() => {
  const current = document.querySelector('#current');
  const imgs = document.querySelectorAll('.imgs img');
  const opacity = 0.6;

  const imgClick = (event) => {
    // reset opacity value of all images to 1
    imgs.forEach(img => (img.style.opacity = 1));

    // change large image to clicked image
    current.src = event.target.src;

    // add fade animation to large image
    current.classList.add('fade-in');

    // make sure fade in animation class is not on the main image
    // if we dont do this then the fade in animation will only happen one time
    // there are other ways of doing this but hey why not use a time event, remove after 1/4 sec
    setTimeout(() => {
      current.classList.remove('fade-in');
    }, 250);

    // change opacity of clicked image
    event.target.style.opacity = opacity;
  };

  // public methods
  return {
    init: () => {
      // set the opacity of the first image so that it appears faded when the page loads
      imgs[0].style.opacity = opacity;

      imgs.forEach(img => {
        // add click event to all images in the array
        img.addEventListener('click', imgClick);
      });

      // imgClick();
    }
  };
})();

ImageGallery.init();