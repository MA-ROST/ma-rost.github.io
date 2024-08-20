var projects = [
	{
		id: "rcr",
		title: "Rift City Rebels",
		has_webpage: false,
		tags: {
			platform: "UE5",
			pf_icon: "screwdriver-wrench",
			pf_type: "solid",
			team_size: 16,
			dev_time: "4 Months",
			dev_year: 2024,
			status: "complete",
		},
		video_link: "https://www.youtube.com/embed/C55_lTlCom4?si=_nEagzAaDimcDr0i",
		project_link: "https://dobibo.itch.io/rift-city-rebels",
		prj_icon: "itch-io",
		prj_notes: [
			"Lead UI Developer",
			"> Created the Controller-To-UI system, allowing for both Keyboard and Game Controllers interact with menu's",
			"> Developed Character Select UI, which allows multiple users to interact at once",
			"Developer of Matcha/The Snowboarder character",
			"> Assisted with creating movement based actions, such as snowboarding across platforms",
			"Helped with designing the layout for the Game Manual",
		],
		prj_short_desc:
			"Rift City Rebels is a 2.5d platform fighter, developed as the capstone project for my last term in the Game Development program.",
	},
	{
		id: "gh",
		title: "Goblin Hunt VR",
		has_webpage: false,
		tags: {
			platform: "UE5",
			pf_icon: "screwdriver-wrench",
			pf_type: "solid",
			team_size: 3,
			dev_time: "1 Month",
			dev_year: 2023,
			status: "complete",
		},
		video_link:
			"https://drive.google.com/file/d/1obQMGit8Lz3gBq4D19517x2JvAsnvvVb/preview",
		project_link: "https://tinycoderknight.itch.io/goblin-hunt",
		prj_icon: "itch-io",
		prj_notes: [
			"UI",
			"Developed an enemy entity-manager system based on the mediator pattern",
			"> This system determines which of the three squads should shoot at the player",
			"Bomb reactivity",
			"Score Managers",
		],
		prj_short_desc:
			"Goblin Hunt VR is an arcade style shooter where you must catch bombs shot by goblins and throw them back at them to score points. ",
	},
	{
		id: "zecro",
		title: "Zecromancer VR",
		has_webpage: false,
		tags: {
			platform: "UE5",
			pf_icon: "screwdriver-wrench",
			pf_type: "solid",
			team_size: 9,
			dev_time: "6 Weeks",
			dev_year: 2023,
			status: "unfinished",
		},
		video_link:
			"https://drive.google.com/file/d/1f8tbryEl48hnJz4UMXleq_SKYSQF2VDt/preview",
		project_link: "null",
		prj_icon: "itch-io",
		prj_notes: [
			"Created a Gesture System that compares the controller's movement in relation to the headset determining the direction of motion.",
			"> Used playtests feedback to create multiple iterations of the Gesture system.",
			"Created a nav-mesh based teleportation system that would bring the zombie AI's with the player.",
		],
		prj_short_desc:
			"A Virtual Reality game where you are a necromancer controlling a growing hoarde of zombies. Use simple gestures to direct your minions to their destination.",
	},
	{
		id: "ptp",
		title: "Prototype the Platformer",
		has_webpage: false,
		tags: {
			platform: "Unity2D",
			pf_icon: "unity",
			pf_type: "brands",
			team_size: 1,
			dev_time: "2 Weeks",
			dev_year: 2023,
			status: "complete",
		},
		video_link:
			"https://drive.google.com/file/d/14QeJR4dG8N56jrsBPG35VGP0Jh4Y2REk/preview",
		project_link: "null",
		prj_icon: "itch-io",
		prj_notes: [
			"Custom Character Controller",
			"> Player has coyote time, can jump with differing heights based on the time the key was down, and double jump",
			"> Player can ",
			"Checkpoint System that brings players back to it on death",
			"Turret enemies with customizable rates and speeds",
			"Location based area obscurer",
		],
		prj_short_desc:
			"A short game i created for an assignment to reenforce our skills in mechanic and level design.",
	},
	{
		id: "dronce",
		title: "Drone Race",
		has_webpage: false,
		tags: {
			platform: "Unity3D",
			pf_icon: "unity",
			pf_type: "brands",
			team_size: 1,
			dev_time: "1 Month",
			dev_year: 2023,
			status: "complete",
		},
		video_link:
			"https://drive.google.com/file/d/1hi4NubHtGhbC-ooxKz8VM3FtMU_puXFX/preview",
		project_link: "null",
		prj_icon: "itch-io",
		prj_notes: [
			"Character Controller",
			`> Researched the way that <a href="#" data-bs-toggle="tooltip" data-bs-title="Using the Drone Racing League Simulator">drones fly</a> to make flying feel as accurate as possible`,
			"Score System",
			"Designed and Created all models and animations found in the game",
			"> The Drone flyer was a particular highlight",
			"> Researched professional drone flying competitions to gather real obstacles used in the races.",
		],
		prj_short_desc:
			"A short obstacle based flying game inspired by Drone races. Made for an assignment where we had to create Starfox inspired character controllers",
	},
	{
		id: "fta",
		title: "Fear the Abyss",
		has_webpage: false,
		tags: {
			platform: "UE5",
			pf_icon: "screwdriver-wrench",
			pf_type: "solid",
			team_size: 2,
			dev_time: "2 Months",
			dev_year: 2023,
			status: "complete",
		},
		video_link:
			"https://drive.google.com/file/d/1b_aszUaU4D8uylzTlekfhVnHM9024Yov/preview",
		project_link: "https://dobibo.itch.io/fear-the-abyss",
		prj_icon: "itch-io",
		prj_notes: [
			"Lead UI Developer",
			"> Custom Dialogue System with interchangeable sprites",
			"Main Menu, Options Menu & Credits Menu",
			"Tentacle Enemy AI",
		],
		prj_short_desc:
			"Fear the Abyss is a 2.5d action game where you must navigate around and defend yourself with your trusty harpoon in order to escape the ship being invaded by a giant kracken.",
	},
	{
		id: "guardian",
		title: "Guardian Roadblock",
		has_webpage: false,
		tags: {
			platform: "UE5",
			pf_icon: "screwdriver-wrench",
			pf_type: "solid",
			team_size: 1,
			dev_time: "1 Month",
			dev_year: 2023,
			status: "complete",
		},
		video_link: "https://www.youtube.com/embed/O6m3QySyrok?si=gg4BVuRqA0Ap11XU",
		project_link: "https://tinycoderknight.itch.io/guardian-roadblock",
		prj_icon: "itch-io",
		prj_notes: [
			"Paper2D",
			"Velocity based Sprite Machine",
			"Custom Branching Dialogue System with options",
			"Dynamically layered sprites",
		],
		prj_short_desc:
			"Guardian Roadblock is a short and sweet puzzle game where a strange stone guardian blocks your way into town. To win the game you must tell it the correct code. ",
	},
	{
		id: "gol",
		title: "Game of Life",
		has_webpage: false,
		tags: {
			platform: "C++",
			pf_icon: "file-code",
			pf_type: "solid",
			team_size: 1,
			dev_time: "1 Month",
			dev_year: 2022,
			status: "complete",
		},
		video_link: "https://www.youtube.com/embed/X_P_8SaY34o",
		project_link: "https://github.com/ma-rost/gameOfLife",
		prj_icon: "github",
		prj_notes: [
			"OpenFrameworks",
			'Implements the <a href="https://rustwasm.github.io/book/game-of-life/rules.html" target="_blank">4 rules of life</a>.',
			"The grid can be grown an shrunk",
			"Cells can manually be filled on the grid by clicking on them or dragging your mouse",
			"The cells can be both completely cleared, and randomly filled.",
		],
		prj_short_desc:
			"A Recreation of John Conway's Game Of Life in OpenFrameworks C++. This was given to us as an assignment to test our knowledge on C++ at the end of the first term of the course.",
	},
	{
		id: "IYS",
		title: "Invade Your Space",
		has_webpage: false,
		tags: {
			platform: "C++",
			pf_icon: "file-code",
			pf_type: "solid",
			team_size: 1,
			dev_time: "1 Month",
			dev_year: 2022,
			status: "complete",
		},
		video_link: "https://www.youtube.com/embed/YCeItVf0FqQ",
		project_link: "https://github.com/ma-rost/InvadeYourSpace",
		prj_icon: "github",
		prj_notes: [
			"OpenFrameworks",
			"Features all core mechanics in Space Invaders",
		],
		prj_short_desc:
			"A recreation of Space Invaders. This assignment was a test to our skills in what we had learned in C++, challenging us to rebuild iconic games with OpenFrameworks C++",
	},
	{
		id: "errand",
		title: "Errand Run",
		has_webpage: false,
		tags: {
			platform: "Unity3D",
			pf_icon: "unity",
			pf_type: "brands",
			team_size: 1,
			dev_time: "2 months",
			dev_year: 2021,
			status: "complete",
		},
		video_link: "https://www.youtube.com/embed/buCYXeM7nMo?si=0O4mRQ9IbwKuzlDE",
		project_link: "https://tinycoderknight.itch.io/errand-run",
		prj_icon: "itch-io",
		prj_notes: [
			"Sole Developer and Artist",
			"Modeled and textures a majority of assets",
			"Mesh instantiation in large amounts",
			"Checklist system",
		],
		prj_short_desc:
			"The project I used to make my way into the RRC Polytechnic Game Development Course.",
	},
];

