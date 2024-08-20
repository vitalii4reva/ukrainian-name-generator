import { randomBytes } from 'crypto';
import { ukrainianCities } from './ukrainianCities';

function getRandomElement<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export function generateName(prefix: string = '', suffix: string = ''): string {
  const city = getRandomElement(ukrainianCities);
  const randomSuffix = randomBytes(2).toString('hex');
  return `${prefix}${city.name}${suffix}${randomSuffix}`;
}

export function generateRegionalName(prefix: string = '', suffix: string = ''): string {
  const city = getRandomElement(ukrainianCities);
  const randomSuffix = randomBytes(2).toString('hex');
  return `${prefix}${city.region.replace(' Oblast', '')}${suffix}${randomSuffix}`;
}