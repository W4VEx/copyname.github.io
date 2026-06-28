let tname = document.getElementById('tname')
let tprice = document.getElementById('tprice')
let tcount = document.getElementById('tcount')
let Sname = document.getElementById('Sname')
let cSname = document.getElementById('cSname')
let clname = document.getElementById('clname')

let add = document.getElementById('add')
let hdn = document.getElementById('HiddenN')
let nc =''
let exit = document.getElementById('exit')
let msit = document.getElementById('msit')

let n = 0;
let psit = prompt("จำนวนสิทธิ์สูงสุด")

msit.innerHTML = `จำนวนสิทธิ์สูงสุด : ` + parseInt(psit);


function count(){

    tcount.innerHTML = "";

    tprice.addEventListener("keypress",(e)=>{
      
setTimeout(()=>{

   if(tprice.value > parseInt(psit*50)){   //จำนวนเงินสูงสุดของสิทธิ์
      tcount.innerHTML = parseInt(psit);  //จำนวนสิทธ์สูงสุด
   }
   else{
      tcount.innerHTML = parseInt((tprice.value/50));       // จำนวนเงิน / ราคาต่อสิทธ์
   }

},10)

})
 }   

count();

function AddName(){
   
   add.addEventListener(("click"),()=>{

   render();
      
   // addName

//       Sname.innerHTML += `
//       <div id="clname" class = "clname">
//       <div id="cSname" class="cSname">
//       <h2>Name</h2>
//       <div id="HiddenN" class="shname"> 
//       ${nc}
//       </div>
//       <div id="quit" class="quit"> <img onclick="del()"id="exit" class="exit"
//               src="data:image/png;base64,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"/>
//       </div>
//   </div>
//   </div>
//   `

      //div
      const clna = document.createElement('div');
      clna.classList.add('clname')
      // clna.innerHTML = "Hello";

      const cSna = document.createElement('div')
      cSna.classList.add('cSname')
      //h2
      const h2 = document.createElement('h2')
      h2.classList.add('name');
      h2.innerHTML = "Name";

      const shn = document.createElement('div')
      shn.classList.add('shname')
      shn.innerHTML = `<center>${nc}</center>`
      shn.innerHTML += `<br>`
      shn.innerHTML += `จำนวนสิทธิ์ที่ได้ : ` + parseInt(tcount.innerHTML) 


      const qui = document.createElement('div')
      qui.classList.add('quit') 

      const img = document.createElement('img')
      img.classList.add('exit');
      img.src = "data:image/png;base64,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";
      img.addEventListener("click",del)
      
      clna.append(cSna, h2, shn,qui, img)
      Sname.append(clna)

      

})

}

AddName()

function render(){
   if(true){
      nc = '';
      for (let i=0; i<tcount.innerHTML; i++) {
         nc += tname.value+`<br>`

         }
      
        
         
   }
   else{
      
;   }
   }

  
      // `<div id="shname"class="shname">${tname.value}${i}</div>`
      
      
      function del(event){

               // document.querySelector('.clname').remove();

               event.target.parentNode.remove();

            }
            
         
      
  
       
      
function res(){
   window.location = "";
}





   
   





   