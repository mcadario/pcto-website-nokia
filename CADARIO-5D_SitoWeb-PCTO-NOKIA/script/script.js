document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Blocca il comportamento predefinito
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {  //Verifica che <a> esista nel DOM
            const offset = 100; // Offset di 100px
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            
            window.scrollTo({
                top: targetPosition - offset
            });
        }
    });
});