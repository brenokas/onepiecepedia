const header = document.getElementById('header');
window.addEventListener('scroll', () => {
	if (window.scrollY > 0) {
		header.classList.add('scroll');
	} else {
		header.classList.remove('scroll');
	}
});