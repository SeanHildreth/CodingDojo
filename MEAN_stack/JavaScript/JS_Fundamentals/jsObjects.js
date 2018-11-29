let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
]

for(let idx = 0; idx < students.length; idx++) {
    console.log("Name: " + students[idx].name + ", Cohort: " + students[idx].cohort);
}


let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 let count = 1;
 for(let idx = 0; idx < users.employees.length; idx++) {
    console.log("EMPLOYEES");
    console.log(count + " - " + users.employees[idx].last_name + ", " + users.employees[idx].first_name);
    count++;
 }

 let count2 = 1;
 for(let idx = 0; idx < users.managers.length; idx++) {
    console.log("MANAGERS");
    console.log(count2 + " - " + users.managers[idx].last_name + ", " + users.managers[idx].first_name);
    count2++;
 }