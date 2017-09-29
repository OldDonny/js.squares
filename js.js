
  var button= document.createElement('button');
  var squareCount= 0;
  button.innerText='Add Square';
 


document.addEventListener('DOMContentLoaded', function(){
  
    document.body.appendChild(button);
   
});

button.addEventListener('click',function(){
        var h1= document.createElement('h1')
        var newDiv= document.createElement('div');
        newDiv.className= 'box';
        newDiv.id= squareCount;
        squareCount++;
        h1.innerText = newDiv.id;
        newDiv.appendChild(h1)
        document.body.appendChild(newDiv);
        
        

});

