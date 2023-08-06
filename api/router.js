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
} = require("./controller");

router.post("/register", userRegister);
router.post("/login", userLogin);
router.post("/products", getProducts);
router.get("/searchByTitle/:keyword", searchByKeyword);
router.post("/emailVerification", emailVerification);
router.post("/addToCart", addToCart);
router.post("/getProductsInCart", getProductsInCart);
router.post("/removeFromCart", removeFromCart);
module.exports = router;
