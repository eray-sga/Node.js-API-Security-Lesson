const Page = require("../models/Page");

exports.createPage = async (req, res) => {
    try {
      const page = await Page.create(req.body);
  
      res.status(201).json({
        status: "success",
        page,
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
        error,
      });
    }
  };