import { jwtParse } from './../middleware/auth';
import express from "express";
import multer from "multer";
import MyRestaurantController from "../controller/MyRestaurantController";
import { jwtCheck } from "../middleware/auth";
import { handleValidationErrors, validateMyRestaurantRequest } from '../middleware/validation';
const router = express.Router();

// create storage
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // = 5mb
  },
});

// endpoint -- api/my/restaurant
router.post(
  "/",
  jwtCheck,
  jwtParse,
  handleValidationErrors,
  validateMyRestaurantRequest,
  upload.single("imageFile"),
  MyRestaurantController.createRestaurant
);

export default router;
