const getTestimonials = async () => {
    try {
      const results = await fetch('./data/testimonials.json');
      const data = await results.json();
      const testimonials = data.testimonials;
      return testimonials;
    } catch (err) {
      console.log(err);
    }
  };
  
  const testimonialsWrapper = document.querySelector('.test-wrapper');
  const cards = [...document.querySelectorAll('.testimonials .card')];
  
  window.addEventListener('DOMContentLoaded', async function () {
    const testimonials = await getTestimonials();
    displayTestimonials(testimonials);
    filter();
  });
  const displayTestimonials = (items) => {
    let testimonials = items.map(
      (
        item
      ) => `<div class="testimonial" data-id="${item.firstName}">
              <div class="d-flex">
                <div>
                  <h4>${item.name}</h4>
                  <span>${item.position}</span>
                </div>
  
                <div class="rating">
                  <span><i class="bx bxs-star"></i></span>
                  <span><i class="bx bxs-star"></i></span>
                  <span><i class="bx bxs-star"></i></span>
                  <span><i class='bx bxs-star-half' ></i></i></span>
                  <span><i class='bx bxs-star-half' ></i></i></span>
                </div>
              </div>
  
              <p>
               ${item.info}
              </p>
            </div>`
    );
  
    testimonials = testimonials.join('');
    testimonialsWrapper.innerHTML = testimonials;
  };
  

