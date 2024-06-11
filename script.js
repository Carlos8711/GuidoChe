

let viewform=document.getElementById("conteiner-form")
let addSt=document.getElementById("addstyle")
let reSt=document.getElementById("removestyle")
let liul=document.getElementById('li')
let btnNext=document.getElementById('btn-next')


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
  console.log("hola")
 }
