let radios = document.querySelectorAll('.radio');
let labels = document.querySelectorAll('.label');
let ball = document.querySelector('.ball');
let prevRadio, prevLabel;

// default prevRadio on radio1
prevRadio = radios[0];
prevLabel = labels[0];

radios.forEach((radio, index) => {
  radio.addEventListener('click', function(e) {
    if (prevRadio) prevRadio.classList.toggle('active');
    if (prevLabel) prevLabel.classList.toggle('active');
    radio.classList.toggle('active');
    prevRadio = radio;
    labels[index].classList.toggle('active');
    prevLabel = labels[index];
    ball.className = `ball pos${index}`;
  });
});