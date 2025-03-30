// Task 2: Implement fetchProductsThen using .then() and .catch()

function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
      .then(response => response.json())  // Convert response to JSON
      .then(data => {
        // Log product names
        data.forEach(product => {
          console.log(product.name);
        });
      })
      .catch(error => {
        console.error('Error fetching products:', error);  // Log any errors
      });
  }
  
  // Call the function to check if it works
  fetchProductsThen();  