// Product Details Page JavaScript
let productDetailsContainer;

async function initProductDetails() {
    productDetailsContainer = document.getElementById('product-details');
    if (!productDetailsContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId) {
        showError('Product not found');
        return;
    }

    productDetailsContainer.innerHTML = '<div class="loading-spinner"><div class="spinner"></div></div>';

    try {
        const product = await fetchProduct(productId);
        renderProductDetails(product);
    } catch (error) {
        console.error('Error:', error);
        showError('Failed to load product. Redirecting...');
        setTimeout(() => { window.location.href = 'products.html'; }, 2000);
    }
}

function showError(message) {
    if (productDetailsContainer) {
        productDetailsContainer.innerHTML = '<div style="text-align:center;padding:60px;"><h2>' + message + '</h2></div>';
    }
}

function renderProductDetails(product) {
    if (!productDetailsContainer) return;

    const breadcrumbHTML = '<nav class="breadcrumb"><a href="index.html">Home</a><span>›</span><a href="products.html">Products</a><span>›</span><span>' + product.title.substring(0, 40) + '...</span></nav>';

    const productHTML = breadcrumbHTML + 
        '<div class="product-details-grid">' +
        '<div class="product-image-container"><img src="' + product.image + '" alt="' + product.title + '" class="product-main-image"></div>' +
        '<div class="product-details-info">' +
        '<h1>' + product.title + '</h1>' +
        '<span class="product-details-category">' + product.category + '</span>' +
        '<div class="product-details-rating"><span class="stars">' + generateStars(product.rating.rate) + '</span><span class="rating-count">' + product.rating.rate + ' out of 5 stars</span><span class="rating-count">(' + product.rating.count + ' reviews)</span></div>' +
        '<div class="product-details-price">$' + product.price.toFixed(2) + '</div>' +
        '<p class="product-details-description">' + product.description + '</p>' +
        '<div class="add-to-cart-section">' +
        '<div class="quantity-selector"><button onclick="decreaseQuantity()">−</button><span id="quantity-value">1</span><button onclick="increaseQuantity()">+</button></div>' +
        '<button class="btn-add-to-cart" onclick="handleAddToCartFromDetails(' + product.id + ')">Add to Cart</button></div></div></div>';

    productDetailsContainer.innerHTML = productHTML;
}

let currentQuantity = 1;

function increaseQuantity() { currentQuantity++; document.getElementById('quantity-value').textContent = currentQuantity; }
function decreaseQuantity() { if (currentQuantity > 1) { currentQuantity--; document.getElementById('quantity-value').textContent = currentQuantity; } }
function getCurrentQuantity() { return currentQuantity; }
function resetQuantity() { currentQuantity = 1; if (document.getElementById('quantity-value')) document.getElementById('quantity-value').textContent = 1; }

async function handleAddToCartFromDetails(productId) {
    try {
        const product = await fetchProduct(productId);
        addToCart(product, getCurrentQuantity());
        resetQuantity();
    } catch (error) { showToast('Failed to add item to cart', true); }
}

document.addEventListener('DOMContentLoaded', initProductDetails);

window.increaseQuantity = increaseQuantity;
window.decreaseQuantity = decreaseQuantity;
window.handleAddToCartFromDetails = handleAddToCartFromDetails;
window.getCurrentQuantity = getCurrentQuantity;
window.resetQuantity = resetQuantity;

