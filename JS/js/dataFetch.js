fetch("https://dummyjson.com/products")
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
