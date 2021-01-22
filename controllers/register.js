const handleRegister = (req, res) => {
  const { email, password } = req.body;

  const usersTable = {
    users: [
      {
        id: '123',
        email: 'abc@gmail.com'
      },
      {
        id: '456',
        email: 'def@gmail.com'
      }
    ]
  }

  if (!email || !password) {
    return res.status(400).json('Email and password required');
  };

  usersTable.users.push({
    id: '1',
    email: email,
    password: password
  });

  // console.log(usersTable);

  res.json(usersTable.users[usersTable.users.length - 1]);

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
