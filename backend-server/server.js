import express, { json } from "express";
import { productsRouter } from "./routes/products.js";

// function logger(request, response, next) {
//     console.log(request.originalUrl);
//     next();
// }

const app = express();
// app.set("view engine", "ejs");
// app.use(logger);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(json());

// app.get("/", logger, (request, response) => {
//     response
//         .status(200)
//         .render("./index", {
//             text: "nice web bro"
//         });
// });

app.use("/products", productsRouter);

const port = 3000;
app.listen(port);
console.log(`Server listening on port ${port}`);
