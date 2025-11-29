# react-spin-prize

🎡 Modern, fully customizable prize wheel spinner component for React with TypeScript support.

[![npm version](https://img.shields.io/npm/v/react-spin-prize.svg)](https://www.npmjs.com/package/react-spin-prize)
[![npm downloads](https://img.shields.io/npm/dm/react-spin-prize.svg)](https://www.npmjs.com/package/react-spin-prize)
[![license](https://img.shields.io/npm/l/react-spin-prize.svg)](https://github.com/joshuaolusayo/react-spin-prize/blob/main/LICENSE)

## 🎮 Live Demo

- **GitHub Pages**: [https://joshuaolusayo.github.io/react-spin-prize/](https://joshuaolusayo.github.io/react-spin-prize/)
- **CodeSandbox**: [Try it online](https://codesandbox.io/s/react-spin-prize)
- **StackBlitz**: [Edit in browser](https://stackblitz.com/edit/react-spin-prize)

## Features

- 🎨 Fully customizable colors and styles
- 🎯 Precise winner selection
- 🎭 Smooth animations with easing
- 📱 Responsive and accessible
- 🔧 TypeScript support
- 🎪 Modern design with "SPIN" button in the center

## Installation

```bash
npm install react-spin-prize
# or
yarn add react-spin-prize
# or
pnpm add react-spin-prize
```

## Usage

```tsx
import { SpinnerWheel } from 'react-spin-prize';

const items = [
  { id: 1, label: 'Prize 1', color: '#FF6B6B' },
  { id: 2, label: 'Prize 2', color: '#4ECDC4' },
  { id: 3, label: 'Prize 3', color: '#45B7D1' },
  { id: 4, label: 'Prize 4', color: '#FFA07A' },
];

function App() {
  const handleSpinComplete = (item) => {
    console.log('Winner:', item);
  };

  return (
    <SpinnerWheel
      items={items}
      onSpinComplete={handleSpinComplete}
      size={500}
      duration={5000}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `SpinnerWheelItem[]` | required | Array of items to display on the wheel |
| `onSpinComplete` | `(item: SpinnerWheelItem) => void` | - | Callback when spin completes |
| `onButtonClick` | `() => void \| Promise<void>` | - | Callback when center button is clicked |
| `spinning` | `boolean` | - | External control of spinning state |
| `duration` | `number` | 5000 | Duration of spin animation in ms |
| `size` | `number` | 500 | Size of the wheel in pixels |
| `fontSize` | `number` | 16 | Font size for item labels |
| `borderWidth` | `number` | 8 | Width of the outer border |
| `borderColor` | `string` | '#333' | Color of the border |
| `buttonText` | `string` | 'SPIN' | Text on the center button |
| `buttonColor` | `string` | '#333' | Background color of the button |
| `buttonTextColor` | `string` | '#fff' | Text color of the button |
| `disabled` | `boolean` | false | Disable the spin button |
| `winningIndex` | `number` | - | Force a specific winner (for testing) |
| `autoSpinTrigger` | `string \| number \| boolean \| null` | - | Change this value to trigger a programmatic spin |

## SpinnerWheelItem

```typescript
interface SpinnerWheelItem {
  id: string | number;
  label: string;
  color?: string;        // Background color of the segment
  textColor?: string;    // Text color (defaults to white)
}
```

## Advanced Usage

### Customization Examples

```tsx
// Custom colors and icon
<SpinnerWheel
  items={items}
  buttonColor="#FF6B6B"
  buttonTextColor="#FFFFFF"
  buttonBorderColor="#FFD700"
  buttonBorderWidth={6}
  borderColor="#4ECDC4"
  buttonIcon={<span style={{ fontSize: "48px" }}>🎰</span>}
/>

// Custom size
<SpinnerWheel
  items={items}
  size={600}
  buttonSize={100}
  duration={8000}
/>

// With button click callback (e.g., for API calls before spinning)
<SpinnerWheel
  items={items}
  onButtonClick={async () => {
    // Make API call or perform any action when button is clicked
    await fetchSpinData();
  }}
  onSpinComplete={(item) => {
    console.log('Winner:', item);
  }}
/>
```

## License

MIT
