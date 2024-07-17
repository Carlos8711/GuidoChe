


let addSt=document.getElementById("addstyle")
let reSt=document.getElementById("removestyle")
let ulList=document.getElementById('ulList')
let navUllist=document.getElementById('navullist')
let btnNext=document.getElementById('btn-next')
let btnBack=document.getElementById('btn-back')
let btnBur=document.getElementById('btn-burger')
let btncontBur=document.getElementById('conteiner-btn-burger')
let tamañoscreen
let c=0
const ulListStyle=getComputedStyle(ulList)
const navUllistStyle=getComputedStyle(navUllist)
const btnBurStyle=getComputedStyle(btnBur)
const btncontBurStyle=getComputedStyle(btncontBur)
let screenzise=0
let entrar=true

window.addEventListener('resize', changeScreen);
btnNext.addEventListener("click", btnNet);
btnBack.addEventListener("click",btnBac)


function changeScreen(e){
  if(btncontBurStyle.display=="none"){
    navUllist.style.display="flex"
  }
  if(btncontBurStyle.display=="flex"){
    navUllist.style.display="none"
  }
}

function btnBurguer(){
  if(entrar){
     navUllist.style.left="0%"
     navUllist.style.display="flex"
     entrar=false
    }else{
       navUllist.style.left="100%"
       navUllist.style.display="none"
       entrar=true
  }
}


 function btnNet(){
    if(ulListStyle.marginLeft=="0px"){
        ulList.style.marginLeft="-100%"
        tamañoscreen=ulListStyle.marginLeft
    }else if(ulListStyle.marginLeft==tamañoscreen){
        ulList.style.marginLeft="-200%"
        tamañoscreen=ulListStyle.marginLeft
        c=0
    }
      if(ulListStyle.marginLeft!=tamañoscreen){
      tamañoscreen=ulListStyle.marginLeft
        btnNet()
  }
}

function btnBac(){
         tamañoscreen=ulListStyle.marginLeft
      if(ulListStyle.marginLeft==tamañoscreen && c==0){
          ulList.style.marginLeft="-100%"
          tamañoscreen=ulListStyle.marginLeft
          c++
      }else if(c>0 ){
          console.log("entre")
          ulList.style.marginLeft="0px"
          tamañoscreen=ulListStyle.marginLeft
      }
      if(ulListStyle.marginLeft!=tamañoscreen){
          tamañoscreen=ulListStyle.marginLeft
          btnBac()
      }

 }




 document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el envío del formulario

  var formData = new FormData(this);

  fetch('send.php', {
      method: 'POST',
      body: formData
  })
  .then(response => response.text())
  .then(data => {
      console.log(data); // Puedes usar esto para depuración

      // Mostrar la toast
      var toast = document.getElementById('toast');
      toast.className = "toast show";
      setTimeout(function() {
          toast.className = toast.className.replace("show", ""); 
      }, 3000);
  })
  .catch(error => console.error('Error:', error));
});