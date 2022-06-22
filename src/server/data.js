const express = require("express");
const app = express();

var cors = require("cors");
app.use(cors());
app.use(express.json({ extended: false }));

data = [
  {
    id: 736,
    name: "Systems",
    image: {
      link: "http://i.stack.imgur.com/8KA9j.jpg?s=32&g=1",
    },
    groups: [
      {
        id: 2168,
        name: "API",
        url: "https://wwww.itschools.co.za/api/",
      },
      {
        id: 11955,
        name: "Assets",
        url: "https://wwww.itschools.co.za/assets/",
      },
      {
        id: 3179,
        name: "Design",
        url: "https://wwww.itschools.co.za/design/",
      },
      {
        id: 207,
        name: "Development",
        url: "https://wwww.itschools.co.za/development/",
      },
      {
        id: 70,
        name: "Intranet",
        url: "https://wwww.itschools.co.za/intranet/",
      },
    ],
    url: "https://wwww.itschools.co.za/projects",
  },
  {
    id: 44315,
    name: "User Agents",
    image: {
      link: " https://cdn.pixabay.com/photo/2018/09/24/08/31/pixel-cells-3699334_960_720.png",
    },
    groups: [
      {
        id: 191599,
        name: "Alchemy",
        url: "https://wwww.itschools.co.za/tools/alchemy",
      },
      {
        id: 86822,
        name: "Empathy",
        url: "https://wwww.itschools.co.za/tools/empathy",
      },
      {
        id: 86297,
        name: "Epiphany",
        url: "https://wwww.itschools.co.za/tools/epiphany",
      },
      {
        id: 131837,
        name: "Harmony",
        url: "https://wwww.itschools.co.za/tools/hamony",
      },
      {
        id: 174338,
        name: "Zagreb",
        url: "https://wwww.itschools.co.za/tools/zagreb",
      },
    ],
    url: "https://wwww.itschools.co.za/tools",
  },
];

app.get("/", (req, resp) => {
  resp.send("Welcome to our optimi app");
});

app.get("/projects", async (req, resp) => {
  resp.status(200).send(data);
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
