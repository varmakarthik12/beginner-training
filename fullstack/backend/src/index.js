import express from "express";
import fs from "fs";

const webserver = express();

webserver.get("/", (req, res) => {
    res.send({ test: "HelloWorld" })
})

webserver.get("/books", (req, res) => {
    res.send({ books: ["goodbook", "badbook"] })
})


webserver.post("/books", async (req, res) => {
    // await fs.writeFile("book.txt", JSON.stringify({ books: ["goodbook", "badbook"] })) //alternative for writing to DB
    res.send({ books: ["goodbook", "badbook"] })
    res.end()
})

webserver.listen(8091, () => {
    console.log("web server is live");
})