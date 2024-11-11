const mongoose = require("mongoose");

const budgetSchema = mongoose.Schema({
        Category: String,
        "Ministry/Department": String,
        Scheme: String,
        "Actuals 2021-2022 Revenue": Number,
        "Actuals 2021-2022 Capital": Number,
        "Budget Estimates 2022-2023 Revenue": Number,
        "Budget Estimates 2022-2023 Capital": Number,
        "Budget Estimates 2022-2023 Total": Number,
        "Revised Estimates2022-2023 Revenue": Number,
        "Revised Estimates2022-2023 Total": Number,
        "Budget Estimates2023-2024 Revenue": Number,
        "Budget Estimates2023-2024 Capital": Number,
});

const budgetModel = mongoose.model("budget", budgetSchema);

module.exports = budgetModel;
