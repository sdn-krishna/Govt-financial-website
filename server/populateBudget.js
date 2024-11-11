// populateBudget.js
const mongoose = require('mongoose');
const csv = require('csv-parser');
const fs = require('fs');
const budgetModel = require('./models/budget');

mongoose.connect("mongodb://localhost:27017/users/budget");

fs.createReadStream('/mnt/data/Indian Union Budget FY 21-22 till 23-24 (1).csv')
    .pipe(csv())
    .on('data', (row) => {
        const budget = new budgetModel({
            ministry: row.Ministry,
            budget: row.Budget,
            description: row.Description,
            year: row.Year
        });
        budget.save();
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
        mongoose.connection.close();
    });
