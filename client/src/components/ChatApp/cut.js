chatKitManager = () => {
  const instanceLocator = process.env.REACT_APP_INSTANCE_LOCATOR;
  const tokenUrl = process.env.REACT_APP_TOKEN_PROVIDER_URL;

  // Create chatManager using USERNAME
  const chatManager = new ChatManager({
    instanceLocator,
    userId: this.state.username,
    tokenProvider: new TokenProvider({
      url: tokenUrl
    })
  }) // end chatManager
  // handles all the connections
  chatManager.connect()
    .then(currentUser => {
      this.currentUser = currentUser; // hook itself
      this.setState({ currentUser: this.currentUser });
      this.getRooms();
    })
    .catch(err => console.log("ChatManager Connection Error: ", err));
  // -------------END CHATKIT------------------------------------
}


chatKitAPI = () => {
  // FIND USER, ELSE create NEW user.
  console.log("API CALL using ", this.state.username)
  axios.post("/api/chat-user", { username: this.state.username })
    .then(response => {
      console.log("API CALL RESPONSE:\n", response.data.status);
      // if (response.status === 404) {
      //   console.log("no user!")

      //   // CREATE a new user
      //   const newUser = { id: this.state.username }
      //   axios.post("/api/create-chat-user", newUser)
      //     .then(res => console.log(res))
      // } else {
      //   console.log("USER FOUND!:\n", response.data)
      // }
    })
  // .then(() => this.chatKit())
}




// create user if does not exist
if (res.data.status === 404) {
  const newUser = {
    username: this.state.username,
    name: this.state.username
  }
  axios.post("/api/create-chat-user", { username: this.state.username }, (request, result) => {

  })
}