const handleSignIn = (req, res, bcrypt) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json('Login incorrect')
  }
}

module.exports = {
  handleSignIn: handleSignIn
}