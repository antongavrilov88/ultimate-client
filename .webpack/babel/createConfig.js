/**
 * Создание конфигурации для babel в зависимости от типа файла и окружения
 * @param {'DEV' | 'PROD'}mode Текущее окружение
 * @param {'REACT' | 'BASE'}type Тип файла (С JSX или обычный JavaScript)
 */
function createConfig(mode, type) {
  return function (api) {
    api.cache(true);
    // Presets

    const presets = [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage',
          corejs: '3',
          modules: false,
        },
      ],
    ];

    if (type === 'REACT') {
      // noinspection JSCheckFunctionSignatures
      presets.push('@babel/preset-react');
    }

    // Plugins

    const plugins = [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: false,
          helpers: true,
          regenerator: true,
          useESModules: false,
        },
      ],
      'babel-plugin-styled-components',
      ['babel-plugin-react-remove-properties', { properties: ['data-testid'] }],
    ];

    if (mode === 'DEV') {
      const HMRPlugin = require.resolve('react-refresh/babel');
      // noinspection JSCheckFunctionSignatures
      plugins.push(HMRPlugin);
    }

    return { presets, plugins, comments: false, compact: true };
  };
}

module.exports = { createConfig };
