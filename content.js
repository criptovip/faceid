function activate(){
    // get data from local storage
    
    // hide all the divs in div id=pane-side but the ones with spams inside with titles in the list
};

function deactivate(){

    location.reload();
     // ¯_(ツ)_/¯
};

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('editList');
    checkPageButton.addEventListener('click', function() {



        // get all titles from all the spam tags inside the div id=pane-side
        
        // create the ones that still doesn't exist in local storage
        
        // retrieve from local storage
        
        // print a list with checkboxes
        document.getElementById("corpo").innerHTML = "Aqui vamos exibir a lista de contatos e grupos existentes.";

        // add save button that will update the local storage and call the activateList function


    }, false);
  }, false);

  document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('activateList');
    checkPageButton.addEventListener('click', function() {

        activate();
    }, false);
  }, false);

  document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('deactivateList');
    checkPageButton.addEventListener('click', function() {

        deactivate();
    }, false);
  }, false);
