import "dotenv/config";
import app from "./src/app.js";

app.listen(3000, () => {
    console.log("Server escutando");
});