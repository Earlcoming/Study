const parser = require("body-parser");

const express = require("express");

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
