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


  // Task 3: Add fetchProductsAsync using async/await and try/catch

  async function fetchProductsAsync() {
    try {
      const response = await fetch('https://www.course-api.com/javascript-store-products');
      const products = await response.json();
      
      // Call the display function after fetching the products
      displayProducts(products);
    } catch (error) {
      handleError(error);
    }
  }
  
  // Call fetchProductsAsync
  fetchProductsAsync();
  

  // Task 4: Display products in the DOM with name, price, and image

  function displayProducts(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = '';  // Clear existing content
    
    // Loop through the first 5 products
    products.slice(0, 5).forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      
      const productName = document.createElement('h3');
      productName.textContent = product.name;
      
      const productPrice = document.createElement('p');
      productPrice.textContent = `$${product.price}`;
      
      const productImage = document.createElement('img');
      productImage.src = product.image;
      productImage.alt = product.name;
      
      productElement.append(productName, productPrice, productImage);
      container.appendChild(productElement);
    });
  }
  

  // Task 5: Add reusable handleError function

  function handleError(error) {
    console.log('An error occurred:', error.message);
  }
  

  // Task 6: Trigger both fetch methods at script load

  // Trigger both fetch methods at script load
fetchProductsThen();
fetchProductsAsync();