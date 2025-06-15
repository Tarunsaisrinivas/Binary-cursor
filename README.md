# Binary Cursor - React & Next.js Component

A customizable cursor effect that emits binary particles (0s and 1s) when moving, compatible with both React and Next.js applications.

## 🚀 Installation

```bash
npm install binary-cursor
# or
yarn add binary-cursor
# or
pnpm add binary-cursor

## 🧩 Usage

### For React Applications

```jsx
import BinaryCursor from 'binary-cursor';

function App() {
  return (
    <div>
      {/* Your app content */}
      <BinaryCursor />
    </div>
  );
}
### For Next.js Applications

Since this is a client-side component, you'll need to either:

- Use it in client components only, or
- Dynamically import it with SSR disabled

**Option 1: In a Client Component**

```jsx
'use client';
import BinaryCursor from 'binary-cursor';

export default function HomePage() {
  return (
    <main>
      {/* Your content */}
      <BinaryCursor />
    </main>
  );
}
**Option 2: Dynamic Import (Recommended for Next.js)**

```jsx
import dynamic from 'next/dynamic';

const BinaryCursor = dynamic(
  () => import('binary-cursor'),
  { ssr: false }
);

export default function HomePage() {
  return (
    <main>
      {/* Your content */}
      <BinaryCursor />
    </main>
  );
}


## ⚙️ Props Configuration

| Prop                | Type   | Default   | Description                          |
| ------------------- | ------ | --------- | ---------------------------------- |
| `color`             | string | "#12E193" | Particle color (HEX, RGB, or name) |
| `size`              | number | 13        | Font size in pixels                 |
| `count`             | number | 2         | Particles emitted per frame         |
| `spread`            | number | 2         | Particle dispersion radius          |
| `duration`          | number | 1100      | Particle lifespan in ms             |
| `frequency`         | number | 80        | Emission delay in ms                |
| `movementThreshold` | number | 5         | Minimum movement to trigger         |


## 🔬 Advanced Example

```jsx
<BinaryCursor
  color="rgba(0, 255, 255, 0.8)"
  size={18}
  count={4}
  spread={2.5}
  duration={2000}
  frequency={40}
  movementThreshold={10}
/>


## ⚡ Performance Notes

- Uses `requestAnimationFrame` for smooth animations
- Automatically limits particle count (max 100)
- Cleanly removes event listeners on unmount
- Optimized with `will-change` and CSS transforms


## 🧯 Troubleshooting

- **Issue: Cursor not appearing in Next.js**  
  _Solution:_ Ensure you're using the `'use client'` directive or dynamic imports.

- **Issue: Performance problems**  
  _Solution:_ Reduce `count` or increase `frequency` values.

- **Issue: Particles not showing**  
  _Solution:_ Check if your page has `overflow: hidden` on `body` or `html`.

## 🪪 License

MIT Licensed — Free for personal and commercial use.

## 👨‍💻 Author

Made with ❤️ by Tarun Sai Srinivas

[LinkedIn](https://linkedin.com/in/tarun-sai-srinivas) | [GitHub](https://github.com/tarunsaisrinivas)
