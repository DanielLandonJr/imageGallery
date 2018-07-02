const ImageGallery = (() => {
  // get large image
  const current = document.querySelector('#current');
  // get array of small images
  const imgs = document.querySelectorAll('.imgs img');
  // if we use opacity on small images this is the value
  const opacity = 0.6;

  const imgClick = (event) => {
    // reset opacity value of all images to 1 or remove the blur effect
    // imgs.forEach(img => (img.style.opacity = 1));
    imgs.forEach(img => (img.classList.remove('selectedImage')));

    // change large image to clicked image
    current.src = event.target.src;

    // add fade animation to large image
    current.classList.add('fade-in');

    // make sure fade in animation class is removed from the main image
    // if we dont do this then the fade in animation will only happen one time
    // there are other ways of doing this but hey why not use a time event, remove after 1/4 sec
    setTimeout(() => {
      current.classList.remove('fade-in');
    }, 250);

    // change the opacity or blur it out
    // event.target.style.opacity = opacity;
    event.target.classList.add('selectedImage');
  };

  // public methods
  return {
    init: () => {
      // set the first small image to appear as if it was clicked...since it is the large image displayed when page loads
      // change the opacity or blur it out
      // imgs[0].style.opacity = opacity;
      imgs[0].classList.add('selectedImage');

      imgs.forEach(img => {
        // add click event to all images in the small image array
        img.addEventListener('click', imgClick);
      });
    }
  };
})();

ImageGallery.init();