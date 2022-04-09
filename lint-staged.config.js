const { ESLint } = require('eslint');

/**
 * Удаление из проверки lint-staged файлов, которые находятся в .eslintignore
 * @param {string[]}files имена файлов, находящиеся в stage гита
 */
const getFilesToLint = async (files) => {
  const eslint = new ESLint();
  const isIgnored = await Promise.all(files.map((file) => eslint.isPathIgnored(file)));
  return files.filter((_, index) => !isIgnored[index]);
};

module.exports = {
  'src/**/*.(js|jsx|ts|tsx)': async (filenames) => {
    const filesToLint = await getFilesToLint(filenames);
    return [
      `eslint ${filesToLint.join(' ')} --rule "{no-console: 2, no-alert:2, no-debugger: 2}"`,
      `prettier ${filenames.join(' ')} -write`,
      'yarn test',
    ];
  },
};
