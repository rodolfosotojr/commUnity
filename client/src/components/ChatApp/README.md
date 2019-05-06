# ChatApp using Pusher ChatKit API

## To Dos
* **DONE** Autoscroll not working. Need to style in Bootstrap.

## CLIENT
### Connecting User
1. Init Chat Manager
2. 


## SERVER
### Check if User exists before creating a new user
```
chatkit.getUser({
  id: 'callum',
})
  .then(user => console.log('got a user', user))
  .catch(err => console.error(err))
```

### Creating a User
```
chatkit.createUser({
  id: 'userId',
  name: 'Some Name',
})
  .then(() => {
    console.log('User created successfully');
  }).catch((err) => {
    console.log(err);
  });
```

Response:
```
{
  "id": "userId",
  "name": "user",
  "created_at": "2017-03-23T11:36:42Z",
  "updated_at": "2017-03-23T11:36:42Z"
}
```

### Authenticating User
```
// Example using Express

app.post('/auth', (req, res) => {
  const authData = chatkit.authenticate({
    userId: req.query.user_id
  });

  res.status(authData.status)
     .send(authData.body);
})
```

### Create Room
```
chatkit.createRoom({
  creatorId: 'userId',
  name: 'my room',
  isPrivate: false,
  userIds: [], // Attach only 1 for 1-to-1 chat
  customData: { foo: 42 },
})
  .then(() => {
    console.log('Room created successfully');
  }).catch((err) => {
    console.log(err);
  });
```

Response:
```
{
  id: '123',
  created_by_id: 'a_user',
  name: 'my room',
  private: false,
  created_at: '2017-11-10T14:57:46Z',
  updated_at: '2017-11-10T14:57:46Z',
  member_user_ids: [ 'some_other_user', 'a_user' ],
  custom_data: { foo: 42 },
}
```