const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const deg = 45; //각각의 article요소가 회전할 각도
const len = lists.length-1; //순번이 0부터 시작하므로 전체 개수에서 1을 빼줌
let i = 0;
let num = 0;
let active = 0;

//아티클의 개수만큼 반복
for(let el of lists) {
    //각 아티클 요소를 45도씩 회전하고 아래로 배치,45도 X 0~7 위치기준은 -100vh*
    el.style.transform = `rotate(${deg* i}deg) translateY(-100vh)`//큰따옴표 아니고 물결밑에 있는거

    let pic = el.querySelector(".pic");
    pic.style.backgroundImage = `url(img/member${i+1}.jpg)`;

    i++;
}