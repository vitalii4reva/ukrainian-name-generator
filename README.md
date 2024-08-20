# Ukrainian Name Generator

A simple Node.js library for generating unique names based on Ukrainian cities and regions.

## Installation

```bash
npm install ukrainian-name-generator
```

## Usage

```typescript
import { generateName, generateRegionalName } from 'ukrainian-name-generator';

console.log(generateName());  // e.g., "Odesa3f"
console.log(generateName('Cool', 'App'));  // e.g., "CoolKyivApp7b"
console.log(generateRegionalName());  // e.g., "Lviv2a"
console.log(generateRegionalName('Awesome', 'Project'));  // e.g., "AwesomeKharkivProject9c"
```