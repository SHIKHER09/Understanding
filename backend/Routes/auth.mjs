import express from "express";
import { Signup, login, loginwithgoogle } from "../db/auth.mjs";

var router = express.Router();

// Signup
router.post("/signup", Signup);

// login
router.post("/login", login);

// google
router.post("/google", loginwithgoogle);

//TheripistFinder
const psychologists = [
  {
    id: 1,
    name: "Dr. Smith",
    location: "123 main market, Bhopal",
    contact: "123-456-7890",
  },
  {
    id: 2,
    name: "Dr. Johnson",
    location: "456 ISBT St, Bhopal",
    contact: "987-654-3210",
  },
];
export default router;
