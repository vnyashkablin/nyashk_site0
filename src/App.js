import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Добро пожаловать на няшк сайт
                </p>

                <iframe
                    style={{borderRadius: "12px"}}
                    src="https://open.spotify.com/embed/track/2DkO9y7DB9S9nBg5u0VDoW?utm_source=generator&theme=0"
                    width="75%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe>
                <iframe
                    style={{borderRadius: "12px"}}
                    src="https://open.spotify.com/embed/track/4OtVQ2ZxS7yigIjGz5yKg1?utm_source=generator&theme=0"
                    width="75%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe>
                <iframe
                    style={{borderRadius: "12px"}}
                    src="https://open.spotify.com/embed/track/45lXSvtDt6uKiGZIXB4LLF?utm_source=generator&theme=0"
                    width="75%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe>
            </header>
        </div>
    );
}

export default App;