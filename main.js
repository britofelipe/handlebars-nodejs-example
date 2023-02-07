const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine()) // If we were going to use partials, it would be different
app.set("view engine", "handlebars")

app.use(express.static("public"))

const products = [
    {
        id: "1",
        title: "Book",
        price: 12.99,
        quantity: 2
    },
    {
        id: "2",
        title: "Bottle",
        price: 8.99,
        quantity: 3
    },
    {
        id: "3",
        title: "TV",
        price: 1112.99,
        quantity: 5
    },
    {
        id: "4",
        title: "Lamp",
        price: 22.99,
        quantity: 5
    },
    {
        id: "5",
        title: "Pencil",
        price: 0.99,
        quantity: 14
    }
]

app.get("/", (req, res) => {
    res.render("home", { products })
})

app.get("/product/:id", (req, res) => {
    const product = products[parseInt(req.params.id - 1)]
    res.render("product", { product })
})

app.listen(3000, () => {
    console.log("Server listening on port 3000...")
})