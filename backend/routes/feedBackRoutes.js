import express from "express";
import * as controller from "../controllers/feedBackCont.js";
const feedBackRoute = express.Router();

feedBackRoute.post("/send-feedback/:id", controller.send_feedback);   
feedBackRoute.get("/get-feedbacks/:id", controller.get_feedbacks);  
feedBackRoute.get("/get-feedback/:id", controller.get_feedback);    
feedBackRoute.delete("/delete-feedback/:id", controller.delete_feedback);   
    
export default feedBackRoute;