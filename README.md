# Redux Toolkit Product & Cart Application

A React e-commerce application built with **React, Redux Toolkit, React Router, and Vite**.

The application fetches products from the **Fake Store API** and provides a complete shopping cart experience where users can add products, update quantities, remove products, and view cart totals.

---

## Features

### Product Page

- Fetches products from an open-source REST API.
- Displays products in a responsive grid.
- Shows product image, title, category, and price.
- Add products to the cart.
- Increase product quantity.
- Decrease product quantity.
- Automatically removes the product when decreasing from quantity `1`.
- Displays the current quantity directly on the product card.

### Cart Page

- Displays all selected products.
- Shows product image, title, category, and price.
- Displays the selected quantity for each product.
- Increase quantity.
- Decrease quantity.
- Remove product from cart.
- Automatically removes a product when its quantity reaches `0`.
- Displays total number of products.
- Displays total cart price.
- Provides a checkout button placeholder.

### State Management

The application uses **Redux Toolkit** to manage cart state globally.

The cart state is shared between:

- Product page
- Product cards
- Header
- Cart page
- Cart summary

---

## Tech Stack

| Technology     | Purpose                     |
| -------------- | --------------------------- |
| React          | UI development              |
| Vite           | Development/build tool      |
| Redux Toolkit  | Global state management     |
| React Redux    | Connecting React with Redux |
| React Router   | Application routing         |
| JavaScript     | Application logic           |
| CSS            | Styling                     |
| Fake Store API | Product data                |

````

The API provides sample e-commerce product data including:

* Product ID
* Title
* Price
* Description
* Category
* Image
* Rating

No backend server is required to run this project.

---

## Project Structure

```text
redux-cart-app/
│
├── public/
│
├── src/
│   │
│   ├── app/
│   │   └── store.js
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ProductCard.jsx
│   │   ├── QuantityControl.jsx
│   │   └── CartSummary.jsx
│   │
│   ├── features/
│   │   └── cart/
│   │       └── cartSlice.js
│   │
│   ├── pages/
│   │   ├── Products.jsx
│   │   └── Cart.jsx
│   │
│   ├── services/
│   │   └── productApi.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
````

---

## Component Responsibilities

### `Header`

Responsible for:

- Application navigation.
- Products link.
- Cart link.
- Displaying total cart quantity.

---

### `ProductCard`

Responsible for:

- Displaying product information.
- Add to Cart functionality.
- Displaying current quantity.
- Increasing quantity.
- Decreasing quantity.
- Removing product.

---

### `QuantityControl`

A reusable component responsible for:

- Increase button.
- Decrease button.
- Remove button when quantity is `1`.

It is reused on:

- Product page.
- Cart page.

---

### `CartSummary`

Responsible for:

- Total quantity.
- Total price.
- Grand total.
- Checkout button.

---

### `Products`

Responsible for:

- Fetching products from the API.
- Loading state.
- Error state.
- Rendering product cards.

---

### `Cart`

Responsible for:

- Reading cart items from Redux.
- Rendering selected products.
- Providing quantity controls.
- Rendering the cart summary.
- Handling the empty-cart state.

---

## API Flow

Products are fetched from the Fake Store API.

```text
Products Page
      │
      ▼
getProducts()
      │
      ▼
fetch()
      │
      ▼
Fake Store API
      │
      ▼
Product Data
      │
      ▼
setProducts()
      │
      ▼
ProductCard[]
```

## Learning Objectives

This project demonstrates several important React concepts:

- Functional components.
- React Hooks.
- `useState`.
- `useEffect`.
- `useSelector`.
- `useDispatch`.
- Redux Toolkit.
- `createSlice`.
- Redux store configuration.
- Component reusability.
- Derived state.
- API integration.
- Async operations.
- Error handling.
- React Router.
- Responsive CSS.
- Separation of concerns.

---

## Author

**Sachin Patgar**

Frontend Developer

Technologies:

```text
React
Redux Toolkit
JavaScript
HTML5
CSS3
React Router
Vite
REST APIs
```

---

## License

This project is intended for learning, practice, and demonstration purposes.
