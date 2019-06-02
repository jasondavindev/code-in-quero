'use strict';

module.exports = function(MediaOfertas) {
	MediaOfertas.calculo = function(cidade, range_idade, nivel, callback) {
		MediaOfertas.app.database.query(
			`
      SELECT
        avg(mensalidade_oferecida) media
      FROM
        MediaOfertas
      WHERE
        cidade = '${cidade}'
        AND range_idade = '${range_idade}'
        AND nivel = '${nivel}'
    `,
			function(error, result) {
				if (error) {
					return callback(error);
				}

				console.log(result[0].media);

				callback(null, { result });
			}
		);
	};
};
