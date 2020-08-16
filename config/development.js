module.exports = {
  dbConfig: {
    host: 'localhost',
    port: '27017',
    username: 'Pragyanshu',
    password: 'Qwerty123@',
    db: 'test-B-Salons'
  },
  server: {
    port: '3001'
  },
  tokenDetails: {
    saltRounds: 10,
    jwtSecret: '***somerandomcharaters***',
    expiresIn: 86400 * 10
  },
  accessRoles: {
    user: 'USER'
  },
  prefixApiUrl: '/bSalons/api/v1'
};
