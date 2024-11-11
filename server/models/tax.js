const mongoose = require("mongoose");

const taxSchema = mongoose.Schema({
    "Group": String,
    "Scheme": String,
    "Sub Scheme Name": String,
    "Major Head Code": Number,
    "Actuals 2020-2021": mongoose.Schema.Types.Mixed,
    "Budget 2021-2022": mongoose.Schema.Types.Mixed,
    "Revised 2021-2022": mongoose.Schema.Types.Mixed,
    "Budget 2022-2023": mongoose.Schema.Types.Mixed,
    // Add any additional fields as necessary
});

const taxModel = mongoose.model("tax", taxSchema);

module.exports = taxModel;
