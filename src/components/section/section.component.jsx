import { Fragment} from "react"

import './section.styles.scss';

export const Section = ({section}) => {

    const { title, subtitle, sectionId, subtitleLinkText, subtitleLink, bgImage, buttons } = section;

    const imageURL = window.innerWidth >= 650 ? bgImage.desktopBg : bgImage.mobileBg;


    return (
        <Fragment>
            
            <section id={sectionId} style={{ backgroundImage: `url(${imageURL})` }}>
                <div className='body-wrapper'>
                    <div className='section-title'>{title}</div>
                    <div className='section-subtitle'>{subtitle} <a href={subtitleLink}>{subtitleLinkText}</a></div>
                </div>
                <div className='btn-wrapper'>

                    {
                        buttons.map((button) => {
                            return <a href={button.btnLink} className='btn btn-primary' key={button.id}>{button.btnText}</a>
                        })
                    }

                    {/* <a href={secondaryBtnLink} className='btn btn-secondary'>{secondaryBtnText}</a> */}
                    
                </div>
            </section>
                
        </Fragment>
    )
}