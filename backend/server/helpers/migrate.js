'use strict';

const server = require('../server');
const database = require('../database/mysql')(server);
server.database.migrateAll();
process.exit(0);
