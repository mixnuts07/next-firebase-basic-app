const { initializeApp } = require("firebase-admin/app");

const myRefreshToken = "..."; // Get refresh token from OAuth2 flow

initializeApp({
  //   credential: refreshToken(myRefreshToken),
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
});
