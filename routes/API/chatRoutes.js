const Chatkit = require('@pusher/chatkit-server');
var db = require("../../models");
const bodyParser = require('body-parser');

module.exports = function (app) {

    // GET USER INFO
    app.get('/api/chat-user', passport.authenticate('jwt', { session: false }), (request, result) => {
        // stuff here
        chatkit.getUser({
            id: request.body.id,
        })
            .then(user => {
                console.log('got a user', user);
                result.json(user)
            })
            .catch(err => console.error(err))
    });

    // CREATE USER
    app.post('/api/create-chat-user', passport.authenticate('jwt', { session: false }), (request, result) => {
        const id = request.body.id;
        const name = request.body.name;
        chatkit.createUser({
            id,
            name,
          })
            .then((response) => {
              console.log('User created successfully');
              result.json(response)
            }).catch((err) => {
              console.log(err);
            });
    });

} // END EXPORT
