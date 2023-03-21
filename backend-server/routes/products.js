import express, { request, response } from "express";
import food from "../public/food.json" assert { type: "json" };

export const productsRouter = express.Router();

productsRouter.post("/", (request, response) => {
    const body = request.body;
    food.push(body);
    console.log(food);
    response.sendStatus(200);
});

productsRouter.get("/", (request, response) => {
    response.send(food);
});

productsRouter.put("/", (request, response) => {
    const body = request.body;

    food[Number(body.id) - 1] = body;
    console.log(food);
    response.sendStatus(200);
});

productsRouter.delete("/", (request, response) => {
    const body = request.body;
    console.log(food);
    response.sendStatus(200);
});
