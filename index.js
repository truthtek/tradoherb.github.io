'use strict';



/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * header & go top btn active on page scroll
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});


document.addEventListener('DOMContentLoaded', function () {
    // Get all filter buttons and product items
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productItems = document.querySelectorAll('.product-item');
  
    // Add click event listeners to each filter button
    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const category = button.textContent; // Get the category from the button text
  
        // Toggle the "active" class on the filter buttons
        filterButtons.forEach((btn) => {
          btn.classList.remove('active');
        });
        button.classList.add('active');
  
        // Toggle the visibility of product items based on the category
        productItems.forEach((item) => {
          const itemCategory = item.getAttribute('data-category');
  
          if (category === 'All' || category === itemCategory) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });

  


  
  // JavaScript to manage the shopping cart
  const cartItemList = document.getElementById('cartItemList');
  const cartTotal = document.getElementById('cartTotal');
  const cartOverlay = document.getElementById('cartOverlay');

  // Example: Function to add an item to the cart
  function addItemToCart(name, price) {
      const listItem = document.createElement('li');
      listItem.textContent = `${name} - $${price.toFixed(2)}`;
      cartItemList.appendChild(listItem);

      // Update the total
      updateTotal(price);
  }

  // Example: Function to update the total amount
  function updateTotal(price) {
      const currentTotal = parseFloat(cartTotal.textContent);
      const newTotal = currentTotal + price;
      cartTotal.textContent = newTotal.toFixed(2);
  }

  // Example: Function to clear the cart
  function clearCart() {
      cartItemList.innerHTML = '';
      cartTotal.textContent = '0.00';
  }

  // Example: Add event listener to the checkout button
  const checkoutButton = document.querySelector('.checkout-button');
  checkoutButton.addEventListener('click', () => {
      alert('Checkout clicked! Total: $' + cartTotal.textContent);
  });




  const filterButtons = document.querySelectorAll('.filter-btn');
        const productList = document.getElementById('productList');

        // Sample product data
        const products = [
            {
                category: 'Nike',
                name: 'Running Sneaker Shoes',
                price: 180.85,
                imageUrl: './assets/images/product-1.jpg',
            },
            {
                category: 'Adidas',
                name: 'Leather Mens Slipper',
                price: 190.85,
                imageUrl: './assets/images/product-2.jpg',
            },
            // Add more product data here
            {
                category: 'Detoxifying',
                name: 'Diabetism',
                price: 10.85,
                imageUrl: './bottle.jpg',
            },
        ];

        // Function to filter and display products
        function filterProducts(category) {
            productList.innerHTML = ''; // Clear existing products
            products.forEach(product => {
                if (category === 'all' || product.category === category) {
                    const productItem = document.createElement('li');
                    productItem.classList.add('product-item');
                    
                    const productCard = document.createElement('div');
                    productCard.classList.add('product-card');
                    productCard.tabIndex = 0;
                    
                    const cardBanner = document.createElement('figure');
                    cardBanner.classList.add('card-banner');
                    
                    const productImage = document.createElement('img');
                    productImage.src = product.imageUrl;
                    productImage.width = 312;
                    productImage.height = 350;
                    productImage.loading = 'lazy';
                    productImage.alt = product.name;
                    productImage.classList.add('image-contain');
                    
                    const cardBadge = document.createElement('div');
                    cardBadge.classList.add('card-badge');
                    cardBadge.textContent = 'New';
                    
                    const cardActionList = document.createElement('ul');
                    cardActionList.classList.add('card-action-list');
                    
                    const cardActionItem = document.createElement('li');
                    cardActionItem.classList.add('card-action-item');
                    
                    const cardActionButton = document.createElement('button');
                    cardActionButton.classList.add('card-action-btn');
                    cardActionButton.setAttribute('aria-labelledby', 'card-label-1');
                    
                    const ionIcon = document.createElement('ion-icon');
                    ionIcon.name = 'cart-outline';
                    
                    const cardActionTooltip = document.createElement('div');
                    cardActionTooltip.classList.add('card-action-tooltip');
                    cardActionTooltip.id = 'card-label-1';
                    cardActionTooltip.textContent = 'Add to Cart';
                    
                    cardActionItem.appendChild(cardActionButton);
                    cardActionItem.appendChild(cardActionTooltip);
                    cardActionButton.appendChild(ionIcon);
                    cardBanner.appendChild(productImage);
                    cardBanner.appendChild(cardBadge);
                    cardBanner.appendChild(cardActionList);
                    cardActionList.appendChild(cardActionItem);
                    
                    const cardContent = document.createElement('div');
                    cardContent.classList.add('card-content');
                    
                    const cardCat = document.createElement('div');
                    cardCat.classList.add('card-cat');
                    
                    const cardCatLink = document.createElement('a');
                    cardCatLink.href = '#';
                    cardCatLink.classList.add('card-cat-link');
                    cardCatLink.textContent = 'Read more';
                    
                    const cardTitle = document.createElement('h3');
                    cardTitle.classList.add('h3', 'card-title');
                    
                    const cardTitleLink = document.createElement('a');
                    cardTitleLink.href = '#';
                    cardTitleLink.textContent = product.name;
                    
                    const cardPrice = document.createElement('data');
                    cardPrice.classList.add('card-price');
                    cardPrice.value = product.price;
                    cardPrice.textContent = `$${product.price.toFixed(2)}`;
                    
                    cardCat.appendChild(cardCatLink);
                    cardTitle.appendChild(cardTitleLink);
                    cardContent.appendChild(cardCat);
                    cardContent.appendChild(cardTitle);
                    cardContent.appendChild(cardPrice);
                    
                    productCard.appendChild(cardBanner);
                    productCard.appendChild(cardContent);
                    
                    productItem.appendChild(productCard);
                    
                    productList.appendChild(productItem);
                }
            });
        }

        // Add click event listeners to filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove the 'active' class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add 'active' class to the clicked button
                button.classList.add('active');
                // Get the category from the button's data-category attribute
                const category = button.getAttribute('data-category');
                // Filter and display products based on the selected category
                filterProducts(category);
            });
        });

        // Initially, display all products
        filterProducts('all');
