
var bio = {
	"name" : "Jeisse Rocha",
	"role" : "Web Developer",
	"Contacts" : {
		"email" : "jeisserocha@gmail.com",
		"mobile" : "+353-83-1859999",
		"gitHub" : "jeisse",
		"location" : "Dublin"
	},
	"wellComeMessage" : "Obsessive thoroegh responsive web develpemnt, with HTML 5, CSS 3, jQuery and Bootstrap",
	"skill" : ["HTML5", "CSS3", "JS", "jQuery", "Angular", "Java", "GIT", "PHP", "Scrum", "Analysis", "SQL"],
	"myPicture" : "images/jr.png"
}

var work = {
	"jobs" : [
		{
			"employer" : "Xetec LTDa",
			"position" : "Software Developer",
			"years" : 2015,
			"period" : 1.6
		},
		{
			"employer" : "Terra.com",
			"position" : "Web Developer",
			"years" : 2013,
			"period" : 1.4
		}
	],
	"trainee" : [
		{
		  "employer" : "Cia Salux",
		  "position" : "Software Developer",
		  "years" : 2012,
		  "period" : 1.1
		},
		{
			"employer" : "Cia Star4",
			"position" : "Software Developer",
			"years" : 2011,
			"period" : 0.8
		}
	]
};


var project ={
	"projects" : [
		{
			"title" : "TerraTv",
			"dates" : 2013,
			"description" : "New portal to show all videos related to the..."
		},
		{
			"title" : "Olympic Games, London 2012",
			"dates" : 2012,
			"description" : "Olympic Games London 2012 special content for Terra."
		}
	]
};
  
var education = {
	"schools" : [
		{
			"name" : "Front-End Web Developer Nanodeegree",
			"years" : 0.6,
			"city" : "Dublin - IE",
			"dates" : 2015
		},
		{
			"name" : "FATEC - Senac RS",
			"years" : 4.0,
			"city" : "Porto Alegre - RS, Brazil",
			"dates" : 2013
		}
		],
	"onlineCourses" : [
		{
			"title" : "Learn how to learn",
			"school" : "Coursera",
			"dates" : 2015,
			"url" : ""
		}
	]
};

function setBioInformation(place) {
	$(place).prepend(fomatedEmail);  
	$(place).prepend(fomatedMobile);  
	$(place).prepend(fomatedGitHub);  
	$(place).prepend(fomatedLocation);
}

function setSkillsList(bio){
	var fomatedSkills = [];

	for(i=0; i < bio.skill.length; i++ ){
		var skill = HTMLskills.replace("%data%", bio.skill[i]);
		fomatedSkills.push( skill);
	}
	return fomatedSkills;
}


var formatedName = HTMLheaderName.replace("%data%", bio.name);
var formatedRole = HTMLheaderRole.replace("%data%", bio.role);

var fomatedEmail = HTMLemail.replace("%data%", bio.Contacts.email);
var fomatedMobile = HTMLmobile.replace("%data%", bio.Contacts.mobile);
var fomatedGitHub = HTMLgithub.replace("%data%", bio.Contacts.gitHub);
var fomatedLocation = HTMLlocation.replace("%data%", bio.Contacts.location);

var formatedMessage = HTMLwelcomeMsg.replace("%data%", bio.wellComeMessage);
var formatedPicture = HTMLbioPic.replace("%data%", bio.myPicture);


$("#header").prepend(formatedPicture);
$("#header").prepend(formatedRole);
$("#header").prepend(formatedName);

setBioInformation("#topContacts");



$("#topContacts").after(HTMLskillsStart);
$("#skills").append(setSkillsList(bio));


$("#topContacts").after(formatedMessage);


setBioInformation("#footerContacts");

$(".biopic").addClass("mask-picture");


/**
  
    if(document.getElementsByClassName('flex-item').length === 0) {
      document.getElementById('topContacts').style.display = 'none';
    }
    if(document.getElementsByTagName('h1').length === 0) {
      document.getElementById('header').style.display = 'none';
    }
    if(document.getElementsByClassName('work-entry').length === 0) {
      document.getElementById('workExperience').style.display = 'none';
    }
    if(document.getElementsByClassName('project-entry').length === 0) {
      document.getElementById('projects').style.display = 'none';
    }
    if(document.getElementsByClassName('education-entry').length === 0) {
      document.getElementById('education').style.display = 'none';
    }
    if(document.getElementsByClassName('flex-item').length === 0) {
      document.getElementById('lets-connect').style.display = 'none';
    }
   if(document.getElementById('map') === null) {
     document.getElementById('map-div').style.display = 'none';
   }

 **/
