const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const slide = document.querySelector(".slide");

const arr = ['img1.jpg', 'img2.jpeg', 'img3.webp', 'img4.jpeg'];

slide.src = `img/${arr[0]}`;
let count = 0;
next.onclick = () => {
    if (count < arr.length - 1) {
        count++;
        slide.src = `img/${arr[count]}`;
    }
    else {
        count = 0;
        slide.src = `img/${arr[count]}`;
    }
}

previous.onclick = () => {
    if (count > 0) {
        console.log(count)
        count--;
        slide.src = `img/${arr[count]}`;
    }
    else {
        count = arr.length - 1;
        slide.src = `img/${arr[count]}`;
    }
}