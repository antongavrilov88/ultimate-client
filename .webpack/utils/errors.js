/**
 * Выбрасывание исключения
 * @param {string} text Текст ошибки
 */
const err = (text) => {
  throw new Error(text);
};

const throwAPIError = () => {
  err('SERVER_API_URL not defined. Please, check .env-example file for more information');
};

/**
 *
 * @param {string} env Текущее окружение
 */
const throwENVError = (env) => {
  err(`Неизвестное окружение: ${env}. Пожалуйста, проверьте параметры запуска`);
};

const errors = { throwAPIError, throwENVError };

module.exports = { errors };
