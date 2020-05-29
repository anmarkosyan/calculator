//alert('hi there');
//selectors
const offImg = document.getElementById('my_img');
const onBtn = document.getElementById('on');
const offBtn = document.getElementById('off');

//event listeners
onBtn.addEventListener('click',light);
offBtn.addEventListener('click',noLight);

//function
 function light (){
      return offImg.src='3226.13-eco-friendly-bulb-icon-iconbunny.jpg';
 }

 function noLight(){
     return offImg.src='3226.1-eco-friendly-bulb-icon-iconbunny.jpg';
 }



