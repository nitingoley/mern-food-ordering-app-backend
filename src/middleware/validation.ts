import { Response, Request, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const handleValidationErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
  res.status(400).json({ message: errors.array() });
  return;
  }
  next();
};

export const validationMyUserRequest = [
  body("name").isString().notEmpty().withMessage("Name must be a string"),
  body("addressLine1")
    .isString()
    .notEmpty()
    .withMessage("Address must be a string"),  
  body("city").isString().notEmpty().withMessage("City must be a string"),
  body("country").isString().notEmpty().withMessage("Country must be a string"),
];


export const validateMyRestaurantRequest = [
  body("restaurantName").notEmpty().withMessage("RestaurantName is required"),
  body("city").notEmpty().withMessage("City is required"),
  body("country").notEmpty().withMessage("Country is required"),
  body("deliveryPrice")
    .isFloat({ min: 0 })
    .notEmpty()
    .withMessage("Delivery price must be a number"),
  body("estimatedDeliveryTime")
    .isInt({ min: 0 })
    .notEmpty()
    .withMessage("Estimated time must be a number"),
  body("cuisines")
    .isArray()
    .notEmpty()
    .withMessage("Cuisines must be a array")
    .not()
    .isEmpty()
    .withMessage("Cuisines array cannot be empty"),
    
    body("menuItem")
    .isArray()
    .notEmpty()
    .withMessage("menuItem must be a array"),

    body("menuItem.*name").
    isEmpty()
    .withMessage("MenuItem item is required "),

    body("menuItem.*name").
    isFloat({min:0})
    .withMessage("MenuItem item price is required and must be a positive number"),
];