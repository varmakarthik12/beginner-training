import http from "http"

http.createServer((req, res) => {
    // console.log({ req, res });

    console.log({ url: req.url });

    if (req.url === "/books") {
        res.write(JSON.stringify({
            books: ["goodbook", "badbook"]
        }));
    }



    res.write("Hello world");
    res.end();
}).listen(8090)