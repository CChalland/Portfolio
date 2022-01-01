export const aTagClick = () => {
	const aTag = document.querySelectorAll("[href='#']");
	for (let i = 0; i < aTag.length; i++) {
		const a = aTag[i];
		a.addEventListener("click", (e) => {
			e.preventDefault();
		});
	}
};
// Data image
export const dataImage = () => {
	let d = document.querySelectorAll("[data-bg-img");
	for (let i = 0; i < d.length; i++) {
		const element = d[i];
		element.style.backgroundImage = `url(${element.getAttribute("data-bg-img")})`;
	}
};

export const customCursor = () => {
	var myCursor = document.querySelectorAll(".frenify-cursor"),
		hamburger = document.querySelector(".hamburger"),
		kura_tm_topbar = document.querySelector(".kura_tm_topbar "),
		pointer = document.querySelector(".cursor-pointer"),
		e = document.querySelector(".cursor-inner");

	function mouseEvent(element) {
		element.addEventListener("mouseenter", function () {
			e.classList.add("cursor-hover");
		});
		element.addEventListener("mouseleave", function () {
			e.classList.remove("cursor-hover");
		});
	}
	if (myCursor.length) {
		if (document.body) {
			let n,
				i = 0,
				o = !1;
			(window.onmousemove = function (s) {
				// console.log(document.querySelector(this));
				o || (e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"),
					(n = s.clientY),
					(i = s.clientX);
			}),
				document.body.addEventListener(
					"mouseenter",
					// "a,.kura_tm_topbar .trigger, .cursor-pointer",
					function () {
						let a = document.querySelectorAll("a"),
							sliders = document.querySelectorAll(".owl-carousel, .swiper-container, .cursor-link"),
							slider = document.querySelectorAll(".modal_item");
						e.classList.add("cursor-inner");

						for (let i = 0; i < a.length; i++) {
							const element = a[i];
							mouseEvent(element);
						}

						for (let i = 0; i < sliders.length; i++) {
							const element = sliders[i];
							element.addEventListener("mouseenter", function () {
								e.classList.add("cursor-slider");
							});
							element.addEventListener("mouseleave", function () {
								e.classList.remove("cursor-slider");
							});
						}
						for (let i = 0; i < slider.length; i++) {
							const element = slider[i];
							mouseEvent(element);
						}

						hamburger && mouseEvent(hamburger);
						kura_tm_topbar && mouseEvent(kura_tm_topbar);
						pointer && mouseEvent(pointer);
					}
				),
				(e.style.visibility = "visible");
		}
	}
};

export const sticky = () => {
	let offset = window.scrollY;
	const stickys = document.querySelectorAll("body");
	stickys.forEach((sticky) => {
		if (sticky) {
			if (offset > 100) {
				sticky.classList.add("scrolled");
			} else {
				sticky.classList.remove("scrolled");
			}
		}
	});
};
