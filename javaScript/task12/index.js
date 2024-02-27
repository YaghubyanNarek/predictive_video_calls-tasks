const burger = document.querySelector(".header__burger");
const burger__menu = document.querySelector(".burger__menu");
const lastScore = document.querySelector(".score__last");
const FirstScore = document.querySelector(".score__one");
const scoreSecond = document.querySelector(".score__second");
const scoreThird = document.querySelector(".score__third");
burger.onclick = () => {
        lastScore.classList.toggle('noneClass');
        FirstScore.classList.toggle('noneClass');
        scoreSecond.classList.toggle('score__second__add');
        scoreThird.classList.toggle('score__third__add');
        burger__menu.classList.toggle("show");
}