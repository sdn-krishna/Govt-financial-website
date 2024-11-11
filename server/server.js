const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/user");
const budgetModel = require("./models/budget");
const expenditureModel = require("./models/expenditure");
const taxModel = require("./models/tax");
const financeModel = require("./models/finance");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/users")
    .then(() => console.log("MongoDB connected"))
    .catch(error => console.error("MongoDB connection error:", error));

// User routes
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    userModel.findOne({ username: username })
        .then(user => {
            if (user) {
                if (user.password === password) res.json("approve");
                else res.json("wrong creds");
            } else res.json("no existence");
        });
});

app.post('/register', (req, res) => {
    userModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

// Budget Routes
app.get('/budget', async (req, res) => {
    try {
        const budgets = await budgetModel.find();
        res.json(budgets);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch budget data" });
    }
});

app.get('/budget/total', async (req, res) => {
    try {
        // Ensure "Actual Expenditure 2021-22" is the correct field name
        const totalBudget = await budgetModel.aggregate([
            { $group: { _id: null, total: { $sum: "$Actual Expenditure 2021-22" } } }
        ]);

        // Log the result for debugging purposes
        console.log("Total Budget Aggregation Result:", totalBudget);

        res.json(totalBudget[0]?.total || 0);  // Respond with the total or 0 if no data
    } catch (error) {
        console.error("Error calculating total budget:", error);
        res.status(500).json({ error: "Failed to calculate total budget" });
    }
});

// Expenditure Routes
app.get('/expenditure', async (req, res) => {
    try {
        const expenditures = await expenditureModel.find();
        res.json(expenditures);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch expenditure data" });
    }
});



app.get('/expenditure/total', async (req, res) => {
    try {
        // Adjust "AmountField" to the actual field name for expenditure amounts in your database
        const totalExpenditure = await expenditureModel.aggregate([
            {
                $group: {
                    _id: null,
                    total: { $sum: "$AmountField" } // Replace "AmountField" with the correct field
                }
            }
        ]);

        // Respond with the total expenditure
        res.json(totalExpenditure[0]?.total || 0);
    } catch (error) {
        console.error("Error calculating total expenditure:", error);
        res.status(500).json({ error: "Failed to calculate total expenditure" });
    }
});



// Tax Routes
app.get('/tax/total', async (req, res) => {
    try {
        const totalTax = await taxModel.aggregate([
            {
                $addFields: {
                    "Actuals 2020-2021": {
                        $cond: {
                            if: { $isNumber: "$Actuals 2020-2021" },
                            then: "$Actuals 2020-2021",
                            else: 0
                        }
                    },
                }
            },
            {
                $group: {
                    _id: null,
                    total: { $sum: "$Actuals 2020-2021" }
                }
            }
        ]);
        res.json(totalTax[0]?.total || 0);
    } catch (error) {
        res.status(500).json({ error: "Failed to calculate total tax revenue" });
    }
});

app.get('/tax', async (req, res) => {
    try {
        const taxes = await taxModel.find();
        res.json(taxes);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch tax data" });
    }
});

// Finance Routes
app.get('/finance/total', async (req, res) => {
    try {
        const totalFinance = await financeModel.aggregate([
            {
                $addFields: {
                    "Actuals 2020-2021": {
                        $cond: {
                            if: { $isNumber: "$Actuals 2020-2021" },
                            then: "$Actuals 2020-2021",
                            else: 0
                        }
                    },
                }
            },
            {
                $group: {
                    _id: null,
                    total: { $sum: "$Actuals 2020-2021" }
                }
            }
        ]);
        res.json(totalFinance[0]?.total || 0);
    } catch (error) {
        res.status(500).json({ error: "Failed to calculate total finance record" });
    }
});

app.get('/finance', async (req, res) => {
    try {
        const finances = await financeModel.find();
        res.json(finances);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch finance data" });
    }
});

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
