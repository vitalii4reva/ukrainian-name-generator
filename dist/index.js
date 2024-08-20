"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateName = generateName;
exports.generateRegionalName = generateRegionalName;
const crypto_1 = require("crypto");
const ukrainianCities_1 = require("./ukrainianCities");
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
function generateName(prefix = '', suffix = '') {
    const city = getRandomElement(ukrainianCities_1.ukrainianCities);
    const randomSuffix = (0, crypto_1.randomBytes)(2).toString('hex');
    return `${prefix}${city.name}${suffix}${randomSuffix}`;
}
function generateRegionalName(prefix = '', suffix = '') {
    const city = getRandomElement(ukrainianCities_1.ukrainianCities);
    const randomSuffix = (0, crypto_1.randomBytes)(2).toString('hex');
    return `${prefix}${city.region.replace(' Oblast', '')}${suffix}${randomSuffix}`;
}
