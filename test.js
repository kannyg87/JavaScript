// function changeBackground(){
//     var div = document.getElementById('1');
//     div.setAttribute('style', 'background-color: green')
//   }
//   var span = document.getElementById('2');
//   span.onclick = function(){
//       span.setAttribute('style','background-color: red; height: 300px; width: 100%')
    
//   }

const div1 = document.getElementById( 'div1' );
div1.addEventListener( 'click', ( e ) => {
e.target.style.backgroundColor = 'red';
}, false);