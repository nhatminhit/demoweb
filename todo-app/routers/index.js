const express = require('express');
const todoRouter = require('./todo');
const viewRouter = require('./view');

module.exports = (app) => {
    app.use('/', todoRouter);
    app.use('/', viewRouter);
}