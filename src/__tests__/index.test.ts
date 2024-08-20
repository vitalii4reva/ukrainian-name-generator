import { generateName, generateRegionalName } from '../index';

describe('ukrainian-name-generator', () => {
  test('generateName returns a string', () => {
    expect(typeof generateName()).toBe('string');
  });

  test('generateName with prefix and suffix', () => {
    const name = generateName('Cool', 'App');
    expect(name.startsWith('Cool')).toBe(true);
    expect(name.includes('App')).toBe(true);
  });

  test('generateName includes a city name', () => {
    const name = generateName();
    const includesCity = ['Kyiv', 'Lviv', 'Odesa', 'Kharkiv', 'Dnipro', 'Zaporizhzhia', 'Vinnytsia', 'Khmelnytskyi', 'Chernivtsi', 'Ternopil'].some(city => name.includes(city));
    expect(includesCity).toBe(true);
  });

  test('generateRegionalName returns a string', () => {
    expect(typeof generateRegionalName()).toBe('string');
  });

  test('generateRegionalName with prefix and suffix', () => {
    const name = generateRegionalName('Awesome', 'Project');
    expect(name.startsWith('Awesome')).toBe(true);
    expect(name.includes('Project')).toBe(true);
  });

  test('generateRegionalName includes a region name', () => {
    const name = generateRegionalName();
    const includesRegion = ['Kyiv', 'Lviv', 'Odesa', 'Kharkiv', 'Dnipropetrovsk', 'Zaporizhzhia', 'Vinnytsia', 'Khmelnytskyi', 'Chernivtsi', 'Ternopil'].some(region => name.includes(region));
    expect(includesRegion).toBe(true);
  });
});
