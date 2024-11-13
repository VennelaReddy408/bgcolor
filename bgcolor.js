input=document.getElementById("color")
input2=document.getElementById("bRadius")
image=document.querySelector("img");

function colorChange(z){
    console.log(z);
     
    if(z.key === "Enter"){
        document.body.style.backgroundColor =input.value
    }
        
    
}
function RadiusChange(z){
    console.log(z)
    if(z.key === "Enter"){
        image.style.borderRadius=`${input2.value}px`
    }
}