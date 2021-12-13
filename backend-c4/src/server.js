const app = require("./index");
const connect = require("./configs/db")



app.listen(4556, async function() {
    await connect();
    console.log("Server is running on Port 4556")
});