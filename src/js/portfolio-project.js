// Get JSON
getData();

async function getData() {
	console.log("Running...");

	const url = "./assets/Projects.json";
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const json = await response.json();
		console.log(json);
		console.log("Fetch Complete, Starting HTML Build");
		MakePortfolioProjectHTML(json)
	}
	catch (error) {
		console.error(error.message);
	}
}

// MAIN HTML

function MakePortfolioProjectHTML(projects) {
	const dataContainer = document.querySelector(".portfolio-gallery");

	for (project of projects) {
		console.log(project.title + " Starting Compilation...");
		const projectID = "portfolio-" + project.id;
		const projectCarouselID = projectID + "-Carousel";

		var projectHtml = `
	<div id = "${projectID}" class="portfolio-block container rounded bg-secondary-10 p-3 mt-2" >
		<div class="grid pr-grid">
			<div class="gr-12 gr-lg-8 order-lg-1">
				<h2 class="pr-title border-bottom border-secondary">${project.title}</h2>
				<div class="pr-tags">
					<ul class="d-flex flex-row flex-wrap li-none justify-content-center justify-content-lg-start">
						${GetProjectTags(project.tags)}
					</ul>
				</div>
			</div>
			<div class="gr-12 gr-lg-4 gr-2r order-lg-0">
				<div id="${projectCarouselID}" class="carousel slide pointer-event bg-secondary-subtle-50 aspect-carousel">
					<div class="carousel-inner">
						${GetProjectCarousel(project.media)}
					</div>
					${CanMakeCarouselButtons(project.media) ? `${MakeCarouselButtons(projectCarouselID)}` : ``}
				</div>
				<p class="pr-desc">${project.desc}</p>
			</div>
			<div class="gr-12 gr-lg-8 order-lg-2 d-flex flex-column grid-obj">
				<ul class="pr-notes flex-grow-1">
					${GetProjectNotes(project.notes)}
				</ul>
				${GetGameLink(project.prj_link, project.has_webpage)}
			</div>
		</div>
	</ >
	`
		dataContainer.insertAdjacentHTML("beforeend", projectHtml);
	}

	ConnectModalEvent();
}

function ConnectModalEvent() {
	const imageModal = document.getElementById('imagePreviewModal')
	const modalImageBody = document.getElementById('modalImageBody')
	const imageModalLabel = document.getElementById('imagePreviewModalLabel')

	imageModal.addEventListener('show.bs.modal', (data) => {
		modalImageBody.innerHTML = data.relatedTarget.innerHTML;
		modalImageBody.firstElementChild.className += " w-100"
		imageModalLabel.innerText = modalImageBody.firstElementChild.src.split('/').pop()
	})
}
// Utilities 

function GetFileType(string) {
	const fileSuffix = string.split('.').pop();

	switch (fileSuffix.toLowerCase()) {
		case "mp4" || "webM" || "mov":
			return "video";
			break;
		case "png" || "jpg" || "gif" || "tiff":
			return "image";
			break;
		default:
			break;
	}

	return string.split('.').pop();
}

// Setup basic Project

function GetProjectTitle(project) {
	var projectTitle = `<h2 class="pr-title border-bottom border-secondary">${project.name}</h2>`;
	console.log("\tTitle");
	return `<h2 class="pr-title border-bottom border-secondary">${project.name}</h2>`;
}

function GetProjectNotes(projectNotes) {
	var projectNotesHTML = "";
	for (notes of projectNotes) {
		// Should the note be indented?
		if (notes[0] == ">") {
			projectNotesHTML += `<ul><li class="proj-note-row">${notes.slice(2, notes.length,)}</li></ul>`;
		}
		else {
			projectNotesHTML += `<li class="proj-note-row">${notes}</li>`;
		}
	}
	console.log("\tNotes");
	return projectNotesHTML;
}

function GetProjectTags(projectTags) {
	const tagContent = [
		`<i class="fa-${projectTags.pf_type} fa-${projectTags.pf_icon} me-2"></i> ${projectTags.platform}`,
		`<i class="fa-solid fa-users me-2"></i> ${projectTags.team_size}`,
		`<i class="fa-solid fa-clock me-2"></i> ${projectTags.dev_time}`,
		`<i class="fa-solid fa-calendar-days me-2"></i> ${projectTags.dev_year}`,
	];

	var projectTagHTML = "";
	for (tag of tagContent) {
		projectTagHTML += `<li class="me-2 mt-2">
                <div class="d-flex align-items-center rounded-pill bg-primary-50 px-3 py-1">${tag}</div>
            	</li>`;
	}
	console.log("\tTags");
	return projectTagHTML;
}

function GetGameLink(link, hasWebpage) {
	console.log("\tLink Compiling status... \n\tIs Link Null: " + (link != "null") + "\n\tHas Webpage: " + (hasWebpage == true));

	console.log("\tLink");
	return (link == "null" || project.has_webpage == false) ? `` : `
    <div class="pr-playbtn">
        <a class="btn bg-secondary-30 w-100" href="${link}" role="button">Play Now</a>
    </div>`;
}

// CAROUSEL

/**
 * Creates innerHTML for a project's carousel.
 * @param {string[]} projectMediaStruct Array of struct containing string (image link) and a second string (image alt)
 * @returns the contents of the carousel, with media displayed
 */
function GetProjectCarousel(projectMediaStruct) {

	const prMediaLength = projectMediaStruct.length;
	// if the project has no images/videos insert a placeholder
	if (prMediaLength == 0) {
		return `<div class="carousel-item">
								<div class="d-block placeholder"></div>
							</div>`;
	}

	// if the project has images/videos loop through the contents and create videos
	var media = "";
	var projectCarousel = "";

	for (let i = 0; i < prMediaLength; i++) {
		const mediaStruct = projectMediaStruct[i];

		// Determine if the media is a video or image, then make the corresponding HTML
		media = (GetFileType(mediaStruct.link) == "video") ? MakeVideoHTML(mediaStruct) : MakeImageHTML(mediaStruct);

		projectCarousel += `<div class="carousel-item${i == 0 ? ' active' : ''}">
									<a data-bs-toggle="modal" data-bs-target="#imagePreviewModal">
										${media}
									</a>
								</div>`;
	}

	console.log("\tCarousel");
	return projectCarousel;
}

/**
 * Determines if a carousel should have buttons to switch images.
 * @param {*} projectMediaStruct Array of struct containing string (image link) and a second string (image alt)
 * @returns boolean
 */
function CanMakeCarouselButtons(projectMediaStruct) {
	return (projectMediaStruct.length) > 1;
}

function MakeCarouselButtons(carouselID) {
	return `<button class="carousel-control-prev" type="button"
						data-bs-target="#${carouselID}" data-bs-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Previous</span>
					</button>
					<button class="carousel-control-next" type="button"
						data-bs-target="#${carouselID}" data-bs-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Next</span>
					</button>`;
}

function MakeVideoHTML(video, hasControls = false) {
	return `<video src="${video.link}" type="video/mp4" loop ${hasControls ? "controls" : ""} autoplay muted controlsList="nodownload" class="w-100" >
					Sorry, your browser doesn't support embedded videos.
				</video>`;
}

function MakeImageHTML(image) {
	return `<img src="${image.link}" class="d-block" alt="${image.alt}" />`;
}


const el = document.getElementById("MyName");
el.addEventListener("click", modifyText);

function modifyText() {
	const btn = document.getElementById("workspaceBtn");
	console.log(btn.innerHTML);
	btn.className = "nav-item";
}