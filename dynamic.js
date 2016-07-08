var nextPage = document.getElementById('nextPage');

function theNextPage(){ 
        if( ! confirm("Do you really want to do this?") ){
            preventDefault(); 
        } else {
          window.location.href = 'page2.html'; 
        }
    } 

nextPage.addEventListener("click",theNextPage,false);



