
        const texts = [
            "Web Developer",
            "Software Engineer"
        ];
        const helloElement = document.getElementById('hello');
        const professionElement = document.getElementById('profession');
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeWriter() {
            const currentText = texts[textIndex];
            if (isDeleting) {
                professionElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                professionElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            const typingSpeed = isDeleting ? 50 : 150;
            
            if (!isDeleting && charIndex === currentText.length) {
                setTimeout(() => isDeleting = true, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(typeWriter, 1000);
                return;
            }

            setTimeout(typeWriter, typingSpeed);
        }

        
        setTimeout(() => {
            helloElement.style.opacity = '1';
            setTimeout(typeWriter, 1000);
        }, 500);

       
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });

        const swiper = new Swiper('.project-swiper', {
            spaceBetween: 30,
            loop: true,

            autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            },

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
               
            }
        });

  
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

           
            alert(`Thank you, ${name}!\nYour message has been sent successfully.\n\nMessage: ${message}\nFrom: ${email}`);
            
           
            this.reset();
        });

        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(10, 10, 10, 0.98)';
            } else {
                nav.style.background = 'rgba(10, 10, 10, 0.95)';
            }
        });


        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const navLinks = document.getElementById('navLinks');

        hamburgerBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        hamburgerBtn.classList.toggle('active');
        });


        document.querySelectorAll('#navLinks a').forEach(link => {
        link.addEventListener('click', () => {
        navLinks.classList.remove('show');
        hamburgerBtn.classList.remove('active');
            });
        });

        const skillLevels = document.querySelectorAll('.skill-level');

        const observerOptions = {
            threshold: 0.4
        };

        const skillsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            const levelEl = entry.target;
            const target = levelEl.getAttribute('data-level'); // "90", "80", dll
            levelEl.style.height = target + '%';

            observer.unobserve(levelEl);
            }
        });
        }, observerOptions);

        skillLevels.forEach(level => {
        level.style.height = '0';
        skillsObserver.observe(level);
        });

        