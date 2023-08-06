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

// Middleware to extract the token from the request header
const extractToken = (req, res, next) => {
  // Get the Authorization header from the request
  const authHeader = req.headers["authorization"];
  // Check if the header is present and starts with "Bearer "
  if (authHeader && authHeader.startsWith("Bearer ")) {
    // Extract the token from the header
    const token = authHeader.split(" ")[1];
    // Attach the token to the request object
    req.token = token;
  } else {
    // If the header is missing or invalid, set the token as null
    req.token = null;
  }
  // Move to the next middleware or route handler
  next();
};

// Use the extractToken middleware for all routes
router.use(extractToken);

router.post("/register", userRegister);
router.post("/login", userLogin);
router.post("/products", getProducts);
router.get("/searchByTitle/:keyword", searchByKeyword);
router.post("/emailVerification", emailVerification);
router.post("/addToCart", addToCart);
router.post("/getProductsInCart", getProductsInCart);
router.post("/removeFromCart", removeFromCart);
module.exports = router;
