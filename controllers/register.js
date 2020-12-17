const handleRegister = (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json('Email required');
  }

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
