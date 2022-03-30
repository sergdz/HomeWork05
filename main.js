const movies = [
    { id: 1, name: "Fast and Furious", cost: 5.99 },
    { id: 2, name: "Fast and Furious 2", cost: 3.99 },
    { id: 3, name: "Fast and Furious 4", cost: 4.99 },
    { id: 4, name: "Глубокие воды", cost: 6.55 },
    { id: 5, name: "Армия воров", cost: 9.65 },
    { id: 6, name: "Веном", cost: 8.34 },
    { id: 7, name: "Мстители", cost: 8.14 },
    { id: 8, name: "Война будущего", cost: 1.25 },
    { id: 9, name: "Довод", cost: 3.55 },
  ];
  
  const cart = [];
  
  
  function addToCart(id) {
    const selectedMovie = movies.find((movie) => movie.id === id);
    selectedMovie && cart.push(selectedMovie);
  }
  
  function printCheck() {
    cart && cart.length ? cart.forEach((movie, i) => {
      console.log(`${i + 1} - ${movie.name} - $${movie.cost}`);
    }) : console.log("Cart is empty");
  }
  
  addToCart(6);
  addToCart(4);
  addToCart(9);
  addToCart(2);
  printCheck();