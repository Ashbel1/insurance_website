import React from "react";

import { Shield, Users, Gem, Star, HeartPulse, UserPlus, Eye, CheckCircle, Info } from "lucide-react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from '../../api/project'
import { Link } from "react-router-dom";
// --- Benefit Limits Collapsible Component ---
function BenefitLimits({ limits }) {
    const [open, setOpen] = React.useState(false);
    return (
        <div className="mb-2">
            <button className="flex items-center gap-1 text-xs text-blue-700 hover:underline mb-1 mx-auto" onClick={() => setOpen((v) => !v)}>
                <span>Benefit limits</span>
                {open ? <span>&#9650;</span> : <span>&#9660;</span>}
            </button>
            {open && (
                <div className="bg-blue-50 rounded p-2 text-xs text-blue-900 border border-blue-100 w-full">
                    {Object.entries(limits).map(([k, v]) => (
                        <div key={k} className="flex justify-between py-0.5">
                            <span>{k}</span>
                            <span className="font-semibold">{v}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}



// --- Plans & Packages Data ---
const planCategories = [
    {
        name: "SSB / Government Employee Schemes (also applies to individuals and companies)",
        icon: <Shield className="w-7 h-7 text-yellow-600" />,
        plans: [
            { name: "Pioneer Scheme", price: 16, covers: 2, extra: 1, tag: "Entry-friendly", tagColor: "bg-green-100 text-green-700", benefitLimits: { Hospital: "$660", "MRI/CT": "$350", Maternity: "Pre-authorisation", Optical: "$350/3yrs" } },
            { name: "Premium Scheme", price: 21, covers: 2, extra: 1.5, tag: "Popular choice", tagColor: "bg-blue-100 text-blue-700", benefitLimits: { Hospital: "$1200", "MRI/CT": "$400", Maternity: "Pre-authorisation", Optical: "$400/3yrs" } },
            { name: "Prestige Scheme", price: 26, covers: 2, extra: 2, tag: "Premium protection", tagColor: "bg-purple-100 text-purple-700", benefitLimits: { Hospital: "$2200", "MRI/CT": "$500", Maternity: "Pre-authorisation", Optical: "$500/3yrs" } },
        ],
    },
    {
        name: "Individual Plans",
        icon: <UserPlus className="w-7 h-7 text-yellow-600" />,
        plans: [
            { name: "Gold Scheme", price: 30, covers: 2, extra: 10, tag: "Popular choice", tagColor: "bg-blue-100 text-blue-700", benefitLimits: { Hospital: "$1500", "MRI/CT": "$400", Maternity: "Pre-authorisation", Optical: "$400/3yrs" } },
            { name: "Diamond Scheme", price: 50, covers: 2, extra: 15, tag: "Premium protection", tagColor: "bg-purple-100 text-purple-700", benefitLimits: { Hospital: "$2200", "MRI/CT": "$500", Maternity: "Pre-authorisation", Optical: "$500/3yrs" } },
        ],
    },
    {
        name: "Miners Scheme",
        icon: <Gem className="w-7 h-7 text-yellow-600" />,
        plans: [
            { name: "Vital Scheme", price: 12, covers: 2, extra: 5, tag: "Entry-friendly", tagColor: "bg-green-100 text-green-700", benefitLimits: { Hospital: "$660", "MRI/CT": "$350", Maternity: "Pre-authorisation", Optical: "$350/3yrs" } },
        ],
    },
    {
        name: "Executive / Big Boys & Boss Ladies",
        icon: <Star className="w-7 h-7 text-yellow-600" />,
        plans: [
            { name: "Essentials", price: 20, covers: 1, extra: null, tag: "Entry-friendly", tagColor: "bg-green-100 text-green-700", benefitLimits: { Hospital: "$1000", "MRI/CT": "$350", Maternity: "Pre-authorisation", Optical: "$350/3yrs" } },
            { name: "Tertiary Care", price: 40, covers: 1, extra: null, tag: "Popular choice", tagColor: "bg-blue-100 text-blue-700", benefitLimits: { Hospital: "$1500", "MRI/CT": "$400", Maternity: "Pre-authorisation", Optical: "$400/3yrs" } },
            { name: "Link", price: 50, covers: 1, extra: null, tag: "Premium protection", tagColor: "bg-purple-100 text-purple-700", benefitLimits: { Hospital: "$2000", "MRI/CT": "$500", Maternity: "Pre-authorisation", Optical: "$500/3yrs" } },
            { name: "Maxima", price: 80, covers: 1, extra: null, tag: "Premium protection", tagColor: "bg-purple-100 text-purple-700", benefitLimits: { Hospital: "$2200", "MRI/CT": "$500", Maternity: "Pre-authorisation", Optical: "$500/3yrs" } },
        ],
    },
    {
        name: "Group / Family Plans",
        icon: <Users className="w-7 h-7 text-yellow-600" />,
        plans: [
            { name: "Excel", price: 40, covers: 4, extra: 5, tag: "Best Value", tagColor: "bg-yellow-100 text-yellow-800", benefitLimits: { Hospital: "$1500", "MRI/CT": "$400", Maternity: "Pre-authorisation", Optical: "$400/3yrs" } },
            { name: "Superior", price: 60, covers: 4, extra: 10, tag: "Premium protection", tagColor: "bg-purple-100 text-purple-700", benefitLimits: { Hospital: "$2000", "MRI/CT": "$500", Maternity: "Pre-authorisation", Optical: "$500/3yrs" } },
            { name: "Extreme", price: 80, covers: 4, extra: 15, tag: "Premium protection", tagColor: "bg-purple-100 text-purple-700", benefitLimits: { Hospital: "$2200", "MRI/CT": "$500", Maternity: "Pre-authorisation", Optical: "$500/3yrs" } },
        ],
    },
];

// --- Benefits & Selling Points ---
const benefits = [
    { icon: <HeartPulse className="w-5 h-5 text-pink-500" />, title: "Chronic conditions", desc: "Medication delivered nationwide on agreed terms." },
    { icon: <Eye className="w-5 h-5 text-blue-500" />, title: "EC number access", desc: "Use your EC number at any provider countrywide." },
    { icon: <CheckCircle className="w-5 h-5 text-green-500" />, title: "Payment flexibility", desc: "Pay ½ ZIG / ½ USD (EcoCash or cash)." },
    { icon: <Users className="w-5 h-5 text-yellow-600" />, title: "Dependents", desc: "No age limit, unlimited count." },
    { icon: <Gem className="w-5 h-5 text-purple-500" />, title: "Immediate services", desc: "GP, dental, x-ray, optical, lab, and more." },
    { icon: <Star className="w-5 h-5 text-yellow-500" />, title: "Spectacles on the spot", desc: "Every Tuesday & Thursday." },
    { icon: <Shield className="w-5 h-5 text-blue-700" />, title: "Wellness Clinic", desc: "Fri & Sat at 149 The Chase, Mt Pleasant, Harare." },
];

const settings = {
    dots: true,
    arrows: false,
    speed: 3000,
    slidesToShow: 3,
    centerMode: true,
    centerPadding:'200px',
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                centerMode: false,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                centerMode: false,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                slidesToScroll: 1
            }
        }
    ]
};

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ProjectSection = (props) => {
    // Removed unused showCompare state
    return (
        <section className={`projects-section ${props.prClass}`}>
            <div className="container">
                <div className="section-title-s2">
                    <span>Genfin Initiatives</span>
                    <h2>Community Health Projects</h2>
                </div>
                <div className="section-title-text">
                    <p>Discover Genfin’s outreach, health education, and community support projects making a difference in Zimbabwean lives.</p>
                </div>

                {/* --- Enhanced Plans & Packages Section --- */}
                <div className="my-10 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 rounded-2xl shadow-lg p-4 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-yellow-700 mb-1">Genfin Medical Aid Plans & Packages</h3>
                            <p className="text-gray-600 max-w-2xl">Choose the right plan for your needs and budget. Compare options, see benefit limits, and enjoy nationwide service with unique Genfin advantages.</p>
                        </div>
                        {/* Compare Plans button removed */}
                    </div>
                    {/* Carousel for each category */}
                    <div className="space-y-12">
                        {planCategories.map((cat, i) => (
                            <div key={cat.name} className={(i !== 0 ? "mt-16 " : "") + "mb-12"}>
                                <div className="mb-4 text-center">
                                    <h4 className="text-xl md:text-2xl font-extrabold text-yellow-800 tracking-tight leading-tight m-0 p-0">
                                        {cat.name}
                                    </h4>
                                </div>
                                {cat.name.startsWith("SSB") && (
                                    <div className="mb-2 ml-10">
                                        <span className="text-xs text-gray-500 font-medium">(Also applies to individuals and companies)</span>
                                    </div>
                                )}
                                <Slider
                                    dots={true}
                                    arrows={true}
                                    infinite={false}
                                    speed={600}
                                    slidesToShow={3}
                                    slidesToScroll={1}
                                    responsive={[{ breakpoint: 1280, settings: { slidesToShow: 2 } }, { breakpoint: 900, settings: { slidesToShow: 1 } }]}
                                    className="mb-6"
                                >
                                    {cat.plans.map((plan, idx) => (
                                        <motion.div
                                            key={plan.name}
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.08 }}
                                            whileHover={{ scale: 1.04, boxShadow: "0 12px 32px rgba(0,0,0,0.10)" }}
                                            className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 flex flex-col border border-gray-100 group mx-2 p-0"
                                            style={{ minHeight: 420 }}
                                        >
                                            {/* Tag */}
                                            <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold shadow ${plan.tagColor} border border-white z-10`}>{plan.tag}</span>
                                            {/* Icon removed */}
                                            <div className="text-center px-6 pb-2">
                                                <h5 className="text-lg font-bold text-yellow-700 mb-1 flex items-center gap-2 justify-center">
                                                    {plan.name}
                                                    <Info className="w-4 h-4 text-gray-400" title={plan.tag} />
                                                </h5>
                                                <div className="text-2xl font-black text-gray-900 mb-1 tracking-tight">${plan.price}
                                                    <span className="text-base font-medium text-gray-500 ml-1">/ {plan.covers} {plan.covers > 1 ? 'people' : 'person'}</span>
                                                </div>
                                                {plan.extra && <div className="text-sm text-gray-600 mb-1">Extra Dependent: <span className="font-semibold">${plan.extra}</span></div>}
                                                <div className="text-xs text-gray-500 mb-2">Dependents: <b>No age limit</b>, unlimited count.</div>
                                                {/* Benefit Limits Collapsible */}
                                                <BenefitLimits limits={plan.benefitLimits} />
                                                {/* Unique Selling Points */}
                                                <ul className="mt-2 space-y-1 text-xs text-gray-700 w-full">
                                                    <li className="flex items-center gap-2 justify-center"><CheckCircle className="w-4 h-4 text-green-500" /> Chronic medication delivered</li>
                                                    <li className="flex items-center gap-2 justify-center"><CheckCircle className="w-4 h-4 text-green-500" /> Pay ½ ZIG / ½ USD</li>
                                                    <li className="flex items-center gap-2 justify-center"><CheckCircle className="w-4 h-4 text-green-500" /> Spectacles on the spot</li>
                                                    <li className="flex items-center gap-2 justify-center"><CheckCircle className="w-4 h-4 text-green-500" /> Wellness clinic in Mt Pleasant</li>
                                                </ul>
                                            </div>
                                            {/* CTA Button */}
                                            <div className="p-4 border-t bg-gradient-to-r from-yellow-50 to-yellow-100 flex items-center justify-center mt-auto">
                                                <button type="button" className="flex items-center gap-2 px-5 py-2 rounded bg-yellow-600 text-white font-semibold shadow hover:bg-yellow-700 transition text-sm">
                                                    Select Plan
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </Slider>
                            </div>
                        ))}
                    </div>
                    {/* Benefits & Advantages Ribbon/Card */}
                    <div className="mt-10 bg-white rounded-2xl shadow-xl p-8 md:p-14 border border-yellow-100">
                        <h4 className="text-2xl md:text-3xl font-extrabold text-yellow-700 text-center mb-8 flex items-center justify-center gap-3">
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100"><Star className="w-6 h-6 text-yellow-500" /></span>
                            Genfin Benefits & Advantages
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {benefits.map((b, i) => (
                                <div key={i} className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 rounded-2xl shadow-lg p-7 flex flex-row items-center gap-4 hover:scale-105 hover:ring-2 hover:ring-yellow-300 transition-transform duration-200">
                                    <span className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-100 shadow">
                                        {React.cloneElement(b.icon, { className: b.icon.props.className + " w-7 h-7 text-yellow-600" })}
                                    </span>
                                    <span className="flex-1 text-base text-gray-900 font-semibold leading-snug">
                                        {b.title}
                                        {b.desc ? ": " + b.desc : ""}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Compare Plans Modal removed */}
                </div>
                {/* Project Grids Section */}
                <div className="content-area">
                    <div className="project-grids projects-slider">
                        <Slider {...settings}>
                            {Projects.slice(0, 4).map((project, prj) => (
                                <div className="grid" key={prj}>
                                    <div className="img-holder">
                                        <img src={project.pImg} alt="project" className="img img-responsive" />
                                    </div>
                                    <div className="hover-content">
                                        <div className="top-link">
                                            <Link onClick={ClickHandler} to={`/project-single/${project.slug}`}><i className="fi flaticon-next"></i></Link>
                                        </div>
                                        <div className="details">
                                            <h3>{project.title}</h3>
                                            <p className="cat">{project.subTitle && project.subTitle.charAt(0).toUpperCase() + project.subTitle.slice(1)}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;