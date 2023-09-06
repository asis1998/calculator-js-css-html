let numberValue =JSON.parse(localStorage.getItem('numberValue')) || '' ;
    function numberButton(num){
  numberValue += num ;
  
  document.querySelector('.js-display1')
  .innerHTML = numberValue ;
  
}
    function isEqualTo(){
      document.querySelector('.js-display2')
      .innerHTML = numberValue ;
    }