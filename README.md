# normalize-size

A versatile utility package for React and React Native developers, designed to make styling elements responsive by dynamically adjusting properties such as font sizes, padding, margin, and width based on the screen width and a reference size. This module ensures a consistent and visually appealing layout across diverse devices and screen sizes.

[![npm](https://img.shields.io/npm/v/normalize-size)](https://www.npmjs.com/package/normalize-size)    [![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)](https://nodejs.org/en/)

## Installation

Using npm:

```bash
npm install normalize-size

```
Using yarn:

```bash
yarn add normalize-size

```

## Usage

```javascript
import { sizeNormalize } from 'normalize-size';


// Example: Normalize a font size based on a reference size of 375 and the device's screen width. 
// To make the width and fontSize responsive for all device screens using sizeNormalize


<Text style={[{ width: sizeNormalize(50), fontSize: sizeNormalize(18) }]}>
  Normalize-size
</Text>


```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0.txt)