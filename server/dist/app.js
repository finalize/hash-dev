"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/../public")));
app.use("*", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
});
exports.default = app;
//# sourceMappingURL=app.js.map