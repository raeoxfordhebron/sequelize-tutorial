const app = require('../app')

const companyController = require('../controllers').company

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Todos API!',
    })
)}

// Start - Company create routes for creating new record
app.post('/api/company', companyController.create)
// End - Company create routes for creating new record