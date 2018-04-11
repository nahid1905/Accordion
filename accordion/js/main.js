var s1 = document.querySelector("#s1");
var s2 = document.querySelector("#s2");
var s3 = document.querySelector("#s3");
var s4 = document.querySelector("#s4");
var t1 = document.querySelector(".text1");
var t2 = document.querySelector(".text2");
var t3 = document.querySelector(".text3");
var t4 = document.querySelector(".text4");

s1.addEventListener("click",function () {
	t2.classList.remove("active");
	t3.classList.remove("active");
	t4.classList.remove("active");
	t1.classList.add("active");
});

s2.addEventListener("click",function () {
	t1.classList.remove("active");
	t3.classList.remove("active");
	t4.classList.remove("active");
	t2.classList.add("active");
});

s3.addEventListener("click",function () {
	t1.classList.remove("active");
	t2.classList.remove("active");
	t4.classList.remove("active");
	t3.classList.add("active");
});

s4.addEventListener("click",function () {
	t1.classList.remove("active");
	t2.classList.remove("active");
	t3.classList.remove("active");
	t4.classList.add("active");
});