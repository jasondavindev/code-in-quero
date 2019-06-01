'use strict';

module.exports = function createErrorLogger(options) {
	return function logError(err, req, res, next) {
		if (process.env.NODE_ENV === 'production') {
			delete err['stack'];
			err['message'] = err['details'].messages;
			delete err['details'];
		}
		next(err);
	};
};
