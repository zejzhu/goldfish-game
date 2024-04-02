
    document.addEventListener('DOMContentLoaded', function() {
      var reloadObject = document.getElementById('reloadObject'); //fetch box that will be clicked to reload page

      reloadObject.addEventListener('click', function(){ //listen for object click
        // Reload the page
        window.location.reload();
      });
    });
  