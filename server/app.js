const express = require("express")
const app = express()
const cors = require("cors")
const stripe = require("stripe")("sk_test_51OeeeELjmJ1HQl8lotxX9HOYs77SBkim5niYoRsilKbIkeO9chQNBP3wk2m2riPPSqJN8pw1PGSsxLu1DBWoWUs600841dymMf")

app.use(express.json())
app.use(cors())

// checkout api
app.post("/api/create-checkout-session", async (req, res) => {
    const { products } = req.body
    const line_items = products.map((product) => ({
        price_data: {
            currency: "usd",
            product_data: {
                name: product.title,
            },
            unit_amount: product.price * 100,
        },
        quantity: 1,
    }))
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: line_items,
        mode: "payment",
        success_url: "http://localhost:7000/success",
        cancel_url: "http://localhost:7000/cancel"
    })

    res.json({
        id: session.id,
    })
})


app.listen(7000, () => {
    console.log("server start");
})