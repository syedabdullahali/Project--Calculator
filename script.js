const input = document.querySelector('.input')
const oprators = document.querySelectorAll('#oprator');
const buttons = document.querySelectorAll('button');
const calculator = document.querySelector('.calculator')
let privious = document.querySelector('.previousValue')
let num=0;

calculator.addEventListener('click',function(e){
const clsIn = ()=>{
    input.value =""
} 
if(!e.target.className){   
    input.value += +e.target.textContent;
}
if(e.target.className=="Addition"){
    num += +input.value 
    privious.textContent = num
    clsIn()
}else if(e.target.className=="Subtraction"){
    num -= +input.value 
    privious.textContent = num
    clsIn()
}else if(e.target.className=="Division"){    
    num = num /input.value 
    privious.textContent = num
    clsIn()
}else if(e.target.className=="Multiplication"){
    num *= input.value 
    privious.textContent = num
    clsIn()
}else if(e.target.className=="equal"){
    input.value = num
    privious.textContent = ""
}else if(e.target.className=="clear"){
    num = 0;
    privious.textContent = ""
    clsIn()
}
})


buttons.forEach((el)=>{
el.style.background ="linear-gradient(rgb(251, 158, 251),rgb(44, 216, 246)"
})

console.log(oprators)
oprators.forEach((el)=>{
el.style.background="rgb(77, 64, 250)" 
el.style.color="white"

})
document.querySelector('#clear').style.background="rgb(77, 64, 250)"
document.querySelector('#clear').style.color="white"

