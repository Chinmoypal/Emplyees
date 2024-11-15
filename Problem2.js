
function destructuringToSwap(employees) {
    if (employees.length >= 2) {
        // Swapping the first and last elements
        [employees[0], employees[employees.length - 1]] = [employees[employees.length - 1], employees[0]];
    }
    return employees;
}

// Example Invocation
const employees2 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 }
];

console.log(destructuringToSwap(employees2));
