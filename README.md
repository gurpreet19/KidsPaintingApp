<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kids Paint Studio README</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            font-size: 2.5em;
            color: #3b82f6;
            text-align: center;
            margin-bottom: 20px;
        }
        h2 {
            font-size: 1.8em;
            color: #4a5568;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 5px;
            margin-top: 30px;
            margin-bottom: 15px;
        }
        h3 {
            font-size: 1.4em;
            color: #4a5568;
            margin-top: 20px;
            margin-bottom: 10px;
        }
        ul {
            list-style-type: disc;
            margin-left: 20px;
            margin-bottom: 10px;
        }
        ol {
            list-style-type: decimal;
            margin-left: 20px;
            margin-bottom: 10px;
        }
        li {
            margin-bottom: 5px;
        }
        code {
            background-color: #e2e8f0;
            padding: 2px 4px;
            border-radius: 4px;
            font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
            font-size: 0.9em;
        }
        pre {
            background-color: #2d3748; /* Darker background for code blocks */
            color: #f8f8f2; /* Light text color */
            padding: 15px;
            border-radius: 8px;
            overflow-x: auto;
            margin-bottom: 15px;
        }
        pre code {
            background-color: transparent;
            color: inherit;
            padding: 0;
            border-radius: 0;
        }
        a {
            color: #3b82f6;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        p {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <h1>🎨 Kids Paint Studio 🖌️</h1>

    <p>Welcome to the <strong>Kids Paint Studio</strong>! This is a fun, interactive, and easy-to-use drawing application designed specifically for children to unleash their creativity. With a simple interface and essential tools, kids can enjoy painting, coloring, and expressing themselves digitally.</p>

    <h2>✨ Features</h2>
    <ul>
        <li><strong>Intuitive Drawing Canvas</strong>: A large, responsive canvas for endless drawing possibilities.</li>
        <li><strong>Vibrant Color Palette</strong>: A color picker to choose from a wide range of colors.</li>
        <li><strong>Multiple Drawing Tools</strong>:
            <ul>
                <li><strong>Pen</strong>: For standard, smooth lines.</li>
                <li><strong>Pencil</strong>: For thinner, more precise strokes.</li>
                <li><strong>Brush</strong>: For thicker, broader strokes, perfect for coloring larger areas.</li>
            </ul>
        </li>
        <li><strong>Adjustable Stroke Size</strong>: Easily increase or decrease the size of your pen, pencil, or brush strokes for detailed work or broad fills.</li>
        <li><strong>Fill Canvas</strong>: A quick button to fill the entire canvas with the currently selected color.</li>
        <li><strong>Eraser Tool</strong>: Correct mistakes or create interesting effects with the eraser.</li>
        <li><strong>Clear Canvas</strong>: Start fresh with a single click.</li>
        <li><strong>Responsive Design</strong>: Adapts seamlessly to various screen sizes, from mobile phones to desktops.</li>
        <li><strong>Touch-Friendly</strong>: Fully functional with touch input, making it perfect for tablets and touch-screen devices.</li>
        <li><strong>Progressive Web Application (PWA)</strong>: Installable to your device's home screen, offering an app-like experience and potential offline capabilities.</li>
    </ul>

    <h2>🚀 How to Run (Local Setup)</h2>
    <p>To run this application locally and experience its PWA features, follow these steps:</p>
    <ol>
        <li><strong>Save the Files</strong>:
            <ul>
                <li>Save the main HTML file as <code>index.html</code>.</li>
                <li>Save the manifest content as <code>manifest.json</code>.</li>
                <li>Save the service worker content as <code>service-worker.js</code>.</li>
            </ul>
        </li>
        <li><strong>Create Icons Folder</strong>: In the same directory as <code>index.html</code>, create a folder named <code>icons</code>.</li>
        <li><strong>Add Icons</strong>: Place your application icons (e.g., <code>icon-192x192.png</code> and <code>icon-512x512.png</code>) inside the <code>icons</code> folder. These are crucial for the PWA "Add to Home Screen" prompt.</li>
        <li><strong>Serve with a Local Server</strong>: PWAs require a web server to function correctly, especially for Service Worker registration. You can use a simple Python server or Node.js <code>http-server</code>:
            <h3>Python (Python 3):</h3>
            <p>Open your terminal in the project directory and run:</p>
            <pre><code>python -m http.server</code></pre>
            <p>Then, open your browser and navigate to <code>http://localhost:8000</code>.</p>
            <h3>Node.js (if you have Node.js installed):</h3>
            <p>First, install <code>http-server</code> globally:</p>
            <pre><code>npm install -g http-server</code></pre>
            <p>Then, in your project directory, run:</p>
            <pre><code>http-server</code></pre>
            <p>And navigate to <code>http://localhost:8080</code> (or the port indicated).</p>
        </li>
    </ol>

    <h2>📱 PWA Features</h2>
    <p>Once served from a local or remote web server:</p>
    <ul>
        <li><strong>Installable</strong>: On supported browsers (like Chrome on Android or desktop), you might see an "Add to Home Screen" or "Install App" prompt. Accepting this will install the app directly to your device, allowing it to run in standalone mode.</li>
        <li><strong>Offline Access</strong>: The Service Worker caches essential assets, meaning the app can be launched and used even if there's no internet connection (after the first visit).</li>
    </ul>

    <h2>🛠️ Technologies Used</h2>
    <ul>
        <li><strong>HTML5</strong>: Structure of the application.</li>
        <li><strong>CSS3 (Tailwind CSS)</strong>: For styling and responsive layout.</li>
        <li><strong>JavaScript</strong>: Core logic for drawing, tool management, and PWA functionality.</li>
        <li><strong>Canvas API</strong>: For drawing operations.</li>
    </ul>

    <h2>🤝 Contributing</h2>
    <p>Feel free to fork this repository, suggest improvements, or add new features!</p>

    <h2>📄 License</h2>
    <p>This project is open-source and available under the <a href="LICENSE">MIT License</a>.</p>
</body>
</html>
