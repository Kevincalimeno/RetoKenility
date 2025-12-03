module.exports = {
  randomEmail() {
    return `user_${Date.now()}_${Math.floor(Math.random() * 1000)}@mail.com`;
  },

  randomPassword() {
    return `Pw${Math.random().toString(36).slice(-8)}!`;
  },

  randomName() {
    return `User${Math.floor(Math.random() * 10000)}`;
  },

  randomSubject() {
  return `Subject ${Math.floor(Math.random() * 10000)}`;
  },

  randomMessage() {
    return `Message body ${Math.floor(Math.random() * 10000)}`;
  }
};
