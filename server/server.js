import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
dotenv.config();

mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
        console.log("connected to mongo");
    })
    .catch((err) => {
        console.log(errmessage);
    });

const app = express();

app.use("/api/seed", seedRouter);
app.use("/api/products", productRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
});
