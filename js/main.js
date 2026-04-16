/**
 * Main JavaScript - E-Commerce Website
 * Handles navigation, cart functionality, and common utilities
 */

const API_URL = 'https://fakestoreapi.com';
const CART_KEY = 'ecommerce_cart';

// Additional mock products (80 products) with unique images
const additionalProducts = [
    // Products 21-40 with unique images
    { id: 21, title: 'Premium Wireless Headphones', price: 199.99, description: 'High-quality wireless headphones with active noise cancellation.', category: 'electronics', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', rating: { rate: 4.7, count: 245 } },
    { id: 22, title: 'Smart Watch Pro', price: 349.99, description: 'Advanced smartwatch with health monitoring and GPS.', category: 'electronics', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', rating: { rate: 4.5, count: 189 } },
    { id: 23, title: 'Portable Bluetooth Speaker', price: 79.99, description: 'Waterproof portable speaker with powerful bass.', category: 'electronics', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400', rating: { rate: 4.3, count: 312 } },
    { id: 24, title: '4K Action Camera', price: 249.99, description: 'Waterproof action camera with 4K video.', category: 'electronics', image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400', rating: { rate: 4.6, count: 156 } },
    { id: 25, title: 'Designer Diamond Necklace', price: 899.99, description: 'Elegant diamond pendant necklace.', category: 'jewelery', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400', rating: { rate: 4.9, count: 89 } },
    { id: 26, title: 'Gold Plated Bracelet', price: 149.99, description: 'Beautiful gold plated bangle bracelet.', category: 'jewelery', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400', rating: { rate: 4.4, count: 178 } },
    { id: 27, title: 'Vintage Leather Jacket', price: 299.99, description: 'Classic vintage-style leather jacket.', category: "men's clothing", image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400', rating: { rate: 4.8, count: 234 } },
    { id: 28, title: 'Cashmere Sweater', price: 189.99, description: 'Luxurious 100% cashmere sweater.', category: "men's clothing", image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400', rating: { rate: 4.6, count: 145 } },
    { id: 29, title: 'Designer Evening Dress', price: 259.99, description: 'Stunning evening gown with elegant design.', category: "women's clothing", image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400', rating: { rate: 4.7, count: 198 } },
    { id: 30, title: 'High-Waisted Jeans', price: 79.99, description: 'Flattering high-waisted denim jeans.', category: "women's clothing", image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400', rating: { rate: 4.5, count: 267 } },
    { id: 31, title: 'Gaming Laptop 15.6"', price: 1299.99, description: 'Powerful gaming laptop.', category: 'electronics', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400', rating: { rate: 4.8, count: 156 } },
    { id: 32, title: 'Mechanical Keyboard', price: 159.99, description: 'Premium mechanical gaming keyboard.', category: 'electronics', image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400', rating: { rate: 4.7, count: 289 } },
    { id: 33, title: 'Wireless Mouse', price: 69.99, description: 'Ergonomic wireless mouse.', category: 'electronics', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400', rating: { rate: 4.4, count: 345 } },
    { id: 34, title: 'Titanium Ring Set', price: 199.99, description: 'Modern titanium wedding band set.', category: 'jewelery', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400', rating: { rate: 4.6, count: 123 } },
    { id: 35, title: 'Pearl Earrings', price: 129.99, description: 'Classic freshwater pearl earrings.', category: 'jewelery', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400', rating: { rate: 4.8, count: 167 } },
    { id: 36, title: 'Denim Jacket', price: 119.99, description: 'Classic denim jacket.', category: "men's clothing", image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400', rating: { rate: 4.5, count: 234 } },
    { id: 37, title: 'Wool Blend Coat', price: 399.99, description: 'Premium wool blend overcoat.', category: "men's clothing", image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400', rating: { rate: 4.7, count: 98 } },
    { id: 38, title: 'Silk Blouse', price: 149.99, description: 'Elegant 100% silk blouse.', category: "women's clothing", image: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400', rating: { rate: 4.6, count: 178 } },
    { id: 39, title: 'Leather Handbag', price: 229.99, description: 'Genuine leather tote bag.', category: "women's clothing", image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400', rating: { rate: 4.7, count: 256 } },
    { id: 40, title: 'Yoga Pants', price: 59.99, description: 'Ultra-soft yoga pants.', category: "women's clothing", image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400', rating: { rate: 4.5, count: 412 } },
    { id: 41, title: 'Ultra HD Monitor 27"', price: 449.99, description: '27-inch 4K UHD monitor.', category: 'electronics', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400', rating: { rate: 4.8, count: 178 } },
    { id: 42, title: 'Noise Cancelling Earbuds', price: 179.99, description: 'Premium wireless earbuds.', category: 'electronics', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400', rating: { rate: 4.6, count: 289 } },
    { id: 43, title: 'Smart Home Hub', price: 129.99, description: 'Central smart home controller.', category: 'electronics', image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400', rating: { rate: 4.3, count: 156 } },
    { id: 44, title: 'Portable Power Bank', price: 49.99, description: 'High-capacity portable charger.', category: 'electronics', image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400', rating: { rate: 4.5, count: 445 } },
    { id: 45, title: 'Emerald Stud Earrings', price: 249.99, description: 'Stunning emerald gemstone studs.', category: 'jewelery', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400', rating: { rate: 4.7, count: 98 } },
    { id: 46, title: 'Rose Gold Watch', price: 399.99, description: 'Elegant rose gold watch.', category: 'jewelery', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400', rating: { rate: 4.8, count: 134 } },
    { id: 47, title: 'Sterling Silver Chain', price: 89.99, description: 'Beautiful sterling silver chain.', category: 'jewelery', image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400', rating: { rate: 4.4, count: 234 } },
    { id: 48, title: 'Classic Polo Shirt', price: 45.99, description: 'Premium cotton polo shirt.', category: "men's clothing", image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400', rating: { rate: 4.3, count: 312 } },
    { id: 49, title: 'Slim Fit Chinos', price: 69.99, description: 'Modern slim-fit chino pants.', category: "men's clothing", image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400', rating: { rate: 4.5, count: 267 } },
    { id: 50, title: 'Running Shoes', price: 129.99, description: 'Lightweight running shoes.', category: "men's clothing", image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', rating: { rate: 4.7, count: 189 } },
    { id: 51, title: 'Floral Summer Dress', price: 89.99, description: 'Beautiful floral sundress.', category: "women's clothing", image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400', rating: { rate: 4.6, count: 223 } },
    { id: 52, title: 'Cropped Cardigan', price: 79.99, description: 'Trendy cropped cardigan.', category: "women's clothing", image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400', rating: { rate: 4.4, count: 178 } },
    { id: 53, title: 'High Heel Pumps', price: 119.99, description: 'Elegant high heel pumps.', category: "women's clothing", image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400', rating: { rate: 4.3, count: 145 } },
    { id: 54, title: 'Wireless Charging Pad', price: 39.99, description: 'Fast wireless charging pad.', category: 'electronics', image: 'https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?w=400', rating: { rate: 4.5, count: 534 } },
    { id: 55, title: 'USB-C Hub 7-in-1', price: 59.99, description: 'Multi-port USB-C hub.', category: 'electronics', image: 'https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=400', rating: { rate: 4.6, count: 267 } },
    { id: 56, title: 'Webcam 1080p', price: 89.99, description: 'Full HD webcam.', category: 'electronics', image: 'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400', rating: { rate: 4.4, count: 312 } },
    { id: 57, title: 'Smart Thermostat', price: 249.99, description: 'WiFi-enabled smart thermostat.', category: 'electronics', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400', rating: { rate: 4.7, count: 189 } },
    { id: 58, title: 'Pendant Light Fixture', price: 79.99, description: 'Modern pendant light.', category: 'electronics', image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400', rating: { rate: 4.5, count: 98 } },
    { id: 59, title: 'Fitness Tracker Band', price: 59.99, description: 'Slim fitness band.', category: 'electronics', image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400', rating: { rate: 4.4, count: 378 } },
    { id: 60, title: 'Tablet Stand Adjustable', price: 34.99, description: 'Ergonomic tablet stand.', category: 'electronics', image: 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=400', rating: { rate: 4.6, count: 234 } },
    // Products 61-100 with more unique images
    { id: 61, title: 'Gaming Monitor 32"', price: 599.99, description: '32-inch curved gaming monitor 144Hz.', category: 'electronics', image: 'https://images.unsplash.com/photo-1616763355603-9755a640a287?w=400', rating: { rate: 4.9, count: 267 } },
    { id: 62, title: 'Smart LED Bulbs 4-Pack', price: 29.99, description: 'Color changing smart bulbs.', category: 'electronics', image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400', rating: { rate: 4.3, count: 456 } },
    { id: 63, title: 'Wireless Earbuds Pro', price: 149.99, description: 'True wireless earbuds with charging case.', category: 'electronics', image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400', rating: { rate: 4.5, count: 389 } },
    { id: 64, title: 'Portable SSD 1TB', price: 129.99, description: 'Fast portable solid state drive.', category: 'electronics', image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400', rating: { rate: 4.8, count: 198 } },
    { id: 65, title: 'Diamond Halo Ring', price: 599.99, description: 'Stunning diamond halo engagement ring.', category: 'jewelery', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400', rating: { rate: 4.9, count: 76 } },
    { id: 66, title: 'Sapphire Pendant', price: 349.99, description: 'Beautiful sapphire gemstone pendant.', category: 'jewelery', image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400', rating: { rate: 4.7, count: 112 } },
    { id: 67, title: 'Leather Belt Set', price: 49.99, description: 'Premium leather belt set.', category: "men's clothing", image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=400', rating: { rate: 4.4, count: 234 } },
    { id: 68, title: 'Tweed Blazer', price: 259.99, description: 'Classic tweed sport coat.', category: "men's clothing", image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400', rating: { rate: 4.6, count: 89 } },
    { id: 69, title: 'Maxi Wrap Dress', price: 139.99, description: 'Elegant flowing maxi wrap dress.', category: "women's clothing", image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400', rating: { rate: 4.7, count: 156 } },
    { id: 70, title: 'Tailored Trousers', price: 99.99, description: 'Professional tailored trousers.', category: "women's clothing", image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400', rating: { rate: 4.5, count: 178 } },
    { id: 71, title: 'Smart Door Lock', price: 199.99, description: 'Biometric smart door lock.', category: 'electronics', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400', rating: { rate: 4.6, count: 234 } },
    { id: 72, title: 'Robot Vacuum', price: 399.99, description: 'Smart robot vacuum cleaner.', category: 'electronics', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400', rating: { rate: 4.7, count: 312 } },
    { id: 73, title: 'Air Purifier', price: 179.99, description: 'HEPA air purifier for home.', category: 'electronics', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400', rating: { rate: 4.5, count: 189 } },
    { id: 74, title: 'Electric Kettle', price: 49.99, description: 'Fast boil electric kettle.', category: 'electronics', image: 'https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?w=400', rating: { rate: 4.4, count: 267 } },
    { id: 75, title: 'Ruby Bracelet', price: 299.99, description: 'Genuine ruby gemstone bracelet.', category: 'jewelery', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400', rating: { rate: 4.8, count: 67 } },
    { id: 76, title: 'Gold Hoop Earrings', price: 79.99, description: 'Classic gold hoop earrings.', category: 'jewelery', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400', rating: { rate: 4.6, count: 198 } },
    { id: 77, title: 'Linen Summer Suit', price: 349.99, description: 'Lightweight linen summer suit.', category: "men's clothing", image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', rating: { rate: 4.5, count: 123 } },
    { id: 78, title: 'Oxford Button-Down', price: 69.99, description: 'Classic oxford cloth shirt.', category: "men's clothing", image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400', rating: { rate: 4.6, count: 289 } },
    { id: 79, title: 'Pencil Skirt', price: 59.99, description: 'Professional pencil skirt.', category: "women's clothing", image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400', rating: { rate: 4.4, count: 234 } },
    { id: 80, title: 'Ankle Booties', price: 149.99, description: 'Trendy block heel ankle boots.', category: "women's clothing", image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400', rating: { rate: 4.7, count: 167 } },
    { id: 81, title: 'Streaming Device 4K', price: 59.99, description: '4K HDR streaming media player.', category: 'electronics', image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400', rating: { rate: 4.6, count: 445 } },
    { id: 82, title: 'Bluetooth Adapter', price: 24.99, description: 'USB Bluetooth adapter 5.0.', category: 'electronics', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400', rating: { rate: 4.2, count: 567 } },
    { id: 83, title: 'Laptop Backpack', price: 79.99, description: 'Anti-theft laptop backpack.', category: 'electronics', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400', rating: { rate: 4.7, count: 234 } },
    { id: 84, title: 'Phone Tripod Mount', price: 19.99, description: 'Flexible phone tripod stand.', category: 'electronics', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400', rating: { rate: 4.3, count: 389 } },
    { id: 85, title: 'Cubic Zirconia Tiara', price: 179.99, description: 'Sparkling cz tiara crown.', category: 'jewelery', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400', rating: { rate: 4.5, count: 145 } },
    { id: 86, title: 'Amethyst Necklace', price: 199.99, description: 'Purple amethyst pendant necklace.', category: 'jewelery', image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400', rating: { rate: 4.6, count: 98 } },
    { id: 87, title: 'Henley Long Sleeve', price: 54.99, description: 'Cotton henley pullover.', category: "men's clothing", image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400', rating: { rate: 4.4, count: 234 } },
    { id: 88, title: 'Quilted Vest', price: 89.99, description: 'Lightweight quilted vest.', category: "men's clothing", image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400', rating: { rate: 4.5, count: 167 } },
    { id: 89, title: 'Bohemian Maxi Skirt', price: 79.99, description: 'Flowing boho maxiskirt.', category: "women's clothing", image: 'https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=400', rating: { rate: 4.6, count: 189 } },
    { id: 90, title: 'Oversized Sunglasses', price: 34.99, description: 'Trendy oversized UV protection.', category: "women's clothing", image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400', rating: { rate: 4.3, count: 312 } },
    { id: 91, title: 'Smart Plug Set', price: 29.99, description: 'WiFi smart plugs 4-pack.', category: 'electronics', image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400', rating: { rate: 4.4, count: 534 } },
    { id: 92, title: 'Desktop Microphone', price: 89.99, description: 'USB condenser microphone.', category: 'electronics', image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400', rating: { rate: 4.6, count: 234 } },
    { id: 93, title: 'Gaming Chair', price: 299.99, description: 'Ergonomic gaming chair.', category: 'electronics', image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400', rating: { rate: 4.8, count: 189 } },
    { id: 94, title: 'Desk Organizer', price: 39.99, description: 'Bamboo desk organizer set.', category: 'electronics', image: 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=400', rating: { rate: 4.5, count: 267 } },
    { id: 95, title: 'Pearl Bracelet', price: 119.99, description: 'Freshwater pearl bracelet.', category: 'jewelery', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400', rating: { rate: 4.7, count: 134 } },
    { id: 96, title: 'Onyx Signet Ring', price: 89.99, description: 'Classic black onyx ring.', category: 'jewelery', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400', rating: { rate: 4.5, count: 178 } },
    { id: 97, title: 'Corduroy Pants', price: 74.99, description: 'Classic corduroy trousers.', category: "men's clothing", image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400', rating: { rate: 4.4, count: 156 } },
    { id: 98, title: 'Flannel Button Shirt', price: 64.99, description: 'Warm flannel button shirt.', category: "men's clothing", image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400', rating: { rate: 4.6, count: 198 } },
    { id: 99, title: 'Pleated Palazzo Pants', price: 84.99, description: 'Flowing palazzo wide leg pants.', category: "women's clothing", image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400', rating: { rate: 4.5, count: 145 } },
    { id: 100, title: 'Crossbody Bag', price: 119.99, description: 'Leather crossbody messenger.', category: "women's clothing", image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400', rating: { rate: 4.7, count: 223 } }
];

// Utility Functions
function showToast(message, isError = false) {
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();
    const toast = document.createElement('div');
    toast.className = 'toast ' + (isError ? 'error' : '');
    toast.innerHTML = '<span>' + message + '</span>';
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 3000);
}

function getCart() {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(element => { element.textContent = totalItems; });
}

function addToCart(product, quantity = 1) {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) { existingItem.quantity += quantity; }
    else { cart.push({ id: product.id, title: product.title, price: product.price, image: product.image, quantity: quantity }); }
    saveCart(cart);
    showToast(product.title.substring(0, 30) + '... added to cart!');
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
}

function calculateCartTotal() {
    return getCart().reduce((total, item) => total + (item.price * item.quantity), 0);
}

function generateStars(rating) {
    let starsHTML = '';
    for (let i = 0; i < 5; i++) { starsHTML += i < Math.floor(rating) ? '★' : '☆'; }
    return starsHTML;
}

function formatPrice(price) { return '$' + price.toFixed(2); }

// Fetch products from additional products with unique images only
async function fetchProducts(category = null) {
    // Use only additional products to ensure all have unique photos
    let filteredAdditional = additionalProducts;
    if (category && category !== 'all') { 
        filteredAdditional = additionalProducts.filter(p => p.category === category); 
    }
    return filteredAdditional;
}

async function fetchProduct(id) {
    try {
        const response = await fetch(API_URL + '/products/' + id);
        if (response.ok) return await response.json();
    } catch (error) { console.log('Checking additional products'); }
    const product = additionalProducts.find(p => p.id === parseInt(id));
    if (product) return product;
    throw new Error('Product not found');
}

async function fetchCategories() {
    const response = await fetch(API_URL + '/products/categories');
    return await response.json();
}

function createProductCard(product) {
    return '<div class="product-card" data-id="' + product.id + '">' +
        '<img src="' + product.image + '" alt="' + product.title + '" class="product-image" loading="lazy">' +
        '<div class="product-info">' +
        '<h3 class="product-title">' + product.title + '</h3>' +
        '<div class="product-rating"><span class="stars">' + generateStars(product.rating.rate) + '</span><span class="rating-count">(' + product.rating.count + ')</span></div>' +
        '<div class="product-price">$' + product.price.toFixed(2) + '</div>' +
        '<div class="product-actions">' +
        '<button class="btn btn-primary" onclick="handleAddToCart(' + product.id + ')">Add to Cart</button>' +
        '<button class="btn btn-secondary" onclick="viewProduct(' + product.id + ')">View Details</button></div></div></div>';
}

async function handleAddToCart(productId) {
    try { const product = await fetchProduct(productId); addToCart(product); }
    catch (error) { showToast('Failed to add item to cart', true); }
}

function viewProduct(productId) { window.location.href = 'product.html?id=' + productId; }

function createLoadingSpinner() { return '<div class="loading-spinner"><div class="spinner"></div></div>'; }

// Navigation
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    if (mobileMenuBtn && navMenu) { mobileMenuBtn.addEventListener('click', () => { navMenu.classList.toggle('active'); }); }
}

function initSearch() {
    const searchForm = document.querySelector('.search-bar');
    if (searchForm) { searchForm.addEventListener('submit', (e) => { e.preventDefault(); const query = searchForm.querySelector('input').value.trim(); if (query) { sessionStorage.setItem('searchQuery', query); window.location.href = 'products.html'; } }); }
}

function initBackToTop() {
    const backToTop = document.querySelector('.footer-back-to-top');
    if (backToTop) { backToTop.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); }); }
}

function initCommon() { 
    updateCartCount(); 
    initMobileMenu(); 
    initSearch(); 
    initBackToTop(); 
    initDarkMode();
}

// Dark Mode Functions
function initDarkMode() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
}

function toggleDarkMode() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    if (newTheme === 'dark') {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        html.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    }
}

document.addEventListener('DOMContentLoaded', initCommon);

// Export functions
window.API_URL = API_URL;
window.CART_KEY = CART_KEY;
window.additionalProducts = additionalProducts;
window.getCart = getCart;
window.saveCart = saveCart;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.calculateCartTotal = calculateCartTotal;
window.showToast = showToast;
window.fetchProducts = fetchProducts;
window.fetchProduct = fetchProduct;
window.fetchCategories = fetchCategories;
window.createProductCard = createProductCard;
window.handleAddToCart = handleAddToCart;
window.viewProduct = viewProduct;
window.formatPrice = formatPrice;
window.generateStars = generateStars;
window.createLoadingSpinner = createLoadingSpinner;