function GetProjectStatusIcon(project) {
	var projectStatus = "";
	if (project.tags.status == "complete") {
		projectStatus = `circle-check`;
	} else if (project.tags.status == "unfinished") {
		projectStatus = `circle-stop`;
	} else if (project.tags.status == "prototype") {
		projectStatus = `circle-info`;
	} else if (project.tags.status == "in progress") {
		projectStatus = `clock`;
	} else if (project.tags.status == "on hold") {
		projectStatus = `circle-pause`;
	}

	return projectStatus;
}

function GetProjectNotes(project) {
	var projectNotes = "";
	for (notes of project.prj_notes) {
		if (notes[0] == ">") {
			projectNotes += `<ul><li class="proj-note-row">${notes.slice(
				2,
				notes.length,
			)}</li></ul>`;
		} else {
			projectNotes += `<li class="proj-note-row">${notes}</li>`;
		}
	}
	return projectNotes;
}

function GetProjectTitle(project) {
	var projectTitle = "";
	if (project.has_webpage) {
		projectTitle = `<h2 class="fw-semibold port-prog-name d-inline flex-fill">${project.title}</h2>
				<i class="fa-solid fa-right-long fa-xl arrow-pulse"></i>`;
	} else {
		projectTitle = `<h2 class="fw-semibold port-prog-name d-inline flex-fill">${project.title}</h2>`;
	}

	return projectTitle;
}

