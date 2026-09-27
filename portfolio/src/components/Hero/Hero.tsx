import "./Hero.css";

function Hero() {
    return (
        <section className="hero-section px-0" id="hero-section">
            <div className="row py-4">
                <div className="col px-5">
                    <h1 className="hero-title display-1 text-primary">PORTFÓLIO</h1>
                </div>
                <div className="col align-items-end d-flex justify-content-center">
                    <h1 className="hero-conective display-1 text-primary">de</h1>
                </div>
                <div className="col px-5 d-flex justify-content-end">
                    <h1 className="hero-title display-1 text-primary">GASTRO</h1>
                </div>
            </div>
            <div className="row image-container">
                <div className="col px-0">
                    <div className="hero-image" />
                </div>
            </div>
        </section>
    )
}

export default Hero;