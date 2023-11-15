function companyUsers(arr) {
  let companyEmployees = {};

  for (let line of arr) {
    let [company, employeeId] = line.split(" -> ");

    if (company in companyEmployees) {
      if (!companyEmployees[company].includes(employeeId)) {
        companyEmployees[company].push(employeeId);
      }
    } else {
      companyEmployees[company] = [employeeId];
    }
  }

  let entries = Object.entries(companyEmployees).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  for (let [name, employeesId] of entries) {
    console.log(name);
    employeesId.forEach((id) => console.log(`-- ${id}`));
  }
}

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
