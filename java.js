document.addEventListener("DOMContentLoaded", () => {
    // Remove not-loaded class after a short delay to ensure all assets are loaded
    setTimeout(() => {
        document.body.classList.remove('not-loaded');
    }, 100);

    // Add stars to the night sky
    const night = document.querySelector('.night');
    
    // Add twinkling stars
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: twinkle ${2 + Math.random() * 3}s infinite ease-in-out ${Math.random() * 2}s;
        `;
        night.appendChild(star);
    }

    // Add shooting stars
    for (let i = 0; i < 5; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 40}%;
            animation: shoot ${6 + Math.random() * 6}s linear infinite ${Math.random() * 3}s;
        `;
        night.appendChild(shootingStar);
    }

    // Add star clusters
    for (let i = 0; i < 15; i++) {
        const cluster = document.createElement('div');
        cluster.className = 'star-cluster';
        cluster.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        
        // Add stars to cluster
        for (let j = 0; j < 5; j++) {
            const clusterStar = document.createElement('div');
            clusterStar.className = 'cluster-star';
            clusterStar.style.cssText = `
                left: ${Math.random() * 30 - 15}px;
                top: ${Math.random() * 30 - 15}px;
                animation: clusterTwinkle ${1.5 + Math.random()}s infinite ease-in-out ${Math.random()}s;
            `;
            cluster.appendChild(clusterStar);
        }
        night.appendChild(cluster);
    }

    // Add CSS keyframes dynamically
    const style = document.createElement('style');
    style.textContent = `
        .star {
            width: 2px;
            height: 2px;
            background: white;
            border-radius: 50%;
            position: absolute;
        }

        .shooting-star {
            position: absolute;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: linear-gradient(45deg, white, transparent);
            filter: drop-shadow(0 0 6px white);
        }

        .star-cluster {
            position: absolute;
            width: 30px;
            height: 30px;
        }

        .cluster-star {
            position: absolute;
            width: 2px;
            height: 2px;
            background: white;
            border-radius: 50%;
        }

        @keyframes twinkle {
            0%, 100% { 
                opacity: 0.3;
                transform: scale(1);
            }
            50% { 
                opacity: 1;
                transform: scale(1.2);
            }
        }

        @keyframes shoot {
            0% {
                transform: translateX(0) translateY(0) rotate(45deg);
                opacity: 1;
            }
            15% {
                opacity: 0;
            }
            30% {
                transform: translateX(-200px) translateY(200px) rotate(45deg);
                opacity: 0;
            }
            100% {
                transform: translateX(-200px) translateY(200px) rotate(45deg);
                opacity: 0;
            }
        }

        @keyframes clusterTwinkle {
            0%, 100% {
                opacity: 0.2;
                transform: scale(1);
            }
            50% {
                opacity: 1;
                transform: scale(1.3);
            }
        }
    `;
    document.head.appendChild(style);

    // Handle growing animations
    const growElements = document.querySelectorAll('.grow-ans');
    growElements.forEach(element => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    element.style.animationPlayState = 'running';
                }
            });
        });
        observer.observe(element);
    });

    // Add random movement to flowers
    const flowers = document.querySelectorAll('.flower');
    flowers.forEach(flower => {
        const randomDelay = Math.random() * 2;
        flower.style.animationDelay = `${randomDelay}s`;
    });

    // Add random twinkling to flower lights
    const flowerLights = document.querySelectorAll('.flower__light');
    flowerLights.forEach(light => {
        const randomDelay = Math.random() * 4;
        light.style.animationDelay = `${randomDelay}s`;
    });
});
