const start_btn = document.getElementById("start_btn");
const screens = document.querySelectorAll(".screen");
const pilih_serangga_btn = document.querySelectorAll(".pilih_serangga_btn");
const game_container = document.querySelector(".game_container");
const scoreEl = document.getElementById("score");
const pesan = document.getElementById("pesan");

let score = 0;
let pilih_serangga = {};

start_btn.addEventListener('click', function(){
    screens[0].classList.add('up');
});

pilih_serangga_btn.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img');
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');

        pilih_serangga = {
            src,
            alt
        };
        screens[1].classList.add('up');
        setTimeout(buatSerangga, 1000);
        start_game();
    });
});

function tambahSerangga()
{
    setTimeout(buatSerangga, 1000);
    setTimeout(buatSerangga, 1500);
}

function buatSerangga(){
    const serangga = document.createElement('div');
    const { x, y } = getRandomLocation();
    serangga.classList.add('serangga');
    serangga.style.left = `${x}px`;
    serangga.style.top = `${y}px`;
    serangga.innerHTML = `<img src="${pilih_serangga.src}" arc="${pilih_serangga.alt}" style="transform:rotate(${Math.random() * 360}deg)"/>`
    serangga.addEventListener('click', tangkapSerangga);

    game_container.appendChild(serangga);
}

function tangkapSerangga(){
    hitungScore();
    this.classList.add('tertangkap');
    setTimeout(() => {
        this.remove();
    }, 1000);
    tambahSerangga();
}

function hitungScore(){
    score++;
    if(score > 10){
        pesan.classList.add('visible');
    }

    scoreEl.innerHTML = `Score: ${score}`;
}

function start_game()
{
}

function getRandomLocation()
{
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;

    return {
        x,
        y
    };
}
