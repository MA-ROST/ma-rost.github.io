SetupJS();

var assetImagePath;
var domain;

function SetupJS() {
	domain = `${location.protocol}//${location.host}`;
	PrintLocationData();
}

function PrintLocationData() {
	console.log(`Host: ${location.host}\nHostName: ${location.hostname}\nPort: ${location.port}\nHref: ${location.href}\nPathname: ${location.pathname}\nProtocol: ${location.protocol}`);
}

getData();

async function getData() {
	console.log("Running...");
	const url = "../assets/Projects.json";
	try {
		const response = await fetch(url);

		console.log(response.url);

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

function GetFileType(string) {
	var fileSuffix = string.split('.').pop();

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

function IsFileVideo(string) {
	const fileType = GetFileType(string);

	return fileType == "mp4" || fileType == "webM";
}

function GetProjectTitle(project) {
	var projectTitle = `<h2 class="pr-title border-bottom border-secondary">${project.name}</h2>`;
	console.log("\tTitle");
	return projectTitle;
}

function GetProjectTags(project) {
	var projectTags = "";

	const tagContent = [
		`<i class="fa-${project.tags.pf_type} fa-${project.tags.pf_icon} me-2"></i> ${project.tags.platform}`,
		`<i class="fa-solid fa-users me-2"></i> ${project.tags.team_size}`,
		`<i class="fa-solid fa-clock me-2"></i> ${project.tags.dev_time}`,
		`<i class="fa-solid fa-calendar-days me-2"></i> ${project.tags.dev_year}`,
	];

	var text = "";
	for (tag of tagContent) {
		text = `<li class="me-2 mt-2">
                <div class="d-flex align-items-center rounded-pill bg-primary-50 px-3 py-1">${tag}</div>
            	</li>`;
		projectTags += text;
	}
	console.log("\tTags");
	return projectTags;
}

function GetProjectNotes(project) {
	var projectNotes = "";
	for (notes of project.notes) {
		if (notes[0] == ">") {
			projectNotes += `<ul><li class="proj-note-row">${notes.slice(2, notes.length,)}</li></ul>`;
		}
		else {
			projectNotes += `<li class="proj-note-row">${notes}</li>`;
		}
	}
	console.log("\tNotes");
	return projectNotes;
}

function GetProjectCarousel(project, projectID) {

	// if the project has no images/videos insert a placeholder
	if (project.media.length == 0) {
		return `<div class="carousel-item">
								<div class="d-block placeholder"></div>
							</div>`;
	}

	// if the project has images/videos loop through the contents and create videos
	var media = "";

	var projectCarousel = "";


	for (let i = 0; i < project.media.length; i++) {
		const mediaStruct = project.media[i];

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

function CountCarouselData(carouselData) {
	var counter = 0;
	return carouselData.length;
}

function GetCarouselView(project) {
	return (CountCarouselData(project.media)) > 1 ? `` : `d-none`;
}

function MakeVideoHTML(video, hasControls = false) {
	return `<video src=".${video.link}" type="video/mp4" loop ${hasControls ? "controls" : ""} autoplay muted controlsList="nodownload" class="w-100" >
					Sorry, your browser doesn't support embedded videos.
				</video>`;
}

function MakeImageHTML(image) {
	return `<img src=".${image.link}" class="d-block" alt="${image.alt}" />`;
}

function GetGameLink(project) {
	console.log("\tLink Compiling status... \n\tIs Link Null: " + (project.prj_link != "null") + "\n\tHas Webpage: " + (project.has_webpage == true));

	console.log("\tLink");
	return (project.prj_link == "null" || project.has_webpage == false) ? `` : `
    <div class="pr-playbtn">
        <a class="btn bg-secondary-30 w-100" href="${project.prj_link}" role="button">Play Now</a>
    </div>`;
}

function MakePortfolioProjectHTML(projects) {
	var dataContainer = document.querySelector(".portfolio-gallery");

	for (project of projects) {
		console.log(project.title + " Starting Compilation...");
		var projectID = "portfolio-" + project.id;
		var projectCarouselID = projectID + "-Carousel";

		var projectHtml = `
	<div id = "${projectID}" class="portfolio-block container rounded bg-secondary-10 p-3 mt-2" >
		<div class="grid pr-grid">
			<div class="gr-12 gr-lg-8 order-lg-1">
				<h2 class="pr-title border-bottom border-secondary">${project.title}</h2>
				<div class="pr-tags">
					<ul class="d-flex flex-row flex-wrap li-none">
						${GetProjectTags(project)}
					</ul>
				</div>
			</div>
			<div class="gr-12 gr-lg-4 gr-2r order-lg-0">
				<div id="${projectCarouselID}" class="carousel slide pointer-event bg-secondary-subtle-50 aspect-carousel">
					<div class="carousel-inner">
						${GetProjectCarousel(project, projectID)}
					</div>
					<button class="carousel-control-prev ${GetCarouselView(project)}" type="button"
						data-bs-target="#${projectCarouselID}" data-bs-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Previous</span>
					</button>
					<button class="carousel-control-next ${GetCarouselView(project)}" type="button"
						data-bs-target="#${projectCarouselID}" data-bs-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Next</span>
					</button>
				</div>
				<p class="pr-desc">${project.desc}</p>
			</div>
			<div class="gr-12 gr-lg-8 order-lg-2 d-flex flex-column grid-obj">
				<ul class="pr-notes flex-grow-1">
					${GetProjectNotes(project)}
				</ul>
				${GetGameLink(project)}
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

		console.log(modalImageBody.firstElementChild);
		imageModalLabel.innerText = modalImageBody.firstElementChild.src.split('/').pop()
	})
}

