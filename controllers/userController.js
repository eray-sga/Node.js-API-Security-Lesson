const { exit, nextTick } = require("process");
const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

     res.status(201).json({
      status: true,
      message: "registered successfully",
      user
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    await User.findOne({ email }, (err, user) => {
      if (user) {
        req.session.userID = user._id;
        res.status(200).json({
          status: true,
          message: "login success",
        });
      }
    });
  } catch (error) {
    
  }
};

exports.logoutUser = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};

exports.getDashboardPage = async (req, res) => {
  const user = await User.findOne({ _id: req.session.userID });
   const role = user.role
  if(role==="admin"){
      pages = "sayfa ekle: /pages"
  } else {
      pages = "sayfa eklemek için admin olmalısın"
  }
  res.status(200).json({
    status: true,
    message: "paneldesin",
    info: pages
  });
};


exports.getProfile = async (req, res) => {
  try {
    const id = req.session.userID
    if(id === req.params.id){
      const user = await User.findById(req.params.id)
    res.status(200).json({
      status: true,
      message: "user info",
      user
    })
    } else{
      res.status(200).json({
        status: false,
        message: "erişim yok",
      })
    }
    

  } catch(error){
    res.status(200).json({
      status: false,
      message: "fail"
    })
  }
};