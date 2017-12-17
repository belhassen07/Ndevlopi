var allCourses = document.querySelectorAll(".all");
var MyCourses = document.querySelectorAll(".my-course");

document.querySelectorAll(".switch-titles a ")[0].onclick = function(e){
	
	e.preventDefault();
	 this.className += " active-courses";
	 this.parentNode.lastElementChild.className -=" active-courses";
	 
	 for(course of allCourses){
	 	course.style.display = "block"
	 }
	 for(course of MyCourses){
	 	course.style.display = "none"
	 }
}
document.querySelectorAll(".switch-titles a ")[1].onclick = function(e){

	e.preventDefault();
	 this.className += " active-courses";
	 this.parentNode.firstElementChild.className -=" active-courses"
	for(course of allCourses){
	 	course.style.display = "none"
	 }
	for(course of MyCourses){
	 	course.style.display = "block"
	 }
}