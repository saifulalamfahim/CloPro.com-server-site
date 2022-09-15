import express from "express";
import cors from 'cors';
import data from "./Data.js";

const app = express();

app.use(cors());

app.get("/api/products", (req, res) => {
    res.send(data.products);
});

// for sending data to api.js(frontend)
app.get('/api/products/:id', (req, res) => {
    const product = data.products.products1.find((x) => x._id === req.params.id);
    const product12 = data.products.products2.find((x) => x._id === req.params.id);
    const product13 = data.products.products3.find((x) => x._id === req.params.id);
    const product14 = data.products.products4.find((x) => x._id === req.params.id);
   
    if(product){
        res.send(product);
    }if (product12) {
        res.send(product12);
    } if(product13){
        res.send(product13);
    } if(product14){
        res.send(product14);
    } else {
        res.status(404).send({ message: 'Product not found'});
    }
   
});



app.listen(5000, () => {
    console.log('server at http://localhost:5000');
});
