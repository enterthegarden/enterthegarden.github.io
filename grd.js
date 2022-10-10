  function openModule(moduleName) {
    var i;
    var x = document.getElementsByClassName("module");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(moduleName).style.display = "block";  
  }