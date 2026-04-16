// Cart Page JavaScript
let cartItemsContainer, cartSummary, cartEmpty;

function initCartPage() {
    cartItemsContainer = document.getElementById('cart-items');
    cartSummary = document.getElementById('cart-summary');
    cartEmpty = document.getElementById('cart-empty');
    renderCart();
}

function renderCart() {
    const cart = getCart();

    if (cart.length === 0) {
        showEmptyCart();
        return;
    }

    hideEmptyCart();
    renderCartItems(cart);
    updateCartSummary(cart);
}

function showEmptyCart() {
    if (cartItemsContainer) cartItemsContainer.style.display = 'none';
    if (cartSummary) cartSummary.style.display = 'none';
    if (cartEmpty) cartEmpty.style.display = 'block';
}

function hideEmptyCart() {
    if (cartItemsContainer) cartItemsContainer.style.display = 'block';
    if (cartSummary) cartSummary.style.display = 'block';
    if (cartEmpty) cartEmpty.style.display = 'none';
}

function renderCartItems(cart) {
    if (!cartItemsContainer) return;
    cartItemsContainer.innerHTML = cart.map(item => 
        '<div class="cart-item" data-id="' + item.id + '">' +
        '<img src="' + item.image + '" alt="' + item.title + '" class="cart-item-image">' +
        '<div class="cart-item-details">' +
        '<h3 class="cart-item-title">' + item.title + '</h3>' +
        '<div class="cart-item-price">$' + item.price.toFixed(2) + '</div>' +
        '<div class="cart-item-actions">' +
        '<div class="cart-quantity-selector"><button onclick="updateItemQuantity(' + item.id + ', -1)">−</button><span id="quantity-' + item.id + '">' + item.quantity + '</span><button onclick="updateItemQuantity(' + item.id + ', 1)">+</button></div>' +
        '<button class="btn-remove" onclick="removeItem(' + item.id + ')">Remove</button></div></div></div>'
    ).join('');
    updateCartCount();
}

function updateCartSummary(cart) {
    if (!cartSummary) return;
    const subtotal = calculateCartTotal();
    const shipping = subtotal > 0 ? 5.99 : 0;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    cartSummary.innerHTML = '<h2>Order Summary</h2>' +
        '<div class="summary-row"><span>Subtotal (' + getTotalItems() + ' items)</span><span>$' + subtotal.toFixed(2) + '</span></div>' +
        '<div class="summary-row"><span>Shipping</span><span>' + (shipping === 0 ? 'Free' : '$' + shipping.toFixed(2)) + '</span></div>' +
        '<div class="summary-row"><span>Tax (8%)</span><span>$' + tax.toFixed(2) + '</span></div>' +
        '<div class="summary-row total"><span>Total</span><span>$' + total.toFixed(2) + '</span></div>' +
        '<button class="btn-checkout" onclick="handleCheckout()">Proceed to Checkout</button>' +
        (subtotal < 35 ? '<p style="margin-top:15px;font-size:0.85rem;color:#777;">Add $' + (35 - subtotal).toFixed(2) + ' more for FREE shipping!</p>' : '<p style="margin-top:15px;font-size:0.85rem;color:#007600;">✓ You qualify for FREE shipping!</p>');
}

function getTotalItems() { return getCart().reduce((sum, item) => sum + item.quantity, 0); }

function updateItemQuantity(productId, change) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) { removeItem(productId); }
        else {
            saveCart(cart);
            const quantityElement = document.getElementById('quantity-' + productId);
            if (quantityElement) quantityElement.textContent = item.quantity;
            updateCartSummary(cart);
        }
    }
}

function removeItem(productId) {
    if (confirm('Are you sure you want to remove this item?')) {
        removeFromCart(productId);
        renderCart();
        showToast('Item removed from cart');
    }
}

function handleCheckout() { showToast('Checkout functionality coming soon!', true); }

document.addEventListener('DOMContentLoaded', initCartPage);

window.updateItemQuantity = updateItemQuantity;
window.removeItem = removeItem;
window.handleCheckout = handleCheckout;

