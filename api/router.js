const router = require("express").Router();
const {
  userRegister,
  userLogin,
  getProducts,
  searchByKeyword,
  emailVerification,
  addToCart,
  getProductsInCart,
  removeFromCart,
  placeOrder,
} = require("./controller");

// Middleware to extract the token from the request header
const extractToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];
    req.token = token;
  } else {
    req.token = null;
  }
  next();
};

router.use(extractToken);

router.post("/register", userRegister);
router.post("/login", userLogin);
router.post("/products", getProducts);
router.get("/searchByTitle/:keyword", searchByKeyword);
router.post("/emailVerification", emailVerification);
router.post("/addToCart", addToCart);
router.post("/getProductsInCart", getProductsInCart);
router.post("/removeFromCart", removeFromCart);
router.post("/placeOrder", placeOrder);
module.exports = router;
