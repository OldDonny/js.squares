
  var button= document.createElement('button');
  var squareCount= 0;
  button.innerText='Add Square';
 


document.addEventListener('DOMContentLoaded', function(){
  
    document.body.appendChild(button);
   
});

button.addEventListener('click',function(){

      var colors=['purple','orange','teal','blue','pink','black','white'];
        var h1= document.createElement('h1')
        var newDiv= document.createElement('div');
        newDiv.className= 'box';
        newDiv.id= squareCount;
        squareCount++;
        newDiv.appendChild(h1)
        document.body.appendChild(newDiv);
        newDiv.onmouseover=function(){
          h1.innerText = newDiv.id;
        }
        newDiv.onmouseleave=function(){
          h1.innerText ='';
        }
        
       newDiv.addEventListener('click',function(){
          newDiv.style.backgroundColor=getRandomColor(); 
        
       });

  newDiv.addEventListener('dblclick',function(){
    if (newDiv.id % 2===0) {
      alert('to the left to the left')
      newDiv.nextSibling.remove();
      var bigbox=document.createElement('div');
      bigbox.className=info_blast;
      document.body.appendChild(bigbox);
    }else if(newDiv.previousSibling===button) {
      
    } 
    else { 
      alert('to the right to the right');
      newDiv.previousSibling.remove();
    
  }
  })






      

 
        

});



function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
