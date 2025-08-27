# React & Architecture Concepts

## 📌 What is a Microservice?

A **Microservice** is an architectural style where an application is divided into smaller, independent services. Each service focuses on a specific business function, can be developed, deployed, and scaled independently.

**Example:** A shopping app can have separate microservices for user authentication, product catalog, orders, and payments.

---

## 📌 What is Monolith Architecture?

A **Monolithic Architecture** is a traditional model where the entire application is built as a single unit. All modules (UI, business logic, database) are tightly coupled and run as one service.

**Example:** A single application handling everything like user login, product listing, and payment processing inside one codebase.

---

## 📌 Difference between Monolith and Microservice

| Feature           | Monolith                            | Microservice                              |
| ----------------- | ----------------------------------- | ----------------------------------------- |
| Codebase          | Single large codebase               | Multiple small services                   |
| Scalability       | Hard to scale specific parts        | Easy to scale individual services         |
| Deployment        | Entire app must be deployed at once | Independent deployment of services        |
| Failure Impact    | One bug can crash the whole app     | Failure in one service won’t break others |
| Development Speed | Slower due to coupling              | Faster with independent teams             |

---

## 📌 Why do we need a useEffect Hook?

`useEffect` is a React Hook used to perform **side effects** (like fetching data, subscriptions, or manipulating the DOM) in functional components.

**Example:**

```jsx
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(json => setData(json));
  }, []); // Empty dependency array = runs once

  return <div>{JSON.stringify(data)}</div>;
}
```

---

## 📌 What is Optional Chaining?

Optional chaining (`?.`) allows safe access to nested object properties without throwing an error if a property is **undefined or null**.

**Example:**

```js
const user = { profile: { name: "Ramesh" } };
console.log(user.profile?.name); // Ramesh
console.log(user.account?.email); // undefined (no error)
```

---

## 📌 What is Shimmer UI?

Shimmer UI is a **loading placeholder effect** used while actual data is being fetched. It improves **user experience** by showing a skeleton screen instead of a blank screen.

**Example:** A gray animated box appears in place of a restaurant card until the data loads.

---

## 📌 Difference between JS Expression and JS Statement

* **JS Expression** → Produces a value.

  ```js
  2 + 2   // 4
  "Hello".toUpperCase()  // "HELLO"
  ```
* **JS Statement** → Performs an action.

  ```js
  if (x > 5) {
    console.log("Greater");
  }
  ```

---

## 📌 What is Conditional Rendering? (with example)

Conditional Rendering means rendering UI elements **based on conditions**.

**Example:**

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Log In</h1>}
    </div>
  );
}
```

---

## 📌 What is CORS?

CORS (**Cross-Origin Resource Sharing**) is a security feature in browsers that restricts requests from one domain to another unless the server explicitly allows it.

**Example:**
If your frontend runs on `http://localhost:3000` and you fetch data from `https://api.example.com`, the API must allow cross-origin requests.

---

## 📌 What is async and await?

* **`async`** → Declares an asynchronous function that returns a Promise.
* **`await`** → Pauses execution until the Promise resolves.

**Example:**

```js
async function fetchData() {
  let response = await fetch("https://api.example.com/data");
  let json = await response.json();
  console.log(json);
}
fetchData();
```

---

## 📌 What is the use of `const json = await data.json();` in getRestaurants()?

When fetching data with `fetch()`, the response is a **ReadableStream**. The line:

```js
const json = await data.json();
```

* Converts the response body into a **JavaScript object** (JSON format).
* Makes the data usable inside the React component.

**Example:**

```js
const getRestaurants = async () => {
  const data = await fetch("https://api.example.com/restaurants");
  const json = await data.json(); // Converts to JS object
  console.log(json);
};
```

---

# 📖 Summary

* **Microservices** → Small, independent services.
* **Monolith** → Single large application.
* **Difference** → Microservices are scalable and independent; Monoliths are tightly coupled.
* **useEffect Hook** → Runs side effects like API calls.
* **Optional Chaining** → Safe access of nested properties.
* **Shimmer UI** → Placeholder loading effect.
* **Expression vs Statement** → Expression gives a value, Statement performs an action.
* **Conditional Rendering** → Render UI based on conditions.
* **CORS** → Security rule for cross-origin requests.
* **async/await** → Handle asynchronous operations.
* **`await data.json()`** → Converts API response into usable JS object.
