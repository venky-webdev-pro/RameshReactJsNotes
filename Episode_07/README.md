# React Concepts

## 📌 What are various ways to add images into our App?

There are multiple ways to add images in a React application:

1. **Importing the image file**

```jsx
import React from "react";
import logo from "./logo.png";

function App() {
  return <img src={logo} alt="Logo" />;
}
```

2. **Using Public Folder**

```jsx
function App() {
  return <img src="/logo.png" alt="Logo" />; // Place logo.png in public/
}
```

3. **Using External URL**

```jsx
function App() {
  return <img src="https://example.com/logo.png" alt="Logo" />;
}
```

---

## 📌 What would happen if we do `console.log(useState())`?

* `useState()` returns an **array** with two elements:

  1. Current state value
  2. A function to update the state

**Example:**

```jsx
const [count, setCount] = useState(0);
console.log(useState());
// Output: [undefined, ƒ] if no initial value
// Output: [0, ƒ] if initial value is 0
```

---

## 📌 How will useEffect behave if we don't add a dependency array?

* **Without dependency array:** Runs on **every render**.
* **With empty array `[]`:** Runs only once after initial render.
* **With dependencies `[x, y]`:** Runs whenever `x` or `y` changes.

**Example:**

```jsx
useEffect(() => {
  console.log("Runs every render!");
}); // No dependency array
```

---

## 📌 What is SPA?

A **Single Page Application (SPA)** is a web application that loads only one HTML page and dynamically updates content using JavaScript without reloading the entire page.

**Examples:** Gmail, Facebook, Twitter.

---

## 📌 Difference between Client Side Routing and Server Side Routing

| Feature                   | Client Side Routing                        | Server Side Routing                     |
| ------------------------- | ------------------------------------------ | --------------------------------------- |
| **Where Routing Happens** | Inside the browser (JavaScript handles it) | On the server (new page sent by server) |
| **Page Reload**           | No reload, faster transitions              | Full page reload for every route        |
| **Performance**           | Faster after initial load                  | Slower (each request reloads the page)  |
| **Example**               | React Router, Angular Router               | Traditional PHP/Java web apps           |

**React Example (Client-side routing using `react-router-dom`):**

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

# 📖 Summary

* **Images in React** → Import, Public folder, or External URL.
* **console.log(useState())** → Returns `[state, setStateFn]`.
* **useEffect without dependency** → Runs after every render.
* **SPA** → Single HTML page, dynamic updates.
* **Client vs Server Routing** → Client routing is faster (no reloads), Server routing reloads page every time.
