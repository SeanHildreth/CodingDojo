$.get("https://api.github.com/users/seanhildreth", displayName)


function displayName(data) {
  console.log(data);
  name = data.name;
  console.log(name);
}


function nameFunction() {
  console.log("Github Name: " + name);
  document.getElementById("namePara").innerText = window.name;
}

