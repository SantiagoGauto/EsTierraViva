document.addEventListener('DOMContentLoaded', () => {
	const imgLightBox = document.querySelectorAll('.materialboxed');
	M.Materialbox.init(imgLightBox, {
		inDuration: 500,
		outDuration: 500
	});
});

// textarea
    $(document).ready(function() {
    $('textarea#textarea2').characterCounter();
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

// GMAIL

    document.addEventListener('DOMContentLoaded', function() {
        M.AutoInit();
    });
    
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const formData = new FormData(this);
    
        fetch('/send-email', {
        method: 'POST',
        body: formData,
        })
        .then(response => response.json())
        .then(data => {
        if (data.success) {
            alert('Mensaje enviado con éxito');
            this.reset();
        } else {
            alert('Error al enviar el mensaje');
        }
        })
        .catch(error => {
        console.error('Error:', error);
        alert('Error al enviar el mensaje');
        });
    });
