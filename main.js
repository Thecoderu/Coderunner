document.addEventListener('DOMContentLoaded', function () {
    const numberInput = document.getElementById('numberInput');
    const plusOneBtn = document.getElementById('plusOne');
    const minusOneBtn = document.getElementById('minusOne');
    const plusTenBtn = document.getElementById('plusTen');
    const minusTenBtn = document.getElementById('minusTen');
  
    plusOneBtn.addEventListener('click', function () {
      numberInput.value = parseInt(numberInput.value) + 1;
    });
  
    minusOneBtn.addEventListener('click', function () {
      numberInput.value = parseInt(numberInput.value) - 1;
    });
  
    plusTenBtn.addEventListener('click', function () {
      numberInput.value = parseInt(numberInput.value) + 10;
    });
  
    minusTenBtn.addEventListener('click', function () {
      numberInput.value = parseInt(numberInput.value) - 10;
    });
  });

  