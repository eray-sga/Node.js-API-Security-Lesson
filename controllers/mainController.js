exports.Index = (req, res) => {
    res.status(200).json({
        status: true, 
        message: "index page",
        session: req.session.userID
    })
  };

  exports.registerPage = (req, res) => {
    res.status(200).json({
        status: true,
        message: "register page"
    })
  };
  
  exports.loginPage = (req, res) => {
    res.status(200).json({
        status: true,
        message: "login page"
    })
  };