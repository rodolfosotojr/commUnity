import axios from "axios";

// Export an objects containing methods to call APIs
// Import into page as: import API from "../utils/API";

export default {
  getAllProfiles: function() {
    return axios.get("/api/getProfiles");
  },
  getProfile: function(profileId) {
    return axios.get("/api/getProfile/" + profileId);
  },

  getCookie: function() {
    return axios.post("/auth/local/protected")
  },

  getChatRooms: function() {
    return axios.get("/api/getrooms")
  },

  getChatUser(username) {
    return axios.post("/api/chat-user", { username: username })
  },

  createChatUser(newUser) {
    return axios.post("/api/create-chat-user", newUser)
  }









}; // end export
