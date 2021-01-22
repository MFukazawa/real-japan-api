const handleRegister = (req, res, db, bcrypt) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json('Incorrect form submission')
  }

  async function hashPassword(password) {
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds)
    return hash
  }

  const hashedPassword = hashPassword(password);

  db.transaction(trx => {
    trx.insert({
      hash: hashedPassword,
      email: email
    })
    .into('login')
    .returning('email')
    .then(loginEmail => {
      return trx('users')
        .returning('*')
        .insert({
          email: loginEmail[0],
          joined: new Date()
        })
        .then(user => {
          res.json(user[0])
        })
    })
    .then(trx.commit)
    .catch(trx.rollback)
  })
  .catch(err => res.status(400).json(err))

  // Users Table
  // generate ID here ???
  // insert ID + email

  // Search History Table
  /*
    UserID
    Time_searched ← 検索した日付・時間 - Date
    Prefecture
    City
    Area
    Date from ← 将来、APIの年数が増えた時に使う想定
    Date to ← 将来、APIの年数が増えた時に使う想定
    Price_entered ← 入力した金額
    Area_entered ← 入力した面積
  */
};

module.exports = {
  handleRegister: handleRegister
}
