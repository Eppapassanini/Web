document.getElementById('butt_1').onclick = step1;
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
count = 0;
document.getElementById('door1').onclick = door1_ev;
document.getElementById('door2').onclick = door2_ev;
document.getElementById('door3').onclick = door3_ev;
door1 = document.getElementById('door1');
door2 = document.getElementById('door2');
door3 = document.getElementById('door3');
button = document.getElementById('butt_1');
text = document.getElementById('text1');
async function door1_ev() {
    if (count === 0){
        door1.style.pointerEvents = 'none';
        door2.style.pointerEvents = 'none';
        door3.style.pointerEvents = 'none';
        door3.style.transform = "rotate(6deg)";
        await sleep(30);
        door3.style.transform = "rotate(-6deg)";
        await sleep(30);
        door3.style.transform = "rotate(6deg)";
        await sleep(30);
        door3.style.transform = "rotate(-6deg)";
        await sleep(30);
        door3.style.transform = "rotate(0deg)";
        await sleep(500);
        door3.src = "soda.ico";
        text.classList.add('fade');
        await sleep(1000);
        text.textContent = "За третьей дверью лежит проигрыш! Выберите оставшуюся из двух";
        text.classList.remove('fade');
        count = 1;
        door1.style.pointerEvents = 'all';
        door2.style.pointerEvents = 'all';
    }
    else {
        door1.style.pointerEvents = 'none';
        door2.style.pointerEvents = 'none';
        door1.style.transform = "rotate(6deg)";
        await sleep(30);
        door1.style.transform = "rotate(-6deg)";
        await sleep(30);
        door1.style.transform = "rotate(6deg)";
        await sleep(30);
        door1.style.transform = "rotate(-6deg)";
        await sleep(30);
        door1.style.transform = "rotate(0deg)";
        await sleep(500);
        door1.src = "soda.ico";
        text.classList.add('fade');
        await sleep(1000);
        text.textContent = "Упс! Вы проиграли!";
        text.classList.remove('fade');
        await sleep(1000);
        door2.src = "car.png"
        await sleep(2200);
        text.classList.add('fade');
        await sleep(1000);
        text.textContent = "Ничего страшного. В следующий раз вы точно выиграете :3";
        text.classList.remove('fade');
    }
}
async function door2_ev() {
    if (count === 0){
        door1.style.pointerEvents = 'none';
        door2.style.pointerEvents = 'none';
        door3.style.pointerEvents = 'none';
        door3.style.transform = "rotate(6deg)";
        await sleep(30);
        door3.style.transform = "rotate(-6deg)";
        await sleep(30);
        door3.style.transform = "rotate(6deg)";
        await sleep(30);
        door3.style.transform = "rotate(-6deg)";
        await sleep(30);
        door3.style.transform = "rotate(0deg)";
        await sleep(500);
        door3.src = "soda.ico";
        text.classList.add('fade');
        await sleep(1000);
        text.textContent = "За третьей дверью лежит проигрыш! Выберите оставшуюся из двух";
        text.classList.remove('fade');
        count = 1;
        door1.style.pointerEvents = 'all';
        door2.style.pointerEvents = 'all';
    }
    else {
        door1.style.pointerEvents = 'none';
        door2.style.pointerEvents = 'none';
        door2.style.transform = "rotate(6deg)";
        await sleep(30);
        door2.style.transform = "rotate(-6deg)";
        await sleep(30);
        door2.style.transform = "rotate(6deg)";
        await sleep(30);
        door2.style.transform = "rotate(-6deg)";
        await sleep(30);
        door2.style.transform = "rotate(0deg)";
        await sleep(500);
        door2.src = "car.png";
        text.classList.add('fade');
        await sleep(1000);
        text.textContent = "Надо же, вы выиграли!";
        text.classList.remove('fade');
        await sleep(1000);
        door1.src = "soda.ico"
        await sleep(2200);
        text.classList.add('fade');
        await sleep(1000);
        text.textContent = "Поздравляю! Этот приз отныне принадлежит вам.";
        text.classList.remove('fade');
    }
}
async function door3_ev() {
    if (count === 0){
        door1.style.pointerEvents = 'none';
        door2.style.pointerEvents = 'none';
        door3.style.pointerEvents = 'none';
        door1.style.transform = "rotate(6deg)";
        await sleep(30);
        door1.style.transform = "rotate(-6deg)";
        await sleep(30);
        door1.style.transform = "rotate(6deg)";
        await sleep(30);
        door1.style.transform = "rotate(-6deg)";
        await sleep(30);
        door1.style.transform = "rotate(0deg)";
        await sleep(500);
        door1.src = "soda.ico";
        text.classList.add('fade');
        await sleep(1000);
        text.textContent = "За первой дверью лежит проигрыш! Выберите оставшуюся из двух";
        text.classList.remove('fade');
        count = 1;
        door2.style.pointerEvents = 'all';
        door3.style.pointerEvents = 'all';
    }
    else {
        door2.style.pointerEvents = 'none';
        door3.style.pointerEvents = 'none';
        door3.style.transform = "rotate(6deg)";
        await sleep(30);
        door3.style.transform = "rotate(-6deg)";
        await sleep(30);
        door3.style.transform = "rotate(6deg)";
        await sleep(30);
        door3.style.transform = "rotate(-6deg)";
        await sleep(30);
        door3.style.transform = "rotate(0deg)";
        await sleep(500);
        door3.src = "soda.ico";
        text.classList.add('fade');
        await sleep(1000);
        text.textContent = "Упс! Вы проиграли!";
        text.classList.remove('fade');
        await sleep(1000);
        door2.src = "car.png"
        await sleep(2200);
        text.classList.add('fade');
        await sleep(1000);
        text.textContent = "Ничего страшного. В следующий раз вы точно выиграете :3";
        text.classList.remove('fade');
    }
}
async function step1(){
    button.style.display = 'none';
    text.classList.add('fade');
    await sleep(1000);
    text.classList.remove('fade');
    text.textContent = "Пожалуйста, выберите дверь.";
    document.getElementsByClassName('game')[0].classList.add('swipe2')
}
header = document.getElementById('text');
setTimeout(() =>{header.textContent = "Монт-Холл"},2000);
setTimeout(() =>{header.textContent = "Мон-Холл"},2100);
setTimeout(() =>{header.textContent = "Мо-Холл"},2200);
setTimeout(() =>{header.textContent = "М-Холл"},2300);
setTimeout(() =>{header.textContent = "Ми-Холл"},3000);
setTimeout(() =>{header.textContent = "Мит-Холл"},3100);
setTimeout(() =>{header.textContent = "Митт-Холл"},3200);
setTimeout(() =>{header.textContent = "Митти-Холл"},3300);