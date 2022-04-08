const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

/** Переменные окружения */

const DEVELOPMENT = 'development';
const PRODUCTION = 'production';
const ANALYZE = 'analyze';
const NODE_ENV = process.env.NODE_ENV || DEVELOPMENT;
const IS_ANALYZE = process.env.ANALYZE === 'TRUE' || false;
const IS_DEV = NODE_ENV === DEVELOPMENT;
const IS_PROD = NODE_ENV === PRODUCTION;

/** Папки внутри приложения */

const SRC_DEFAULT_DIR = 'src';
const BUILD_DEFAULT_DIR = 'build';
const VENDORS_DEFAULT_DIR = 'node_modules';
const PUBLIC_DEFAULT_DIR = 'public';
const STATIC_DEFAULT_DIR = 'static';

const PROJECT_DIR = process.cwd();
const SOURCE_DIR = path.resolve(PROJECT_DIR, SRC_DEFAULT_DIR);
const BUILD_DIR = path.resolve(PROJECT_DIR, BUILD_DEFAULT_DIR);
const VENDORS_DIR = path.resolve(PROJECT_DIR, VENDORS_DEFAULT_DIR);
const PUBLIC_DIR = path.resolve(PROJECT_DIR, PUBLIC_DEFAULT_DIR);
const STATIC_DIR = path.resolve(PROJECT_DIR, STATIC_DEFAULT_DIR);

/** Сервер разработки */

const DEFAULT_DEV_PORT = 3000;
const DEFAULT_DEV_HOST = 'localhost';

const DEV_SERVER_PORT = process.env.DEV_SERVER_PORT || DEFAULT_DEV_PORT;
const DEV_SERVER_HOST = process.env.DEV_SERVER_HOSTNAME || DEFAULT_DEV_HOST;

const SERVER_API_URL = process.env.SERVER_API_URL;
const SERVER_API_VERSION = process.env.SERVER_API_VERSION;

module.exports = {
  DEVELOPMENT,
  PRODUCTION,
  ANALYZE,
  NODE_ENV,
  IS_DEV,
  IS_PROD,
  IS_ANALYZE,
  DEV_SERVER_HOST,
  DEV_SERVER_PORT,
  PROJECT_DIR,
  SOURCE_DIR,
  BUILD_DIR,
  VENDORS_DIR,
  PUBLIC_DIR,
  STATIC_DIR,
  SERVER_API_URL,
  SERVER_API_VERSION,
};
