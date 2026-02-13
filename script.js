document.addEventListener('DOMContentLoaded', function () {
	const navToggle = document.querySelector('.nav-toggle');
	const navList = document.getElementById('nav-menu');

	if (navToggle && navList) {
		navToggle.addEventListener('click', () => {
			const expanded = navToggle.getAttribute('aria-expanded') === 'true';
			navToggle.setAttribute('aria-expanded', String(!expanded));
			navList.classList.toggle('show');
		});

		// Close mobile menu when clicking a link
		navList.addEventListener('click', (e) => {
			if (e.target.tagName === 'A') {
				navList.classList.remove('show');
				navToggle.setAttribute('aria-expanded', 'false');
			}
		});
	}

	// Smooth scrolling for internal links
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			const href = this.getAttribute('href');
			if (href.length > 1) {
				e.preventDefault();
				const target = document.querySelector(href);
				if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		});
	});
});
