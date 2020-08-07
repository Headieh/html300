//JSON DATA
var request = new XMLHttpRequest();
request.open("GET", "./data/data.json", false);
request.send(null)
var people = JSON.parse(request.responseText);

//Data templated through
const peopleHTML = people.map(function (el) {
			let person = `
	<div class="container">
	   <div class="middle">
	      <div class="leftside">
	         <!-- used same image as there was only one in the folder and
	            don't want copyright issues for finding others off the internet-->
	         <img src='img/unsplash-headshot.jpg' alt="Headshot of Mr. Steve Smith.
	            Professional looking dude with light blue collared button down shirt,
	            short brown hair and pearly white smile"><br>
	         <div class='name'><strong> ${el['name']} </strong></div>
	         <br>
	         <div class='title'><dfn> ${el['jobTitle']}</dfn></div>
	      </div>
	      <div class="rightside">
	         <div class='company'>${el.company} </div>
	         <div class='experience'>${el.experience}</div>
	         <div class='school'>${el.school}</div>
	         <div class='major'>${el.major}</div>
	         <div class='email'>${el.email}</div>
	         <div class='languages'> ${el.codeLanguages.join(", ")} </div>
	         <div class='linkedin'>
	            <i class="fab fa-linkedin fa-2x"></i>
	            ${el.linkedInUrl}
	         </div>
	      </div>
	   </div>
	</div>
				`;
				return(person);
			}
);

$(".template-hook").append(peopleHTML);
