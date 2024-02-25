import {Dimensions, PixelRatio} from 'react-native';

const Size = 375;
const {width} = Dimensions.get('window');
const scale = width / Size;

const fontCache = {};

/**
 * Normalize a given size based on the screen width and a reference size.
 *
 * @param {number} size - The original size to be normalized.
 * @returns {number} - The normalized size adjusted for the screen width.
 */

export function sizeNormalize(size) {
  if (size in fontCache) {
    return fontCache[size];
  }

  const newSize = size * scale;
  fontCache[size] = Math.round(PixelRatio.roundToNearestPixel(newSize));
  return fontCache[size];
}
