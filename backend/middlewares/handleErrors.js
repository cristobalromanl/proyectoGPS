const handleErrors = (error, req, res, next) => {
    if (error) {
      return res.status(500).json({
        message: error.message
      });
    }
    next();
  }
  
  module.exports = handleErrors;