import express from "express";
import Hotel from "../models/Hotel.js";
import { countByType, countBycity, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utilies/verifyTokens.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//GET
router.get("/find/:id",getHotel);

//GET ALL
router.get("/", getHotels);

router.get("/countBycity", countBycity);

router.get("/countBytype", countByType);

router.get("/room/:id", getHotelRooms);

export default router;
