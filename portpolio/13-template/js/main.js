const grid = new Isotope("section", {
  //배치할 요소를 감싸고 있는 부모 요소명
  itemSelesctor: "article", //배치할 요소명
  columnWidth: "article", //넓이값을 구할 요소명
  transitionDuration: "0.5s", //화면 재배치시 요소가 움직이는 속도
});

//클릭할 모든 버튼 요소 변수에 저장
const btns = document.querySelectorAll("main ul li");

//버튼의 갯수만큼 반복을 돌면서(텍스트 힌트로 버튼구분)
for (let el of btns) {
  el.onclick = function (event) {
    //alert("click"+el.querySelector('a').innerText);

    //변수 sort에 클릭한 대상의 자식인 a요소의 href 속성값 저장(눌린 대상 a 안에 href 잠깐 가져와)
    const sort = this.querySelector("a").getAttribute("href");
    //alert(sort); this=currentTarget

    //grid에 저장된 결과값을 불러와 재정렬 기능 연결
    grid.arrange({
      //옵션값으로 sort변수값 지정
      filter: sort
    });

    //다시 모든 버튼의 갯수만큼 반복을 돌면서
    for (let el of btns) {
      //각 버튼의 클래스명 "on"을 제거해 비활성화
      el.classList.remove("on");
    }

    //클릭한 대상만 선택해서 클래스명 "on"을 추가해 활성화
    this.classList.add("on");
    return false; //클릭할 때 페이지 안넘어가게
  }
}
