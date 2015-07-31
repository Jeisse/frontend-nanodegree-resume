
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
			"title" : "Software Developer",
			"dates" : "Desember 2013 until now",
			"location" : "Bray, IE",
			"description" : 'Some description here'
		},
		{
			"employer" : "Terra.com",
			"title" : "Web Developer",
			"dates" : "March 2012 until August 2013",
			"location" : "Porto Alegre, Brazil",
			"description" : 'Worked on several teams and different fronts, such as special pages for the London Olympics, and UX CMS migration standardization for Spain, calendar pages of sports, new pages of videos portal Terra.'
		},
		{
			"employer" : "Procergs",
			"title" : "Software Developer",
			"dates" : "January 2012 until April 2012",
			"location" : "Porto Alegre, Brazil",
			"description" : 'Worked with Java EE and Oracle on a ERP.'
		},
		{
			"employer" : "Cia Salux",
			"title" : "Software Developer",
			"dates" : "January 2011 until January 2012",
			"location" : "Porto Alegre, Brazil",
			"description" : 'Worked with Powerbuilder and Oracle on a ERP for Hospitals.'
		},
		{
			"employer" : "Cia Star4",
			"title" : "Software Developer",
			"dates" : "June 2010 until January 2011",
			"location" : "Taquara, RS, Brazil",
			"description" : 'Worked with Javascript and Php on a ERP for the footwear market.'
		}
	]
};


var project ={
	"projects" : [
		{
			"title" : "FlexMaint Software",
			"dates" : 2014,
			"description" : "A CMMS Software migrated fromn a desktop version to a new web based version.",
			"image" : "images/flexmaint.png"
		},
		{
			"title" : "TerraTv",
			"dates" : 2013,
			"description" : "New portal to show all videos related to the...",
			"image" : "images/terratv.jpg"
		},
		{
			"title" : "Easilocks WebSite",
			"dates" : 2015,
			"description" : "Easilocks WebSite is to know moe about the brand, purchase products, buy training, find physical stores all over the world and some more functions.",
			"image" : "images/easilocks.png"
		}
	]
};
  
var education = {
	"schools" : [
		{
			"name" : "FATEC - Senac RS",
			"degree" : "Higher Level",
			"dates" : "2013",
			"city" : "Porto Alegre - RS, Brazil",
			"major" : "Ver o que colocar aqui"
		}
		],
	"onlineCourses" : [
		{
			"title" : "Front-End Web Developer Nanodeegree",
			"school" : "Nanodeegree",
			"dates" : "2015",
			"url" : "http://"
		},
		{
			"title" : "Learn how to learn",
			"school" : "Coursera",
			"dates" : 2015,
			"url" : "http://"
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

function setWorkJobs(work, place){
	
	for(job in work.jobs ){
		var workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var workTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var workDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var workLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var workDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(place).append(workEmployer);
		$(place).append(workTitle);
		$(place).append(workDates);
		$(place).append(workLocation);
		$(place).append(workDescription);
	}
}

function setProject(project, place){
	
	for(proj in project.projects ){
		var projectTitle = HTMLprojectTitle.replace("%data%", project.projects[proj].title);
		var projectDates = HTMLprojectDates.replace("%data%", project.projects[proj].dates);
		var projectDescription = HTMLprojectDescription.replace("%data%", project.projects[proj].description);
		var projectImage = HTMLprojectImage.replace("%data%", project.projects[proj].image);

		$(place).append( "<div id='proj"+proj+"' class='project'></div>");
		$("#proj"+proj).append(projectTitle);
		$("#proj"+proj).append(projectDates);
		$("#proj"+proj).append(projectDescription);
		$("#proj"+proj).append(projectImage);
	}
}

function setSchools(education, place){
	
	for(school in education.schools){
		var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var schoolDegree = HTMLschoolDegree.replace("%data%",  education.schools[school].degree);
		var schoolDates = HTMLschoolDates.replace("%data%",  education.schools[school].dates);
		var schoolLocation = HTMLschoolLocation.replace("%data%",  education.schools[school].location);
		var schoolMajor = HTMLschoolMajor.replace("%data%",  education.schools[school].major);
 
		$(place).append(schoolName);
		$(place).append(schoolDegree);
		$(place).append(schoolDates);
		$(place).append(schoolLocation);
		$(place).append(schoolMajor);
	}
}

function setOnlineCourses(education, place){
	
	for(onlineC in education.onlineCourses){
		var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineC].title);
		var onlineSchool = HTMLonlineSchool.replace("%data%",  education.onlineCourses[onlineC].school);
		var onlineDates = HTMLonlineDates.replace("%data%",  education.onlineCourses[onlineC].dates);
		var onlineURL = HTMLonlineURL.replace("%data%",  education.onlineCourses[onlineC].url);

		$(place).append(onlineTitle);
		$(place).append(onlineSchool);
		$(place).append(onlineDates);
		$(place).append(onlineURL);	
	}
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

$("#workExperience").append(HTMLworkStart);
setWorkJobs(work, ".work-entry");

$("#projects").append(HTMLprojectStart);
setProject(project, ".project-entry");

$('div.project-entry img').css({'width' : '360px' , 'height' : '207px'});

$("#education").append(HTMLschoolStart);
setSchools(education, ".education-entry");



setOnlineCourses(education, ".education-entry");
$("#education").append(HTMLonlineClasses);

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
