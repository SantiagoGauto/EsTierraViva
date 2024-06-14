document.addEventListener('DOMContentLoaded', () => {
	const imgLightBox = document.querySelectorAll('.materialboxed');
	M.Materialbox.init(imgLightBox, {
		inDuration: 500,
		outDuration: 500
	});
});

document.addEventListener('DOMContentLoaded', () => {
    const imgLightBox = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(imgLightBox, {
        inDuration: 500,
        outDuration: 500
    });

    const showMoreBtn = document.getElementById('show-more');
    const showLessBtn = document.getElementById('show-less');
    const hiddenImages = document.querySelector('.hidden-images');

    showMoreBtn.addEventListener('click', () => {
        hiddenImages.style.display = 'flex';
        showMoreBtn.style.display = 'none';
        showLessBtn.style.display = 'block';
    });

    showLessBtn.addEventListener('click', () => {
        hiddenImages.style.display = 'none';
        showMoreBtn.style.display = 'block';
        showLessBtn.style.display = 'none';
    });
});
