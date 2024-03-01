function Dashboard() {
    return (
        <main>
            <section>
                {/*Weather Menu*/}
            </section>
            
            <section>
                <article id="weather-widget">
                    <p>
                        <span id="temperature">24 º </span>
                        <i id="weather-icon">Weather Icon</i>
                    </p>
                    <p>Sunny</p>
                    <div>
                        <p><i>High Icon</i> H: <span id="high-temperature">32 º</span></p>
                        <p><i>Low Icon</i> L: <span id="low-temperature">16 º</span></p>
                    </div>
                </article>

                {/*Sample markup for the data cards */}
                <article>
                    <div>
                        <p>WIND</p> <i>Safety Indicator</i>
                    </div>
                    <i>Wind Symbol</i>
                    <p><strong>Speed: <span>11.12</span> <span>km/h</span></strong></p>
                </article>
            </section>
        </main>
    );
}

export default Dashboard;