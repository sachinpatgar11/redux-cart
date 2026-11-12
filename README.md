# Redux Toolkit Product & Cart Application

A modern, responsive product shopping application built with React, Redux Toolkit, and Vite. The application demonstrates practical React development concepts, centralized state management, reusable components, routing, API integration, and persistent application state.

Users can browse products, search and explore product details, manage shopping cart items, and switch between light and dark themes.

## Features

### Product Listing

- Fetches product data from the DummyJSON API.
- Displays products in a responsive grid layout.
- Provides product information, including title, price, description, category, and image.
- Supports product browsing and navigation to individual product details.
- Includes loading and error states for API requests.

### Product Details

- Displays detailed information about an individual product.
- Uses dynamic route parameters to identify products.
- Provides cart actions directly from the product details page.
- Loads the product details page lazily to improve initial application loading.

### Shopping Cart

- Add products to the shopping cart.
- Increase or decrease product quantities.
- Automatically displays the Remove action when the quantity reaches one.
- Remove individual products from the cart.
- View the total number of items and total cart price.
- Maintain cart state across page refreshes using browser local storage.

### State Management

- Uses Redux Toolkit for centralized state management.
- Uses `configureStore` to configure the Redux store.
- Uses `createSlice` to manage cart and theme state.
- Uses Redux selectors to access cart data.
- Uses memoized selectors with `createSelector` for derived cart values, including total quantity and total price.
- Separates application state into feature-based slices.

### Theme Management

- Supports light and dark themes.
- Allows users to switch between themes.
- Persists the selected theme using browser local storage.
- Applies theme styles consistently across application components.

### Routing and Performance

- Uses React Router for client-side navigation.
- Implements lazy loading for page-level components.
- Uses React Suspense with a reusable loader component.
- Organizes the application into reusable components, pages, features, and services.

### User Interface

- Responsive layout for desktop, tablet, and mobile screens.
- Reusable product cards and quantity controls.
- Consistent styling using CSS variables.
- Interactive buttons and clear visual feedback.
- Accessible labels for interactive controls.

## Tech Stack

| Technology    | Purpose                               |
| ------------- | ------------------------------------- |
| React         | Building the user interface           |
| JavaScript    | Application logic                     |
| Redux Toolkit | Centralized state management          |
| React Redux   | Connecting React components to Redux  |
| React Router  | Client-side routing                   |
| Vite          | Development server and build tooling  |
| CSS3          | Styling and responsive layouts        |
| DummyJSON API | Product data source                   |
| Local Storage | Persisting cart and theme preferences |

## Project Structure

```text
redux-cart/
├── public/
│   └── favicon.svg
├── src/
│   ├── app/
│   │   └── store.js
│   ├── components/
│   │   ├── CartSummary.jsx
│   │   ├── Header.jsx
│   │   ├── Loader.jsx
│   │   ├── ProductCard.jsx
│   │   └── QuantityControl.jsx
│   ├── features/
│   │   ├── cart/
│   │   │   ├── cartSelectors.js
│   │   │   └── cartSlice.js
│   │   └── theme/
│   │       └── themeSlice.js
│   ├── pages/
│   │   ├── Cart.jsx
│   │   ├── ProductDetails.jsx
│   │   └── Products.jsx
│   ├── services/
│   │   └── productApi.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── eslint.config.js
└── README.md
```

## Getting Started

### Prerequisites

Make sure the following tools are installed:

- Node.js
- npm
- Git

### Installation

1. Clone the repository.

2. Navigate to the project directory.

3. Install the project dependencies.

4. Start the development server.

### Available Scripts

| Command           | Description                                 |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Starts the local development server         |
| `npm run build`   | Creates an optimized production build       |
| `npm run preview` | Previews the production build locally       |
| `npm run lint`    | Runs ESLint to identify code-quality issues |

## API Integration

The application uses the DummyJSON Products API to retrieve product information.

**API endpoint:** https://dummyjson.com/products

The API integration is maintained separately in the services directory to keep data-fetching logic independent of UI components.

## State Persistence

The application uses browser local storage to persist selected application state.

- **Cart:** Previously added products and their quantities remain available after refreshing the page.
- **Theme:** The user's selected light or dark theme is retained across sessions.

Redux Toolkit manages the application state, while local storage provides persistence between browser sessions.

## Learning Outcomes

This project demonstrates practical implementation of:

- React functional components and hooks.
- Component composition and reusability.
- Redux Toolkit and Redux state management.
- Feature-based state organization.
- Redux selectors and memoized selectors.
- React Router and dynamic routing.
- Lazy loading and React Suspense.
- REST API integration using Fetch.
- Loading and error handling.
- Browser local storage.
- Derived state and cart calculations.
- Responsive CSS layouts.
- Basic accessibility considerations.

## Future Enhancements

Potential improvements for future iterations include:

- Product search and category filtering.
- Pagination and sorting.
- Skeleton loading states.
- Improved API error handling and request cancellation.
- Automated unit and integration tests.
- Error boundaries.
- Checkout workflow.
- Improved accessibility and keyboard navigation.

## License

This project is intended for learning and demonstration purposes. You are welcome to explore, modify, and extend it.
