import express from "express";
import { createOrder, updateOrder } from "../controllers/orderController.js";
import { getOrders } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/",createOrder)
orderRouter.get("/",getOrders)
orderRouter.put("/:orderId",updateOrder)

export default orderRouter