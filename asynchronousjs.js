// fetching data

fetch("http://example.com/movies.json")
  .then((res) => res.json())
  .then((data) => {
    console.log("Success", data);
  })
  .catch((err) => {
    console.log(err);
  });

// callback

const asyncFn = (callback) => {
  setTimeout(() => {
    callback("done");
  }, 2000);
};

asyncFn((message) => {
  console.log("callback", message);
});
