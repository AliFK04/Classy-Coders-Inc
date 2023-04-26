const { Employees } = require("./classes/Employees")
const { Manager } = require("./classes/Manager")
const { SalesPerson } = require("./classes/SalesPerson")
const { SoftwareEngineer } = require("./classes/SoftwareEngineer")

// Test your code here

console.log(Employees.getEmployees()); // [ Manager { }, SoftwareEngineer { }, SalesPerson { }]
console.log(Employees.getTotalPayroll()); // 310000

module.exports = {
    Employees,
    Manager,
    SalesPerson,
    SoftwareEngineer
}