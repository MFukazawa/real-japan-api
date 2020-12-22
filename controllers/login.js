const handleLogin = (req, res, bcrypt) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json('Login incorrect')
  }

  res.json('this is login')
}

module.exports = {
  handleLogin: handleLogin
}