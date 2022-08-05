const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");
const productsRouter = express.Router();

const app = express();
const POST = process.env.POST || 4000;

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

productsRouter.route("/").get((req, res) => {
  res.render("products", {
    products: [
        {productsTitle: 'น้ำยาโจ่', productsDescription: "น้ำยาล้าง...", productsPrice: 45},
        {productsTitle: 'น้ำยาโจ่ 1', productsDescription: "น้ำยาล้าง...1", productsPrice: 50},
        {productsTitle: 'น้ำยาโจ่ 2', productsDescription: "น้ำยาล้าง...2", productsPrice: 55},
        {productsTitle: 'น้ำยาโจ่ 3', productsDescription: "น้ำยาล้าง...3", productsPrice: 60},
    ]
  });
});

productsRouter.route("/1").get((req, res) => {
    res.send("Hello World !! I'm Products 1");
  });

app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.render("index", {
    username: "007xx",
    customers: ["mayu", "maki", "makai"],
  });
});

app.listen(POST, () => {
  debug("Listening on port " + chalk.blue(POST));
});
