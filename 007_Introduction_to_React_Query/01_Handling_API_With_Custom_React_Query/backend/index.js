import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "table glass",
      price: 250,
      image:
        "https://images.pexels.com/photos/14656123/pexels-photo-14656123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "table plastic",
      price: 250,
      image:
        "http://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "table metal",
      price: 250,
      image:
        "https://images.pexels.com/photos/7260631/pexels-photo-7260631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      name: "table wooden",
      price: 200,
      image:
        "https://images.pexels.com/photos/15890253/pexels-photo-15890253/free-photo-of-room-interior-with-houseplants-and-vintage-furniture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      name: "table polyester",
      price: 150,
      image:
        "https://images.pexels.com/photos/15888837/pexels-photo-15888837/free-photo-of-young-woman-sitting-in-a-lobby.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  if (req.query.search) {
    const filterProducts = products.filter((products) =>
      products.name.includes(req.query.search)
    );
    res.send(filterProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});
