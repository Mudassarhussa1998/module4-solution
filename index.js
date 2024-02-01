

var names = ["John", "ali ", "ahmad ", "Jack"];
for (var i = 0; i < names.length; ++i) {
    
  var currentName = names[i].trim();

  if (currentName.charAt(0).toLowerCase() === "j") {
    console.log("Goodbye " + currentName);
  } else {
    console.log("Hello " + currentName);
  }
}
