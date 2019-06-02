const storage = {
	save(nome, valor) {
		window.localStorage.setItem(nome, valor);
	},

	get(nome) {
		return window.localStorage.getItem(nome);
	},

	delete(nome) {
		return window.localStorage.removeItem(nome);
	},
};

module.exports = storage;
