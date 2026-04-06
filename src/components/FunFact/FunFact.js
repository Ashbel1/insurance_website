import React from 'react'
import CountUp from 'react-countup';

const funFact = [
    {
        title: '10',
        subTitle: 'Years Serving Zimbabwe',
        Symbol: '+',
        icon: 'fa fa-calendar-check-o',
    },
        {
        title: '500',
        subTitle: 'Members Covered',
        Symbol: '+',
         icon: 'fa fa-users',
       
        iconStyle: { color: '#111', fontSize: '2.5rem' },
    },

    {
        title: '100',
        subTitle: 'Healthcare Partners',
        Symbol: '+',
         icon: 'fa fa-medkit',
        iconStyle: { color: '#111', fontSize: '2.5rem' },
    },
    {
        title: '24',
        subTitle: 'Hour Support',
        Symbol: '/7',
        icon: 'fa fa-clock-o',
    },
]


const FunFact = (props) => {
    return (
        <section className="fun-fact-section mt-5">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="fun-fact-grids clearfix">
                            {funFact.map((funfact, fitem) => (
                                <div className="grid" key={fitem}>
                                    <div className="icon" style={funfact.iconStyle ? {background:'#FFD700',borderRadius:'50%',width:'70px',height:'70px',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 18px auto'} : {}}>
                                        <i className={funfact.icon} style={funfact.iconStyle}></i>
                                    </div>
                                    <div className="info">
                                        <h3><span><CountUp end={funfact.title} enableScrollSpy /></span>{funfact.Symbol}</h3>
                                        <p>{funfact.subTitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <span id="counter" className='d-none' />
        </section>
    )
}

export default FunFact;