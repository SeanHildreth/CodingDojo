var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

console.log(users[1].age);
console.log(users[0].name);

for(i = 0; i < users.length; i++){
    for(k in users[i]){
      console.log(users[i][k]);
    }
}