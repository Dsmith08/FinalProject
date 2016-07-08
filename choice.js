var war = document.getElementById('ChangeWar');

function chanWar(){ 
        if( ! confirm("Do you really want to do this?") ){
            preventDefault(); 
        } else {
          window.location.href = 'war.html'; 
        }
    } 

war.addEventListener('click',chanWar, false);