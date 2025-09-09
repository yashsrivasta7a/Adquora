# UI Components

This folder contains reusable UI components extracted from the landing page.

## Components

### SplitText (`split-text.jsx`)
Animates text by splitting it into individual characters with staggered animations.
- **Props**: `text`, `className`, `delay`

### TextRoll (`text-roll.jsx`)
Creates a rolling text effect on hover with smooth transitions.
- **Props**: `children`, `className`, `center`, `stagger`

### NavigationMenu (`navigation-menu.jsx`)
Full-screen navigation overlay with animated menu items.
- **Props**: `isOpen`, `onClose`

### GridBackground (`grid-background.jsx`)
Animated grid background with customizable opacity.
- **Props**: `className`, `opacity`

### GlowText (`glow-text.jsx`)
Text component with customizable glow effect.
- **Props**: `children`, `className`, `glowColor`

### RadialGradient (`radial-gradient.jsx`)
Configurable radial gradient overlay component.
- **Props**: `className`, `colors`, `stops`

### Button (`button.jsx`)
Reusable button component with multiple variants and sizes.
- **Props**: `children`, `onClick`, `variant`, `size`, `className`
- **Variants**: `default`, `secondary`, `outline`
- **Sizes**: `default`, `sm`, `lg`

## Usage

```jsx
import { SplitText, Button, NavigationMenu } from './ui';

// Example usage
<SplitText text="Hello World" className="text-4xl" delay={100} />
<Button variant="secondary" onClick={handleClick}>Click me</Button>
```
