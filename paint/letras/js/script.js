const canvas = document.getElementById('drawingCanvas');
        const ctx = canvas.getContext('2d');
        const thinBtn = document.getElementById('thin');
        const mediumBtn = document.getElementById('medium');
        const thickBtn = document.getElementById('thick');
        const colorPicker = document.getElementById('colorPicker');
        const colorInput = document.getElementById('colorInput');
        const eraserBtn = document.getElementById('eraser');
        const clearCanvasBtn = document.getElementById('clearCanvas');
        const printCanvasBtn = document.getElementById('printCanvas');
        const cameraSound = document.getElementById('cameraSound');

        let drawing = false;
        let brushSize = 2;
        let brushColor = '#000000';
        let isErasing = false;

        // Resize canvas to fit the container
        function resizeCanvas() {
            const { width, height } = canvas.getBoundingClientRect();
            canvas.width = width;
            canvas.height = height;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Function to start drawing
        function startDrawing(e) {
            drawing = true;
            draw(e);
        }

        // Function to stop drawing
        function stopDrawing() {
            drawing = false;
            ctx.beginPath();
        }

        // Function to draw
        function draw(e) {
            if (!drawing) return;
            ctx.lineWidth = brushSize;
            ctx.lineCap = 'round';
            ctx.strokeStyle = isErasing ? '#ffffff' : brushColor;

            ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        }

        // Event listeners for mouse events
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mousemove', draw);

        // Event listeners for touch events
        canvas.addEventListener('touchstart', (e) => startDrawing(e.touches[0]));
        canvas.addEventListener('touchend', stopDrawing);
        canvas.addEventListener('touchmove', (e) => draw(e.touches[0]));

        // Brush size buttons
        thinBtn.addEventListener('click', () => {
            brushSize = 2;
            setActiveButton(thinBtn);
        });

        mediumBtn.addEventListener('click', () => {
            brushSize = 5;
            setActiveButton(mediumBtn);
        });

        thickBtn.addEventListener('click', () => {
            brushSize = 10;
            setActiveButton(thickBtn);
        });

        // Color picker
        colorInput.addEventListener('input', (e) => {
            brushColor = e.target.value;
            isErasing = false;
            eraserBtn.classList.remove('active');
            colorPicker.style.backgroundColor = brushColor; // Atualiza a cor de fundo do botão de visualização de cor
        });

        // Eraser button
        eraserBtn.addEventListener('click', () => {
            isErasing = true;
            setActiveButton(eraserBtn);
        });

        // Clear canvas button
        clearCanvasBtn.addEventListener('click', () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            resetButtons();
        });

        // Print canvas button
        printCanvasBtn.addEventListener('click', () => {
            cameraSound.play();
            html2canvas(canvas).then(canvas => {
                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/jpg');
                link.download = 'Print_Jogo_Escrever.jpg';
                link.click();
            });
        });

        // Function to set active button
        function setActiveButton(button) {
            const buttons = document.querySelectorAll('.controls button');
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        }

        // Function to reset buttons to initial state
        function resetButtons() {
            isErasing = false;
            brushSize = 2;
            brushColor = '#000000';
            colorPicker.style.backgroundColor = brushColor; // Atualiza a cor de fundo do botão de visualização de cor
            setActiveButton(thinBtn);
        }