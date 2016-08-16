'use strict';

var path = require('path');

exports.CONFIG_PATH = path.resolve(
  process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'],
  '.config.json'
);
