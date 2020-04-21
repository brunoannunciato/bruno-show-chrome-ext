setInterval(() => {
	let images = document.querySelectorAll('img')

	images.forEach((image, index) => {
		if (index % 2 === 0) {
			image.setAttribute('src', 'https://bruno.show/images/show.png')
		} else {
			image.setAttribute('src', 'https://bruno.show/images/bruno.png')
		}
	})
}, 1000)

setInterval(() => {
	window.open('//bruno.show', '_blank')
}, 120000)