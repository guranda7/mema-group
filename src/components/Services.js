import '../styles/Services.css'
import HouseRepairCalculator from '../pages/HouseRepairCalculator';

function Services () {
    return(
        <div className="service-container">
            <div><h2>Services</h2></div>
            <div className="card-container">
            <div className="card">
                <h3>House Construction</h3>
                <p> Building a house requires expert planning,high-quality materials,
                    nd skilled craftsmanship to ensure safety, durability, and energy efficiency. 
                    Professionals handle everything from foundation work to roofing,
                    ensuring the structure meets all legal and safety standards.</p>
            </div>
            <div className="card">
                <h3>Renovation Works</h3>
                <p>Renovations improve the functionality, aesthetics, and value of a property. 
                   Whether it’s fixing structural issues, upgrading interiors, or modernizing outdated spaces, 
                   professionals ensure the work is done correctly, avoiding costly mistakes and ensuring long-term durability.</p>
            </div>
            <div className="card">
                <h3>Design</h3>
                <p>A well-thought-out design enhances both the appearance and usability of a space. 
                    Professional designers create layouts that optimize space, lighting, and style, 
                    ensuring a perfect balance between functionality and aesthetics while reflecting the client’s vision.</p>
            </div>
            </div>
            
        </div>
    )
}

export default Services;