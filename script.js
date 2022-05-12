let keyboard = document.createElement('div');
keyboard.className = 'klava';

let input = document.createElement('textarea');
input.id = 'vvod';

let all_bykvi_zero = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
let klava_row_zero = document.createElement('div');
klava_row_zero.className = 'row';
let element0 = all_bykvi_zero.map(bykva => {
  let button = document.createElement('div');
  button.id = bykva;
  button.innerText = bykva;
  button.className = 'bykvi';
  button.addEventListener('click', function() {
    input.innerHTML += bykva;
    button.classList.add('active');
  });
  return button;
})
klava_row_zero.append(...element0);

let all_bykvi_first = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'];
let klava_row_first = document.createElement('div');
klava_row_first.className = 'row';

let element1 = all_bykvi_first.map(bykva => {
  let button = document.createElement('div');
  button.id = bykva;
  button.innerText = bykva;
  button.className = 'bykvi';
  button.addEventListener('click', function() {
    input.innerHTML += bykva;
    button.classList.add('active');
  });
  return button;
});
klava_row_first.append(...element1);
let all_bykvi_second = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'];

let klava_row_second = document.createElement('div');
klava_row_second.className = 'row';
let element2 = all_bykvi_second.map(bykva => {
  let button = document.createElement('div');
  button.id = bykva;
  button.innerText = bykva;
  button.className = 'bykvi';
  button.addEventListener('click', function() {
    input.innerHTML += bykva;
    button.classList.add('active');
  });
  return button;
})
klava_row_second.append(...element2);

let all_bykvi_third = ['Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '\/', '↑', 'Shift'];
let klava_row_third = document.createElement('div');
klava_row_third.className = 'row';
let element3 = all_bykvi_third.map(bykva => {
  let button = document.createElement('div');
  button.id = bykva;
  button.innerText = bykva;
  button.className = 'bykvi';
  button.addEventListener('click', function() {
    input.innerHTML += bykva;
    button.classList.add('active');
  });
  return button;
})

klava_row_third.append(...element3);
klava_row_third.firstElementChild.classList.add("ShiftL");

let all_bykvi_fourth = ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→'];
let klava_row_fourth = document.createElement('div');
klava_row_fourth.className = 'row';
let element4 = all_bykvi_fourth.map(bykva => {
  let button = document.createElement('div');
  button.id = bykva;
  button.innerText = bykva;
  button.className = 'bykvi';
  button.addEventListener('click', function() {
    input.innerHTML += bykva;
    button.classList.add('active');
    //button.classList.remove('active');
  });
  return button;
})
klava_row_fourth.append(...element4);

keyboard.append(klava_row_zero, klava_row_first, klava_row_second, klava_row_third, klava_row_fourth);







document.body.append(input, keyboard);

document.onkeydown = function(event) {
  input.innerHTML += event.key;
  let light = document.getElementById(event.key);
  light.classList.add('active');
}
document.onkeyup = function(event) {
  let lightremove = document.querySelectorAll('.active');
  lightremove.forEach(function(active) {
    active.classList.remove('active');
  })
}
keyboard.onmouseup = function(event) {
  let lightremove = document.querySelectorAll('.active'); 
  lightremove.forEach(function(active) {
    active.classList.remove('active');
  })
}




























