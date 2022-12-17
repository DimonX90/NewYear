"use strict"
//Check supporting WEBP and add class webp or no-webp to HTML
function isWebp() {
	// Check supporting WEBP
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// add class webp or no-webp to HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}
isWebp();
//Snow settings===================
particlesJS("particles-js", {
	"particles": {
		"number": {
			"value": 400,
			"density": {
				"enable": true,
				"value_area": 800
			}
		},
		"color": {
			"value": "#ffffff"
		},
		"shape": {
			"type": "image",
			"stroke": {
				"width": 3,
				"color": "#fff"
			},
			"polygon": {
				"nb_sides": 5
			},
			"image": {
				"src": "img/snowflake3.png",
				"width": 100,
				"height": 100
			}
		},
		"opacity": {
			"value": 0.7,
			"random": false,
			"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			}
		},
		"size": {
			"value": 5,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 20,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": false,
			"distance": 50,
			"color": "#ffffff",
			"opacity": 0.6,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 10,
			"direction": "bottom",
			"random": true,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": true,
				"rotateX": 300,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": false,
				"mode": "bubble"
			},
			"onclick": {
				"enable": false,
				"mode": "repulse"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 150,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 200,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			},
			"repulse": {
				"distance": 200,
				"duration": 0.2
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
});
//===================================
const message = document.querySelector('.message-wrapper');
const wrapper = document.querySelector('.wrapper');
window.addEventListener('DOMContentLoaded', function () {
	const gifts = document.querySelectorAll('.animation');
	for (let i = 0; gifts.length > i; i++) {
		//добавление класса анимации уменьшения-увеличения
		gifts[i].addEventListener('click', function (e) {
			e.preventDefault();
			gifts[i].classList.add('animationpush');
			//удаление класса анимации уменьшения-увеличения
			function remuveAnimation() {
				gifts[i].classList.remove('animationpush')
			}
			setTimeout(remuveAnimation, 4000);
			//визов попапа
			message.style.display = 'block';
			function messageUp() {
				message.style.transform = 'scale(1)'
				wrapper.classList.add('poup');
			}
			setTimeout(messageUp, 2000);

		})

	}
	//закритяя попапа
	message.addEventListener('click', function () {
		message.style.transform = 'scale(0)'
		function messageDown() {
			message.style.display = 'none';
			wrapper.classList.remove('poup');
		}
		setTimeout(messageDown, 2000);
	})
})

