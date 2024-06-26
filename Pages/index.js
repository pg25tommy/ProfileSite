document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Lay-Off',
            description: "Lay-Off is an intense 3rd person, full-body view, 4-player multiplayer trap placement deathmatch game, developed using Unity and C#. Set in the high-stakes world of espionage, players take on the roles of elite spies for an underground agency facing budget cuts due to inflation. Forced into a deadly competition, players must outsmart and outlast their fellow spies in a secret base until only one remains. In this high-octane battle, players compete for keycards that spawn periodically around the map. The objective is to gather the required number of keycards to escape. Players can incapacitate opponents with strategically placed traps, causing them to drop their keycards and giving others a chance to collect them. If no one escapes before the time limit expires, they enter... let's say, forced 'retirement'. The game features full online multiplayer capabilities, allowing players to challenge friends and foes from around the world.",
            images: [
                'Images/Gameplay1.png',
                'Images/Gameplay2.png',
                'Images/Gameplay3.png'
            ]
        },
        {
            title: 'Stick Dots',
            description: "Stick Dots is a classic lines and boxes game developed as part of the VFS PG25 class. Players strategically draw lines to capture squares and gain extra turns, with features including competitive leaderboards, customizable user profiles and avatars, a multiplayer lobby, and AI opponents. As the Project Manager and a programmer, I coordinated the diverse team, managed tasks, conducted code reviews, oversaw project architecture, ensured quality, and contributed to networking the game. This project aimed to build a functional mobile application while fostering team collaboration and learning.",
            images: [
                'Images/StickDotGame.png',
                'Images/StickdotLobby.png',
                'Images/StickDotMenu.png'
            ]
        }
    ];

    const track = document.querySelector('.carousel-track');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    projects.forEach(project => {
        const projectElement = document.createElement('li');
        projectElement.classList.add('project');

        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        projectElement.appendChild(projectTitle);
        projectElement.appendChild(projectDescription);

        if (project.images) {
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('image-container');
            if (project.title === 'Lay-Off') {
                imageContainer.style.display = 'flex';
                imageContainer.style.justifyContent = 'center';
                imageContainer.style.gap = '10px';
            }
            project.images.forEach(imageSrc => {
                const projectImage = document.createElement('img');
                projectImage.src = imageSrc;
                projectImage.alt = `${project.title} image`;
                projectImage.classList.add('project-image');
                projectImage.onerror = () => {
                    console.error(`Error loading image: ${imageSrc}`);
                };

                // Apply inline styles for "Lay-Off" images to make them smaller
                if (project.title === 'Lay-Off') {
                    projectImage.style.maxWidth = '30%';
                    projectImage.style.height = 'auto';
                }

                // Apply inline styles for "Stick Dots" images to make them smaller
                if (project.title === 'Stick Dots') {
                    projectImage.style.maxWidth = '15%';
                    projectImage.style.height = 'auto';
                    projectImage.style.margin = '0';
                }

                imageContainer.appendChild(projectImage);
            });
            projectElement.appendChild(imageContainer);
        }

        if (project.videos) {
            const videoContainer = document.createElement('div');
            videoContainer.classList.add('video-container');
            project.videos.forEach(videoSrc => {
                const projectVideo = document.createElement('video');
                projectVideo.src = videoSrc;
                projectVideo.controls = true;
                projectVideo.autoplay = true;
                projectVideo.loop = true;
                projectVideo.muted = true;
                projectVideo.classList.add('project-video');
                projectVideo.onerror = () => {
                    console.error(`Error loading video: ${videoSrc}`);
                };
                videoContainer.appendChild(projectVideo);
            });
            projectElement.appendChild(videoContainer);
        }

        track.appendChild(projectElement);
    });

    const moveToSlide = (index) => {
        const amountToMove = -index * 100;
        track.style.transform = `translateX(${amountToMove}%)`;
    };

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            moveToSlide(currentIndex);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < projects.length - 1) {
            currentIndex++;
            moveToSlide(currentIndex);
        }
    });
});
