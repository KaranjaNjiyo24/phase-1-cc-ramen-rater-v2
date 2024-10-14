// index.js

import { e } from "vitest/dist/reporters-rzC174PQ.js";

// Callbacks
const handleClick = (ramen) => {
  // Add code
    // Select the DOM elements where the details will be displayed
    const foodDisplayImg = document.querySelector("#ramen-detail .detail-image");
    const foodName = document.querySelector("#ramen-detail .name");
    const foodRestaurant = document.querySelector("#ramen-detail .restaurant");
    const ratingFood = document.getElementById("rating-display");
    const commentOnFood = document.getElementById("comment-display");
  
    // Update the elements with the ramen's data
    foodDisplayImg.src = ramen.image;
    foodDisplayImg.alt = ramen.name;
    foodName.textContent = ramen.name;
    foodRestaurant.textContent = ramen.restaurant;
    ratingFood.textContent = ramen.rating;
    commentOnFood.textContent = ramen.comment;
};

const addSubmitListener = () => {
  // Add code
  form = document.getElementById('new-ramen');
  form.addEventListener('submit', function(e) {
    e.preventDefault() //avoid refreshing
    //getting values from form we assign the elements first
    const name = document.getElementById('new-name')
    const restaurant = document.getElementById('new-restaurant')
    const image = document.getElementById('new-image')
    const rating = document.getElementById('new-rating')
    const comment = document.getElementById('new-comment')

    const newRamen = {
      name: name.value,
      restaurant: restaurant.value,
      image: image.value,
      rating: rating.value,
      comment: comment.value
    }

    const img = document.createElement('img')
    img.src = newRamen.image
    img.alt = newRamen.name

    img.addEventListener('click', () => {
      handleClick(newRamen)
    })

    const ramenMenu = document.getElementById('ramen-menu')
    ramenMenu.appendChild(img)

    form.reset()
  })


}

const displayRamens = () => {
  // Add code
  fetch('http://localhost:3000/ramens') 
  .then(response => response.json())
  .then(ramens => {
    const ramenMenu = document.getElementById('ramen-menu');
    ramens.forEach(ramen => {
      const img = document.createElement('img');
      img.src = ramen.image;
      img.alt = ramen.name;

      img.addEventListener('click', () => handleClick(ramen));
      ramenMenu.appendChild(img);
    });
  });
};

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
  displayRamens()
  addSubmitListener()
}

main()


// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
