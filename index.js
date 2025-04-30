document.addEventListener('DOMContentLoaded', function() {
  const filterItems = document.querySelectorAll('.items .item');
  const galleryImages = document.querySelectorAll('.gallery .image');
  
  filterItems.forEach(item => {
    item.addEventListener('click', function() {
      // Remove active class from all items
      filterItems.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked item
      this.classList.add('active');
      
      const filterName = this.dataset.name; // More modern way than getAttribute
      
      galleryImages.forEach(image => {
        // Use requestAnimationFrame for smoother transitions
        requestAnimationFrame(() => {
          const imageName = image.dataset.name;
          
          if (filterName === 'all' || filterName === imageName) {
            image.classList.remove('hide');
            image.classList.add('show');
          } else {
            image.classList.add('hide');
            image.classList.remove('show');
          }
        });
      });
    });
  });
  // Back to Top Button
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTop.classList.add('active');
  } else {
    backToTop.classList.remove('active');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

  // Initialize by showing all images
  const allButton = document.querySelector('.item[data-name="all"]');
  if (allButton) allButton.click();
});
