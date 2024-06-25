


let addSt=document.getElementById("addstyle")
let reSt=document.getElementById("removestyle")
let ulList=document.getElementById('ulList')
let navUllist=document.getElementById('navullist')
let btnNext=document.getElementById('btn-next')
let btnBack=document.getElementById('btn-back')
let btnBur=document.getElementById('btn-burger')
let tamañoscreen
let c=0
const ulListStyle=getComputedStyle(ulList)
const navUllistStyle=getComputedStyle(navUllist)
const btnBurStyle=getComputedStyle(btnBur)
let screenzise=0
let entrar=true

window.addEventListener('resize', changeScreen);
btnNext.addEventListener("click", btnNet);
btnBack.addEventListener("click",btnBac)


function changeScreen(e){
  screenzise=window.screen.width
  console.log(screenzise)
  if(screenzise>1199){
    navUllist.style.display="flex"
  }
}

function btnBurguer(){
  console.log(entrar)
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
  }}

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
