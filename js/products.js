// Products Page JavaScript
let productsContainer, categoryFilter, sortFilter, productsGrid;

async function initProductsPage() {
    productsContainer = document.getElementById('products-container');
    categoryFilter = document.getElementById('category-filter');
    sortFilter = document.getElementById('sort-filter');
    productsGrid = document.getElementById('products-grid');

    if (!productsGrid) return;

    productsGrid.innerHTML = createLoadingSpinner();

    try {
        await loadCategories();
        await loadProducts();
        setupEventListeners();
        checkSearchQuery();
    } catch (error) {
        console.error('Error:', error);
        productsGrid.innerHTML = '<p style="text-align:center;padding:40px;">Failed to load products. Please try again.</p>';
    }
}

async function loadCategories() {
    if (!categoryFilter) return;
    try {
        const categories = await fetchCategories();
        categoryFilter.innerHTML = '<option value="all">All Categories</option>' + 
            categories.map(c => '<option value="' + c + '">' + c.charAt(0).toUpperCase() + c.slice(1) + '</option>').join('');
    } catch (error) { console.error('Error loading categories'); }
}

async function loadProducts() {
    const category = categoryFilter ? categoryFilter.value : 'all';
    const sortValue = sortFilter ? sortFilter.value : 'default';

    productsGrid.innerHTML = createLoadingSpinner();

    try {
        let products = await fetchProducts(category === 'all' ? null : category);
        products = sortProducts(products, sortValue);
        renderProducts(products);
    } catch (error) {
        productsGrid.innerHTML = '<p style="text-align:center;padding:40px;">Failed to load products.</p>';
    }
}

function sortProducts(products, sortValue) {
    switch (sortValue) {
        case 'price-low': return [...products].sort((a, b) => a.price - b.price);
        case 'price-high': return [...products].sort((a, b) => b.price - a.price);
        case 'name-a': return [...products].sort((a, b) => a.title.localeCompare(b.title));
        case 'name-z': return [...products].sort((a, b) => b.title.localeCompare(a.title));
        case 'rating': return [...products].sort((a, b) => b.rating.rate - a.rating.rate);
        default: return products;
    }
}

function renderProducts(products) {
    if (!productsGrid) return;
    if (products.length === 0) {
        productsGrid.innerHTML = '<p style="text-align:center;padding:40px;">No products found</p>';
        return;
    }
    productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
}

function setupEventListeners() {
    if (categoryFilter) categoryFilter.addEventListener('change', loadProducts);
    if (sortFilter) sortFilter.addEventListener('change', loadProducts);
}

async function checkSearchQuery() {
    const searchQuery = sessionStorage.getItem('searchQuery');
    if (searchQuery) {
        sessionStorage.removeItem('searchQuery');
        const products = await fetchProducts();
        const filteredProducts = products.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()));
        renderProducts(filteredProducts);
    }
}

document.addEventListener('DOMContentLoaded', initProductsPage);

window.loadProducts = loadProducts;
window.sortProducts = sortProducts;

