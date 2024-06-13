const movieController = require('../controllers/movies.controller');
const {authenticate }= require('../config/jwt.config');

module.exports = (app) => {
    app.get('/api/movies', authenticate, movieController.findAll);
    app.get('/api/movies/:id', authenticate, movieController.findOne);
    app.post('/api/movies', authenticate, movieController.create);
};