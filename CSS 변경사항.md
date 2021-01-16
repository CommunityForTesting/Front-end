# CSS 변경사항

* **_reset.scss**에서 root에 `font-size: 1vw;` 를 사용해 화면크기에 비례하는 기준 font-size를  설정.
* 그 외 모든 font-size는 rem을 이용해서 지정.
* 홈화면 기준으로 글자가 Box를 넘어가는 1050px를 min-width로 지정.
* left, right로 구분해 놓은 부분에서 공통인 부분은 묶어서 선언, 차이가 있는 부분은 따로 선언.