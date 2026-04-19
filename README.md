# mini amazon - E-Commerce Website

A professional Amazon-style e-commerce website built with HTML5, CSS3, and Vanilla JavaScript using the Fake Store API.

## 📁 Project Structure

```
ecommerce-project/
│
├── index.html          # Home page
├── products.html       # Products listing page
├── product.html        # Product details page
├── cart.html           # Shopping cart page
│
├── css/
│   └── style.css       # Main stylesheet
│
├── js/
│   ├── main.js         # Core functionality & utilities
│   ├── products.js     # Products page logic
│   ├── productDetails.js  # Product details logic
│   └── cart.js         # Cart functionality
│
└── images/            # Image assets (optional)
```

## 🚀 How to Run the Project

### Option 1: Open Directly in Browser

Simply double-click on `index.html` to open it in your web browser.

### Option 2: Using VS Code Live Server

1. Open the `ecommerce-project` folder in VS Code
2. Install the "Live Server" extension
3. Right-click on `index.html` and select "Open with Live Server"

### Option 3: Using Python Simple HTTP Server

1. Open terminal in the project folder
2. Run: `python -m http.server 8000`
3. Open browser and go to: `http://localhost:8000`

## ✨ Features

### Home Page (index.html)

- ✅ Sticky navigation bar with logo and search
- ✅ Dynamic categories section
- ✅ Featured products (8 products)
- ✅ Product cards with image, title, price, rating
- ✅ Add to Cart and View Details buttons

### Products Page (products.html)

- ✅ All products from Fake Store API
- ✅ Category filtering
- ✅ Sort by price (low/high), name, rating
- ✅ Responsive grid layout

### Product Details Page (product.html)

- ✅ Large product image
- ✅ Full product description
- ✅ Price and rating display
- ✅ Quantity selector
- ✅ Add to Cart functionality
- ✅ Related products section

### Cart Page (cart.html)

- ✅ Cart items with images and details
- ✅ Quantity adjustment (+/-)
- ✅ Remove items
- ✅ Order summary with subtotal, shipping, tax
- ✅ Total calculation
- ✅ Empty cart message

## 🎨 Design Features

- Modern Amazon-inspired UI
- Responsive design (mobile, tablet, desktop)
- Smooth hover animations
- Card shadows and rounded corners
- Loading spinner
- Toast notifications
- Sticky navbar
- CSS Grid and Flexbox layout

## 🔧 Technical Details

- Pure HTML5, CSS3, Vanilla JavaScript
- No frameworks or libraries
- Fake Store API integration
- localStorage for cart persistence
- Recently viewed products
- Category parameter URL support

## 📱 Responsive Breakpoints

- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

## 💡 Suggestions for Portfolio

To make this project more impressive for a professional portfolio:

### 1. Enhanced Features

- User authentication (simulated)
- Wishlist functionality
- Product reviews and ratings
- Search with autocomplete
- Advanced filtering (price range, rating)
- Product comparison

### 2. Performance Optimization

- Image lazy loading
- Code splitting
- Service workers for offline support
- CDN for static assets

### 3. UI/UX Improvements

- Dark mode toggle
- Multiple theme options
- Advanced animations
- Skeleton loading states
- Infinite scroll

### 4. Backend Integration

- Connect to a real backend (Node.js, Python)
- Database integration (MongoDB, PostgreSQL)
- Payment gateway integration (Stripe)
- Order management system

### 5. Testing

- Unit tests with Jest
- E2E tests with Cypress
- Performance testing with Lighthouse

### 6. Documentation

- API documentation
- Component documentation
- Setup instructions

## 📦 Dependencies

- Font Awesome 6.4.0 (via CDN)
- Fake Store API (https://fakestoreapi.com)

## 🔗 Fake Store API Endpoints

- All products: `https://fakestoreapi.com/products`
- Single product: `https://fakestoreapi.com/products/{id}`
- Categories: `https://fakestoreapi.com/products/categories`
- Products by category: `https://fakestoreapi.com/products/category/{category}`


---

Built with ❤️ using vanilla web technologies
