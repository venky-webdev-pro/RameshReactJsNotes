# React Advanced Concepts

## 📌 How do you create Nested Routes in `react-router-dom`?

Nested routes allow rendering components inside other components using `children` routes.

**Example:**

```jsx
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="stats">Stats</Link> | <Link to="settings">Settings</Link>
      </nav>
      <Outlet /> {/* Nested routes render here */}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="stats" element={<h3>Stats Page</h3>} />
          <Route path="settings" element={<h3>Settings Page</h3>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 📌 `createHashRouter` and `createMemoryRouter`

* **`createHashRouter`** → Uses the URL hash (`#`) portion for routing. Useful for static file hosting where server config isn’t available.

  * Example: `http://example.com/#/dashboard`

* **`createMemoryRouter`** → Keeps navigation history **in memory** (does not read or write to the URL). Useful for tests, React Native, or environments without a browser.

---

## 📌 Order of Lifecycle Method Calls in Class-Based Components

1. **Mounting (when component is created & inserted)**

   * constructor()
   * static getDerivedStateFromProps()
   * render()
   * componentDidMount()

2. **Updating (when props or state change)**

   * static getDerivedStateFromProps()
   * shouldComponentUpdate()
   * render()
   * getSnapshotBeforeUpdate()
   * componentDidUpdate()

3. **Unmounting (when component is removed)**

   * componentWillUnmount()

---

## 📌 Why do we use `componentDidMount`?

* Called **once** after the component is mounted.
* Used for:

  * Fetching API data
  * Setting up subscriptions
  * Manipulating the DOM

**Example:**

```jsx
class MyComponent extends React.Component {
  componentDidMount() {
    console.log("Component mounted!");
    fetch("https://api.example.com/data")
      .then(res => res.json())
      .then(data => console.log(data));
  }
  render() {
    return <h1>Hello</h1>;
  }
}
```

---

## 📌 Why do we use `componentWillUnmount`? (with example)

* Called just before the component is removed.
* Used for **cleanup**: removing event listeners, canceling API calls, clearing timers.

**Example:**

```jsx
class Timer extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => console.log("Tick"), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer); // Cleanup
    console.log("Timer cleared");
  }

  render() {
    return <h1>Running Timer</h1>;
  }
}
```

---

## 📌 Why do we use `super(props)` in constructor?

* In class components, the constructor extends `React.Component`.
* We must call `super(props)` so `this.props` is available inside the constructor.
* Without it, `this.props` will be undefined.

**Example:**

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props); // ✅ Accessible
  }
  render() {
    return <h1>{this.props.name}</h1>;
  }
}
```

---

## 📌 Why can't we have the callback function of `useEffect` async?

* React expects the `useEffect` callback to either return **nothing** or a **cleanup function**.
* If we make it `async`, it returns a **Promise**, not a cleanup function → leading to unintended behavior.

✅ Correct way:

```jsx
useEffect(() => {
  const fetchData = async () => {
    let res = await fetch("https://api.example.com/data");
    let json = await res.json();
    console.log(json);
  };
  fetchData();
}, []);
```

❌ Wrong way:

```jsx
useEffect(async () => {
  const res = await fetch("https://api.example.com/data");
  const json = await res.json();
}, []); // ❌ Returns Promise instead of cleanup
```

---

## 📌 React Class Component Mounting Order (Parent & Children)

When a **Parent component** has multiple **Child components**, React executes lifecycle methods in a predictable order during the **mounting phase**.

### Order of Execution

1. **Parent Constructor**
2. **Parent Render**

   * First Child Constructor
   * First Child Render
   * Second Child Constructor
   * Second Child Render
3. **DOM is updated (in a single batch)**

   * First Child `componentDidMount`
   * Second Child `componentDidMount`
4. **Parent `componentDidMount`**

### Example Code

```jsx
class ChildOne extends React.Component {
  constructor(props) {
    super(props);
    console.log("First Child Constructor");
  }
  render() {
    console.log("First Child Render");
    return <h2>Child One</h2>;
  }
  componentDidMount() {
    console.log("First Child componentDidMount");
  }
}

class ChildTwo extends React.Component {
  constructor(props) {
    super(props);
    console.log("Second Child Constructor");
  }
  render() {
    console.log("Second Child Render");
    return <h2>Child Two</h2>;
  }
  componentDidMount() {
    console.log("Second Child componentDidMount");
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>Parent</h1>
        <ChildOne />
        <ChildTwo />
      </div>
    );
  }
  componentDidMount() {
    console.log("Parent componentDidMount");
  }
}
```

### Console Output

```
Parent Constructor
Parent Render
First Child Constructor
First Child Render
Second Child Constructor
Second Child Render
First Child componentDidMount
Second Child componentDidMount
Parent componentDidMount
```

---

# 📖 Summary

* **Nested Routes** → Use `<Outlet />` to render child routes.
* **createHashRouter** → Uses `#` in URL, good for static hosting.
* **createMemoryRouter** → Stores history in memory, useful in tests.
* **Lifecycle order** → Mounting → Updating → Unmounting.
* **componentDidMount** → Fetch data, setup tasks.
* **componentWillUnmount** → Cleanup like clearing timers.
* **super(props)** → Allows access to `this.props` in constructor.
* **useEffect async issue** → Shouldn’t be async, wrap async calls inside instead.
* **Mounting Order (Parent & Children)** → Parent constructor/render → Children constructor/render → Children didMount → Parent didMount.
