/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.querySelector('.nav__menu');
const navToggle = document.querySelector('.nav__toggle');
const navClose = document.querySelector('.nav__close');
const navLink = document.querySelectorAll('.nav__link');
navToggle.addEventListener('click', () => {
	navMenu.style.bottom = '0%';
});
navClose.addEventListener('click', () => {
	navMenu.style.bottom = '-100%';
});

/*==================== REMOVE MENU MOBILE ====================*/

navLink.forEach((n) => {
	n.addEventListener('click', () => {
		navMenu.style.bottom = '-100%';
	});
});

/*==================== ACCORDION SKILLS ====================*/
const skillContent = document.querySelectorAll('.skills__content');
const skillHeader = document.querySelectorAll('.skills__header');
skillHeader.forEach((n, i) =>
	n.addEventListener('click', () => {
		if (skillContent[i].classList.contains('skills__close')) {
			skillContent[i].classList.remove('skills__close');
			skillContent[i].classList.add('skills__open');
		} else {
			skillContent[i].classList.remove('skills__open');
			skillContent[i].classList.add('skills__close');
		}
	})
);
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');
tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.target);
		tabContents.forEach((tabContent) => {
			tabContent.classList.remove('qualification__active');
		});
		target.classList.add('qualification__active');
		tabs.forEach((tab) => {
			tab.classList.remove('qualification__active');
		});
		tab.classList.add('qualification__active');
	});
});
/*==================== SERVICES MODAL ====================*/
const servicesBtn = document.querySelectorAll('.services__button');
const servicesModal = document.querySelectorAll('.services__modal');
const servicesModalClose = document.querySelectorAll('.services__modal-close');
servicesBtn.forEach((n, i) =>
	n.addEventListener('click', () => {
		servicesModal[i].style.opacity = 1;
		servicesModal[i].style.visibility = 'visible';
	})
);
servicesModalClose.forEach((n, i) =>
	n.addEventListener('click', () => {
		servicesModal[i].style.opacity = 0;
		servicesModal[i].style.visibility = 'hidden';
	})
);
/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper('.portfolio__container', {
	cssMode: true,
	loop: true,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id');

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector('.nav__menu a[href*=' + sectionId + ']')
				.classList.add('active-link');
		} else {
			document
				.querySelector('.nav__menu a[href*=' + sectionId + ']')
				.classList.remove('active-link');
		}
	});
}
window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
	const nav = document.getElementById('header');
	// When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
	if (this.scrollY >= 80) nav.classList.add('scroll-header');
	else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
	const scrollUp = document.getElementById('scroll-up');
	// When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
	if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
	else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
	document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
	themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
	// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
		darkTheme
	);
	themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](
		iconTheme
	);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
	// Add or remove the dark / icon theme
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);
	// We save the theme and the current icon that the user chose
	localStorage.setItem('selected-theme', getCurrentTheme());
	localStorage.setItem('selected-icon', getCurrentIcon());
});
