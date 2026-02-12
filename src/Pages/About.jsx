// About.jsx
import Slides from '../Components/Slides';

function About() {
    return (
        <div className="about-page">
            <div className="about-header">
                <h1>About AURA DESIGN</h1>
                <p>We blend style and comfort in every piece of furniture we create.</p>
            </div>
            
            <Slides />
            
            <div className="about-info">
                <h3>Our Vision</h3>
                <p>
                    From minimalist chairs to handcrafted oak tables, our pieces are 
                    designed to transform your house into a home. AURA DESIGN is 
                    currently featured in interiors across more than 20 countries worldwide.
                </p>
            </div>
        </div>
    )
}

export default About;