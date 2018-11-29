var users = [
  {
    fname: "Kermit",
    lname: "the Frog",
    languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
    interests: {
      music: ["guitar", "flute"],
      dance: ["tap", "salsa"],
      television: ["Black Mirror", "Stranger Things"]
    }
  },
  {
    fname: "Winnie",
    lname: "the Pooh",
    languages: ["Python", "Swift", "Java"],
    interests: {
      food: ["honey", "honeycomb"],
      flowers: ["honeysuckle"],
      mysteries: ["Heffalumps"]
    }
  },
  {
    fname: "Arthur",
    lname: "Dent",
    languages: ["JavaScript", "HTML", "Go"],
    interests: {
      space: ["stars", "planets", "improbability"],
      home: ["tea", "yellow bulldozers"]
    }
  }
]

function userLanguages(users) {
  for(let idx = 0; idx < users.length; idx++) {
    let user = users[idx];
    let b = user.interests
    let a = Object.keys(b);
    let str = user.fname + " " + user.lname + " knows ";
    let str2 = user.fname + " is also interested in ";
    for(let jdx = 0; jdx < user.languages.length - 1; jdx++) {
      str += user.languages[jdx] + ", ";
    }
    for(let kdx = 0; kdx < a.length; kdx++) {
      for(let ldx = 0; ldx < b[a[kdx]].length; ldx++) {
        if(kdx == a.length - 1 && ldx == b[a[kdx]].length - 1){
          break
        }
        str2 += b[a[kdx]][ldx] + ", ";
      }
    }
    str += "and " + user.languages[user.languages.length - 1] + ".";
    str2 += "and " + b[a[a.length -1]][b[a[a.length -1]].length-1] + ".";
    console.log(str);
    console.log(str2);
  }
}



userLanguages(users);