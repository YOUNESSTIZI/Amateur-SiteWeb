const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  console.log("middlware : " + req.body);
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId){

      throw ' User ID non valable !' ;
    }else{
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({error:error | 'Requete non Authentifié!' });
  }
};
