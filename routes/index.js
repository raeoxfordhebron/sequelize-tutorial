const companyController = require('../controllers').company;
const Company = require('../models/company')
const Employee = require('../models')

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(201).send({
        message: "Connected"
    }))
    // Create Route
    app.post('/api/company', companyController.create)
}
