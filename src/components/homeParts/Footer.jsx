import React from 'react';
import '../../styles/homePartsCss/footer.sass';
import linkedin from '../../svg/linkedin.svg';  
import github from '../../svg/github.svg';
import gmail from '../../svg/gmail.svg';

export default class Footer extends React.Component {

    
    render () { 
        return (
            <>
                <div className="social-media clearfix">
                    <div className="icon clearfix">
                        <a className="referIcon" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tru-nguyen-0275b2177/"><img src={linkedin} alt=""/></a>
                        <a className="referIcon" target="_blank" rel="noopener noreferrer" href="https://github.com/quoctru99"><img src={github} alt=""/></a>
                        <a className="referIcon" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tru-nguyen-0275b2177/"><img src={gmail} alt=""/></a>
                    </div>
                </div>
                <div className="location">
                    <p className="address">CHICAGO IL, 60630. (312)-208-2090. NGUYENQUOCTRU99@GMAIL.COM</p>
                </div>
            </>
        )
    }


}