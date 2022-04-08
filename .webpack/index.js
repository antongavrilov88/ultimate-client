const { NODE_ENV, IS_PROD, IS_ANALYZE, ANALYZE, SERVER_API_URL } = require('./utils/constants');
const { envs } = require('./utils/envs');
const { errors } = require('./utils/errors');

if (SERVER_API_URL === undefined) errors.throwAPIError();
if (!envs.includes(NODE_ENV)) errors.throwENVError(NODE_ENV);

const config = IS_PROD && IS_ANALYZE ? ANALYZE : NODE_ENV;
module.exports = require(`./configs/${config}`);
