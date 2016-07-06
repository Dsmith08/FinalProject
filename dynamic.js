var nextPage = document.getElementById('nextPage');

function theNextPage( e ){ 
        if( ! confirm("Do you really want to do this?") ){
            e.preventDefault(); 
        } else {
          window.location.href = 'page2.html'; 
        }
    } 

nextPage.addEventListener("click",theNextPage,false);



