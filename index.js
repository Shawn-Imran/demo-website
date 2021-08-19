const app = require("./app");

const PORT = 3000;
const hostName = "127.0.0.1";


app.listen(PORT, hostName, () => {
  console.log(`Server is running at http://${hostName}:${PORT}`);
});