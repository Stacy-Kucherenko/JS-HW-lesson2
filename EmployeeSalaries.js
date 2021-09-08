let employeeSalaries = {
logisticMnager: 15000,
HR: 9000,
director: 25000,
accountant: 12000


};

let findSalary = 0;
for (let salary in employeeSalaries){
  findSalary+=employeeSalaries[salary];
}

console.log("The sum of all salaries : " + findSalary);