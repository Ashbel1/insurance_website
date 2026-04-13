import React from 'react'


// Helper to chunk array into rows
function chunkArray(array, chunkSizes) {
    let result = [];
    let i = 0;
    let chunkIndex = 0;
    while (i < array.length) {
        let size = Array.isArray(chunkSizes) ? chunkSizes[chunkIndex] || chunkSizes[chunkSizes.length - 1] : chunkSizes;
        result.push(array.slice(i, i + size));
        i += size;
        chunkIndex++;
    }
    return result;
}

const featuresData = [
    {
        icon: "fa fa-hospital-o",
        title: "Comprehensive Cover",
        desc: "Genfin provides hospital, outpatient, and specialist cover for all your healthcare needs."
    },
    {
        icon: "fa fa-user-md",
        title: "Expert Medical Team",
        desc: "Access a network of doctors, nurses, and healthcare professionals dedicated to your well-being."
    },
    {
        icon: "fa fa-medkit",
        title: "Medication & Pharmacy",
        desc: "Get support for chronic medication, pharmacy needs, and ongoing treatment with Genfin."
    },
    {
        icon: "fa fa-ambulance",
        title: "Emergency Services",
        desc: "24/7 ambulance and emergency medical response for Genfin members."
    },
    {
        icon: "fa fa-stethoscope",
        title: "Dental & Optical",
        desc: "Dental care and optical benefits for a healthy smile and clear vision."
    },
    // Add more features here as needed
];

const Features = (props) => {
    // For 5 items: 3 in first row, 2 in second row. For more, repeat pattern or use 3 per row.
    const chunkSizes = featuresData.length === 5 ? [3, 2] : 3;
    const rows = chunkArray(featuresData, chunkSizes);
    return (
        <section className="features-section">
            <div className="container">
                {rows.map((row, rowIdx) => (
                    <div className="row" key={rowIdx}>
                        <div className="col col-xs-12">
                            <div className="feature-grids clearfix">
                                {row.map((feature, idx) => (
                                    <div className="grid" key={idx}>
                                        <div className="icon">
                                            <i className={feature.icon}></i>
                                        </div>
                                        <h3>{feature.title}</h3>
                                        <p>{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Features;