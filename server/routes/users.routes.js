const userController = require("../controllers/user.controller");

module.exports =app =>{
    app.post('/api/register',userController.register)
    app.post('/api/login',userController.login)
    app.post('/api/logout',userController.logout)


}