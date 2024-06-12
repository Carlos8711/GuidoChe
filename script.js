

let viewform=document.getElementById("conteiner-form")
let addSt=document.getElementById("addstyle")
let reSt=document.getElementById("removestyle")
let ulList=document.getElementById('ulList')
let btnNext=document.getElementById('btn-next')
let btnBack=document.getElementById('btn-back')
let tamañoscreen
let c=0
const ulListStyle=getComputedStyle(ulList)

 function btnCancelMensege(){
   viewform.classList.add('closeform')
 }

 function openMenssege(){
   viewform.classList.remove('closeform')

 }
 addSt.addEventListener('click',function(){
  liul.style.left="65%"
  addSt.style.display="none"
  reSt.style.display="flex"

 })
 reSt.addEventListener('click',function(){
  liul.style.left="100%"
  addSt.style.display="flex"
  addSt.style.justifyContent="center"
  addSt.style.alignItems="center"
  reSt.style.display="none"
 })

 btnNext.addEventListener("click", btnNet);

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
btnBack.addEventListener("click",btnBac)
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
