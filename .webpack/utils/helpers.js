const path = require('path');
const { PROJECT_DIR } = require('./constants');

/**
 * Базовая функция получения пути до файла
 * @param {string } filename Имя файла
 * @param {string} [pathToDir] Путь до папки с файлом
 */
const getFile = (filename, pathToDir) => {
  if (pathToDir === undefined) return `./${filename}`;
  return path.resolve(pathToDir, filename);
};

/**
 * Получение пути до файла index.html
 * @param {string} [pathToDir] Путь до папки с файлом
 */
const getIndexHTML = (pathToDir) => {
  return getFile('index.html', pathToDir);
};

/**
 * Получение пути до файла index.ts
 * @param {string} [pathToDir] Путь до папки с файлом
 */
const getIndexTS = (pathToDir) => {
  return getFile('index.ts', pathToDir);
};

/**
 * Получение пути до файла tsconfig.json
 */
const getTSConfig = () => getFile('tsconfig.json', PROJECT_DIR);

module.exports = { getIndexHTML, getIndexTS, getTSConfig };
