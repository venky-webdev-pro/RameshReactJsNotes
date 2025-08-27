# CSS & Tailwind Notes

## 📌 Explore all the ways of writing CSS

### 1. Inline CSS

```jsx
<h1 style={{ color: "blue", fontSize: "20px" }}>Hello World</h1>
```

### 2. Internal CSS (inside a component file using `<style>`)

```jsx
function App() {
  return (
    <>
      <style>
        {`
          h1 {
            color: red;
          }
        `}
      </style>
      <h1>Hello World</h1>
    </>
  );
}
```

### 3. External CSS file

**App.js**

```jsx
import "./App.css";

function App() {
  return <h1 className="title">Hello World</h1>;
}
```

**App.css**

```css
.title {
  color: green;
}
```

### 4. CSS Modules

**App.js**

```jsx
import styles from "./App.module.css";

function App() {
  return <h1 className={styles.title}>Hello World</h1>;
}
```

**App.module.css**

```css
.title {
  color: purple;
}
```

### 5. Styled Components (CSS-in-JS)

```jsx
import styled from "styled-components";

const Title = styled.h1`
  color: orange;
  font-size: 24px;
`;

function App() {
  return <Title>Hello World</Title>;
}
```

### 6. Tailwind CSS (Utility-first framework)

```jsx
function App() {
  return <h1 className="text-blue-500 text-xl">Hello World</h1>;
}
```

---

## 📌 How do we configure Tailwind?

1. Install Tailwind:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

2. Configure **tailwind.config.js**:

```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

3. Import Tailwind in **index.css**:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 📌 Keys in `tailwind.config.js`

* **content** → File paths Tailwind scans for class names.
* **theme** → Default design tokens (colors, spacing, fonts).
* **extend** → Extend/override the default theme.
* **plugins** → Add extra features.

**Example:**

```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#1DA1F2",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
```

---

## 📌 Why do we have `.postcssrc` file?

* PostCSS is a tool that transforms CSS with JavaScript plugins.
* `.postcssrc` configures PostCSS for Tailwind.
* Typical setup:

```json
{
  "plugins": {
    "tailwindcss": {},
    "autoprefixer": {}
  }
}
```

* **Purpose**:

  * `tailwindcss` → Processes Tailwind classes.
  * `autoprefixer` → Adds vendor prefixes for browser compatibility.

---

# 📖 Simple Summary

* CSS can be written as: **Inline, Internal, External, CSS Modules, Styled Components, Tailwind**.
* Tailwind setup requires **tailwind.config.js + index.css imports**.
* `tailwind.config.js` →

  * `content`: scan files
  * `theme`: default styles
  * `extend`: custom styles
  * `plugins`: extra features
* `.postcssrc` → Configures PostCSS with Tailwind + Autoprefixer.
