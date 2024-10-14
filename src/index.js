// // index.js

// // Callbacks
// const handleClick = (ramen) => {
//   // Add code
// };

// const addSubmitListener = () => {
//   // Add code

// }

const displayRamens = () => {
  // Add code
  fetch('http://localhost:3000/ramens') 
  .then(response => response.json())
  .then(ramens => {
    const ramenMenuDiv = document.getElementById('ramen-menu');
    ramens.forEach(ramen => {
      const img = document.createElement('img');
      img.src = ramen.image
      ramenMenuDiv.appendChild(img);
    });
  });
};

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
  displayRamens()
}

main()


// Export functions for testing
export {
  displayRamens,
  // addSubmitListener,
  // handleClick,
  main,
};
