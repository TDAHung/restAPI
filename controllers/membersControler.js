const express = require('express');
const pool = require('../database/index');
const table = require('../database/table');

const memberController = {
    getAll: async (request, response) => {
        try {
            const [rows, feilds] = await pool.query(`SELECT * FROM ${table.members}`);
            response.json({
                data: rows,
            });
        } catch (error) {
            console.log(error);
            response.json({
                error: "failed"
            });
        }
    },

    getByID: async (request, response) => {
        try {
            const { id } = request.params;
            const [rows, fields] = await pool.query(`SELECT * FROM ${table.members} WHERE ID = ${id}`);
            response.json({
                data: rows,
            });
        } catch (error) {
            console.log(error);
            response.json({
                error: "failed"
            });
        }
    },

    create: async (request, response) => {
        try {
            const { name, age, height } = request.body;
            const sql = `INSERT INTO ${table.members} (name, age, height) VALUES (?,?,?)`;
            const [rows, fields] = await pool.query(sql, [name, age, height]);
            response.json({
                data: rows,
            });
        } catch (error) {
            console.log(error);
            response.json({
                error: "failed"
            });
        }
    },

    delete: async (request, response) => {
        try {
            const { id } = request.params;
            const sql = `DELETE FROM ${table.members} WHERE ID =?`;
            const [rows, fields] = await pool.query(sql, [id]);
            response.json({
                data: rows,
            });
        } catch (error) {
            console.log(error);
            response.json({
                error: "failed"
            });
        }
    },

    update: async (request, response) => {
        try {
            const { name, age, height } = request.body;
            const { id } = request.params;
            const sql = `UPDATE ${table.members} SET name =?, age =?, height =? WHERE ID =?`;
            const [rows, fields] = await pool.query(sql, [name, age, height, id]);
            response.json({
                data: rows,
            });
        } catch (error) {
            console.log(error);
            response.json({
                error: "failed"
            });
        }
    },
};

module.exports = memberController;
