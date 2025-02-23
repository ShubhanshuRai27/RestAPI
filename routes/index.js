const usersRoute = require('./users.routes');

exports.initRoute= async(app) => {
    app.use('/users',usersRoute);
}