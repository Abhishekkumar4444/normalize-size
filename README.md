# normalize-size

A versatile utility package for React Native developers, designed to make styling elements responsive by dynamically adjusting properties such as font sizes, padding, margin, and width based on the screen width and a reference size. This module ensures a consistent and visually appealing layout across diverse devices and screen sizes.

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


# // Example: Normalize a font size based on a reference size of 375 and the device's screen width
const normalizedFontSize = sizeNormalize(20);

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0.txt)