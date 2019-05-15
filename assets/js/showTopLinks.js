const topLinks = document.querySelector('.top-links');

function showTopLinksonScroll() {
	if (window.scrollY > 120) {
		topLinks.classList.remove("d-none");
	}

	else if (window.scrollY < 120) {
		topLinks.classList.add("d-none");
	}
}

window.addEventListener('scroll', showTopLinksonScroll);
