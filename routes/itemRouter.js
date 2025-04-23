import express from "express";
import {  getAllItems, saveItem,searchItems  } from "../controllers/itemController.js";
import { getGoodItems } from "../controllers/itemController.js";

const itemRouter  = express.Router();

itemRouter.get("/",getAllItems)
itemRouter.post("/",saveItem)
itemRouter.get("/good",getGoodItems)
itemRouter.get("/:id",searchItems)

export default itemRouter;