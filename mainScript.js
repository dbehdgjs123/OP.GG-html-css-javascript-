"use strict";
const user = document.getElementsByClassName("search_user"); //검색창 클릭시 즐겨찾기 활성화

const userLatest = document.getElementsByClassName("search_user_latest"); //최근검색 버튼
const userBookmark = document.getElementsByClassName("search_user_bookmark"); //즐겨찾기 버튼

const userBody = user[0].children[1];
const bodyLatest = userBody.children[0];
const bodyBookmark = userBody.children[1];

const uesrRight = document.getElementsByClassName("search_user_item_right");
const star = document.getElementsByClassName("search_user_item_right_star");

const article = document.getElementsByClassName("talk_left_article_item"); //인기글 기사
const question = document.getElementById("questiom_button");

window.onload = function () {
  for (let i = 0; i < star.length; i++) {
    star[i].addEventListener("click", marking);
  }
  for (let i = 0; i < uesrRight.length; i++) {
    uesrRight[i].children[1].className = "search_user_item_right_exit";
    uesrRight[i].children[1].addEventListener("click", removeUser);
  }
  for (let i = 0; i < article.length; i++) {
    article[i].addEventListener("mouseover", articleFocusing);
    article[i].addEventListener("mouseout", articleExiting);
  }
  question.addEventListener("click", scaling);
  userLatest[0].children[0].addEventListener("click", goingLatest);
  userBookmark[0].children[0].addEventListener("click", goingBookmark);
  userLatest[0].children[0].style.color = "black";
};

function showImg() {
  const banner = document.getElementsByClassName("bannerimg_expand");

  //banner[0].style.transform = "scale(1)";

  banner[0].style.transition = "opacity 1s ease";
  banner[0].style.opacity = 1;
  banner[0].style.display = "block";
}
function hideImg() {
  const banner = document.getElementsByClassName("bannerimg_expand");
  //banner[0].style.transform = "scale(0)";
  banner[0].style.opacity = 0;
  banner[0].style.transition = "0.4s";
  banner[0].style.display = "none";
}

function showUser() {
  if (user[0].style.display == "" || user[0].style.display == "none") {
    user[0].style.display = "block";
  }
}
function hideUser() {
  if (user[0].style.display == "block") {
    user[0].style.display = "none";
  }
}
function marking(e) {
  const mark = this.children[0];
  //console.log(this.parentElement.parentElement);
  if (this.className == "search_user_item_right_star") {
    mark.setAttribute("src", "/source/star_on.png");
    this.className = "search_user_item_right_star_mark";
  } else {
    mark.setAttribute("src", "/source/star.png");
    this.className = "search_user_item_right_star";
  }
}
function removeUser(e) {
  const user = this.parentElement.parentElement; //최상위 부모 즉, li를 가져오기 위해 선언
  console.log(user);
  user.remove();
}
function goingBookmark(e) {
  //버튼을 누르면 색상이 바뀌고 그에 대한 정보가 나오게 선언
  bodyLatest.style.display = "none";
  bodyBookmark.style.display = "block";
  userBookmark[0].children[0].style.color = "black";
  userBookmark[0].style.background = "white";
  userLatest[0].style.background = "#e3e3e3";
  userLatest[0].children[0].style.color = "#4a4a4a4a";
}
function goingLatest(e) {
  bodyBookmark.style.display = "none";
  bodyLatest.style.display = "block";
  userLatest[0].children[0].style.color = "black";
  userLatest[0].style.background = "white";
  userBookmark[0].children[0].style.color = "#4a4a4a4a";
  userBookmark[0].style.background = "#e3e3e3";
}
function articleFocusing(e) {
  //기사 포커스
  this.children[2].style.textDecoration = "underline #1F8ECD";
  this.children[2].style.color = "#1F8ECD";
}
function articleExiting(e) {
  //기사에서 마우스가 떼졌을때
  this.children[2].style.textDecoration = "none";
  this.children[2].style.color = "black";
}
function scaling(e) {
  if (this.className == "question_close") {
    this.className = "question_active";
  } else {
    this.className = "question_close";
  }
}
