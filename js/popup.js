   // ace editor init
var editor = ace.edit("editor");
editor.setTheme("ace/theme/tomorrow");
editor.session.setMode("ace/mode/yaml");
let output = document.getElementById("output");
let edi = document.getElementById("editor")
let interval = 1000
valid = setInterval(validateYaml, interval);

document.getElementById("json").addEventListener("click", setjson);
document.getElementById("yaml").addEventListener("click", setyaml);

function validateJson() {
  let code = editor.getValue();
  try {
    JSON.parse(code);
    output.className = "alert alert-success";
    output.innerHTML = "Valid JSON"
} catch (e) {
  output.innerHTML = e
  output.className = "alert alert-danger";
}
}

function validateYaml() {
  let code = editor.getValue();
  try {
    let dum = YAML.dump(code);
    let yml = YAML.parse(code);
    let yamlString = JSON.stringify(yml,null,1);
    JSON.parse(yamlString);
    let doc = jsyaml.load(dum);
    console.log(doc)
    output.className = "alert alert-success";
    output.innerHTML = "Valid YAML"
} catch (e) {
  output.innerHTML = e
  output.className = "alert alert-danger";
}
}

function setjson() {
  editor.session.setMode("ace/mode/json");
  try{
    clearInterval(valid);
  }
  catch (e){
  }
  valid = setInterval(validateJson, interval);
}

function setyaml() {
  editor.session.setMode("ace/mode/yaml");
  try{
    clearInterval(valid);
  }
  catch (e){
  }
  valid = setInterval(validateYaml, interval);
}

