let profileText = document.querySelector('#profile_text');
        let texts = ["Web Development", "Java Development", "Problem Solving"];
        let currentTextIndex = 0;
        let currentText = texts[currentTextIndex];
        let charIndex = 0;
        let typingSpeed = 100; // Adjust typing speed (in milliseconds) here

        function typeText() {
            if (charIndex < currentText.length) {
                profileText.innerHTML += currentText.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, typingSpeed);
            } else {
                setTimeout(eraseText, 2000);
            }
        }

        function eraseText() {
            if (charIndex > 0) {
                profileText.innerHTML = currentText.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(eraseText, typingSpeed);
            } else {
                currentTextIndex = (currentTextIndex + 1) % texts.length;
                currentText = texts[currentTextIndex];
                setTimeout(typeText, 500); 
            }
        }

        typeText(); 