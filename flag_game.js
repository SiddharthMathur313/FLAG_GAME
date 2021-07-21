
let text_number= document.querySelector(".change_user_color");

let getting_box1= document.querySelector(".box1");

let getting_box2=document.querySelector(".box2");


let scores=document.querySelector(".total");

let scores2=document.querySelector(".total2");

let get_blank_accurary=document.querySelector(".accurary_blank");



let sum=0;

let sum2=0;

let total_accurary=0;

document.querySelector(".Submit_answer").addEventListener("click",function(){

    get_user_number();


  
});



function get_user_number(){

    let get_mood= document.querySelector(".mood");

    let get_user_enter_number= Math.floor(Math.random() * 10);
    let array_colors= { 1: "red", 2: "green", 3: "black",4:"blue",5:"purple",6:"yellow",7:"pink",8:"brown",9:"orange",10:"white"};
    let indexer = array_colors[get_user_enter_number];
    getting_box1.style.background = indexer;

    var get_random_integer = Math.floor(Math.random() * 10);
    let array_random= { 1: "red", 2: "green", 3: "black",4:"blue",5:"purple",6:"yellow",7:"pink",8:"brown",9:"orange",10:"white"};
    let indexer_random = array_random[get_random_integer];
    getting_box2.style.background = indexer_random;

    let results=document.querySelector(".result");
    let Submit_button=document.querySelector(".Submit_answer");
    Submit_button.style.borderTop= "5px solid "+indexer_random;
    Submit_button.style.borderRight= "5px solid "+indexer_random;
    Submit_button.style.borderLeft= "5px solid "+indexer;
    Submit_button.style.borderBottom= "5px solid "+indexer;
    


    if(get_random_integer===get_user_enter_number){
        results.innerHTML="SAME";
        results.style.color=indexer_random;
        sum+=1;
        scores.innerText=sum;
    
       
       
       
    }
    else{
        results.innerHTML="DIFFERENT";
        results.style.color="black";
        sum2+=1;
        scores2.innerText=sum2;
        
        
    }
    total_accurary=(sum/(sum2+sum))*100;
    get_blank_accurary.innerText=total_accurary+" %";


    
    
}