function GetProjectLink(project) {
	var projectLink = "";
	if (project.project_link == "null") {
		projectLink = `<a class="btn btn-secondary w-100 disabled" href="${project.project_link}" target="_blank" role="button" aria-disabled="true"><i class="fa-solid fa-circle-exclamation"></i> Link</a>`;
	} else {
		let color = "primary";
		project.project_link.includes("github") ? (color = "primary") : "danger";
		projectLink = `<a class="btn btn-${color} w-100" href="${project.project_link}" target="_blank" role="button"><i class="fa-brands fa-${project.prj_icon}"></i> Link</a>`;
	}
	return projectLink;
}

function GetProjectTags(project) {
	var projectTags = "";
	projectTags = `<span class="prog-tag btn bg-secondary mt-1">
						<i class="fa-${project.tags.pf_type} fa-${project.tags.pf_icon}"></i> 
						${project.tags.platform}</span>
					<span class="prog-tag btn bg-secondary mt-1"><i class="fa-solid fa-users"></i> 
						${project.tags.team_size}</span> 
					<span class="prog-tag btn bg-secondary mt-1"><i class="fa-solid fa-clock"></i> 
						${project.tags.dev_time}</span> 
					<span class="prog-tag btn bg-secondary mt-1"><i class="fa-solid fa-calendar-days"></i> 
						${project.tags.dev_year}</span> 
					<span class="prog-tag btn bg-secondary mt-1 text-capitalize">
						<i class="fa-solid fa-${GetProjectStatusIcon(project)}"></i> 
						${project.tags.status}</span>`;
	return projectTags;
}

var dataContainer = document.querySelector(".portfolio-gallery");
for (project of projects) {
	var projectCollapseID = "collapseNotes" + project.id;

	var projectHtml = `
		<div class="col">
			<div class="portfolio-project bg-body-tertiary card overflow-hidden">
				<div class="">
					<iframe
						src="${project.video_link}"
						allow="autoplay"
						class="rounded youtube-video"></iframe>
				</div>
				<div class="mx-4">
					<div class="port-proj-tags my-2 mx-auto text-center gy-5" onload="myFunction()">
						${GetProjectTags(project)}
					</div>
					<div class="d-flex align-items-center">
						${GetProjectTitle(project)}
					</div>
					<div class="game-link">
						${GetProjectLink(project)}
					</div>
					<div class="my-2"> 
						<div class="row">
							<p class="col mb-1">${project.prj_short_desc}
							</p>
							<a class="col-auto float-end mt-auto" data-bs-toggle="collapse"
								href="#${projectCollapseID}" role="button" aria-expanded="false"
								aria-controls="${projectCollapseID}" id="collapser" onclick="onClickCollapse(this)" >
								<i class="fa-solid fa-caret-down" data-toggle="tooltip" title="Open Project notes"></i>
							</a>
						</div>
						<div class="collapse" id="${projectCollapseID}">
							<hr class="my-2">
							<ul class="proj-notes">
								${GetProjectNotes(project)}
							</ul>
						</div>
					</div>
						
				</div>
			</div>
		</div>`;
	dataContainer.insertAdjacentHTML("beforeend", projectHtml);
	console.log("finished " + project.title);
}
