const router = require("express").Router();
const authRoutes = require("./auth");
const usersRoutes = require("./users");
const budgetRoutes = require("./budget");
const todoRoutes = require("./todo");
const unitsRoutes = require("./units");

// Auth Routes
router.use("/auth", authRoutes);

// Users Routes
router.use("/users", usersRoutes);

// Budgets Routes
router.use("/budget", budgetRoutes);

// Todo Routes
router.use("/reactTodos", todoRoutes);

// Units Routes
router.use("/units", unitsRoutes);

module.exports = router;
// comments to test
