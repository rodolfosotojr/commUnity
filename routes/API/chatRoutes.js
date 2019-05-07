const Chatkit = require('@pusher/chatkit-server');
var db = require("../../models");
const bodyParser = require('body-parser');

module.exports = function (app) {

  // GET USER INFO
  app.post('/api/chat-user', (request, result) => {
    // INIT ChatKit
    const chatkit = new Chatkit.default({
      instanceLocator: process.env.REACT_APP_INSTANCE_LOCATOR,
      key: process.env.REACT_APP_SECRET_KEY,
    });
    // console.log('REACT_APP_INSTANCE_LOCATOR\n', process.env.REACT_APP_INSTANCE_LOCATOR)
    // console.log('REACT_APP_SECRET_KEY\n', process.env.REACT_APP_SECRET_KEY)

    // stuff here
    chatkit.getUser({
      id: request.body.username,
    })
      .then(user => {
        // console.log('got a user', user);
        result.json(user)
      })
      .catch(err => result.json(err))
  });

  // CREATE USER
  app.post('/api/create-chat-user', (request, result) => {
    const chatkit = new Chatkit.default({
      instanceLocator: process.env.REACT_APP_INSTANCE_LOCATOR,
      key: process.env.REACT_APP_SECRET_KEY,
    });
    
    const id = request.body.username;
    const name = request.body.name;
    chatkit.createUser({
      id,
      name,
    })
      .then((response) => {
        // console.log('User created successfully');
        result.json(response)
      }).catch((err) => {
        console.log(err);
      });
  });

  // GET ROOM
  app.get('/api/findroom', (req, res) => {
    const roomId = req.body.roomId;
    // console.log('RoomID: ', req.body)

    // INIT ChatKit
    const chatkit = new Chatkit.default({
      instanceLocator: process.env.REACT_APP_INSTANCE_LOCATOR,
      key: process.env.REACT_APP_SECRET_KEY,
    });

    chatkit.getRoom({
      roomId: roomId
    })
      .then(room => res.json(room))
      .catch(err => res.json(err))

  })

} // END EXPORT
