var note = require('./controllers/note')

exports.route = function (app) {
	app.get('/notes', note.index);
};