const { json } = require("express");
const { database } = require("./database");

let site = {
    create: (req, res) => {
        console.log(req.body.about_me)
        let user = {
            about_me: req.body.about_me,
            name: req.body.name,
            HTML: req.bodyHTML,
            css: req.body.css,
            js: req.body.js,
            git: req.body.git,
            react: req.body.react,
            node: req.body.node,
            gitUrl: req.body.gitUrl,
            twitter: req.body.twitter,
            books: req.body.books,
            artists: req.body.artists
        }
        
        database.push(user)
        console.log(database)
        res.redirect("/homepage")
    }
}

module.exports = site;