const mongoose = require("mongoose");

const expenditureSchema = mongoose.Schema({
    Category: String,
    "Ministry/Department": String,
    Scheme: String,
    "Actuals2019-2020 - Revenue": mongoose.Schema.Types.Mixed,
    "Actuals2019-2020 - Capital": mongoose.Schema.Types.Mixed,
    "Actuals2019-2020 - Total": mongoose.Schema.Types.Mixed,
    "Budget Estimates2020-2021 - Revenue": mongoose.Schema.Types.Mixed,
    "Budget Estimates2020-2021 - Capital": mongoose.Schema.Types.Mixed,
    "Budget Estimates2020-2021 - Total": mongoose.Schema.Types.Mixed,
    "Revised Estimates2020-2021 - Revenue": mongoose.Schema.Types.Mixed,
    "Revised Estimates2020-2021 - Capital": mongoose.Schema.Types.Mixed,
    "Revised Estimates2020-2021 - Total": mongoose.Schema.Types.Mixed,
    "Budget Estimates2021-2022 - Revenue": mongoose.Schema.Types.Mixed,
    "Budget Estimates2021-2022 - Capital": mongoose.Schema.Types.Mixed,
    "Budget Estimates2021-2022 - Total": mongoose.Schema.Types.Mixed,
    // Add other fields as needed based on the CSV headers
});

const expenditureModel = mongoose.model("expenditure", expenditureSchema);

module.exports = expenditureModel;
