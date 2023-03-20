import express from "express";

const router = express.Router();

router.get("/", (request, response) => {
    response.send("users");
});

router.get("/new", (request, response) => {
    response.send("users list");
});

router.route("/:id")
    .get((request, response) => {
        const u = request.user;
        response.send(`The use is: ${u.name}`);
    })
    .post((request, response) => {

    });

const users = [
    {
        name: "Kyle"
    },
    {
        name: "Sally"
    }
];
router.param("id", (req, res, next, id) => {
    req.user = users[id];
    next();
});

export default router;
