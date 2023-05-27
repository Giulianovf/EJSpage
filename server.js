const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const items = [
    {
      title: "D",
      message: "esenvolvendo aplicações/serviços de forma simples",
    },
    {
      title: "E",
      message: "JS usa JavaScript para renderizar",
    },
    {
      title: "M",
      message: "uito facil de usar",
    },
    {
      title: "A",
      message: "Amor",
    },
    {
      title: "I",
      message: "nstall EJS",
    },
    {
      title: "S",
      message: "intaxe simples",
    },
  ];
  res.render("pages/index", {
    qualitys: items,
  });
});

app.get("/sobre", function (req, res) {
  res.render("pages/about");
});

app.listen(8080);

console.log("Rodando");
