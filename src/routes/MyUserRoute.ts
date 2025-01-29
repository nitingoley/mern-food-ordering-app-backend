import express from "express";
const router = express.Router();
import MyUserController from "../controller/userController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import {
  handleValidationErrors,
  validationMyUserRequest,
} from "../middleware/validation";

// get user's api 

router.get("/" , jwtCheck, jwtParse, MyUserController.getCurrentUser)

//   controller function to the POST route
router.post("/", jwtCheck, MyUserController.createCurrentUser);


// update user info PUT route 
router.put(
  "/",
  jwtCheck,
  jwtParse,
  validationMyUserRequest,
  handleValidationErrors,
  MyUserController.updateCurrentUser
);

export default router;
