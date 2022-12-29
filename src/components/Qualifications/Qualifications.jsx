import React, {useState} from 'react'
import './Qualifications.css'

const Qualifications = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) =>{
        setToggleState(index);
    }

  return (
    <section className="qualifications section" id='qualifications'>
        <h2 className='section__title'>Qualifications</h2>
        <span className='section__subtitle'>My personal journey</span>

        <div className="qualifications__container container">
            <div className="qualifications__tabs">
                <div className={toggleState === 1 ? "qualifications__button qualifications__active button--flex" : "qualifications__button button--flex"} onClick={()=> toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualifications__icon"></i>{" "}
                    Education
                </div>

                <div className={toggleState === 2 ? "qualifications__button qualifications__active button--flex" : "qualifications__button button--flex"} onClick={()=> toggleTab(2)}>
                    <i className="uil uil-award qualifications__icon"></i>{" "}
                    Certifcations
                </div>
            </div>

            <div className="qualifications__section">
                <div className={toggleState === 1 ? "qualifications__content qualifications__content-active" : "qualifications__content"} onClick={()=> toggleTab(1)}>
                    <div className="qualifications__data">
                        <div>
                            <h3 className="qualifications__title">Bachelor of Technology</h3>
                            <span className="qualifications__subtitle">
                                CSE (AI & ML) <br></br>ABES Engineering College (AKTU)
                            </span>
                            <div className="qualifications__calendar">
                                <i className="uil uil-calendar-alt"></i>2020 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualifications__rounder"></span>
                            <span className="qualifications__line"></span>
                        </div>
                    </div>

                    <div className="qualifications__data">
                        <div></div>

                        <div>
                            <span className="qualifications__rounder"></span>
                            <span className="qualifications__line"></span>
                        </div>
                        <div>
                            <h3 className="qualifications__title">Senior Secondary (XII) - 86.6%</h3>
                            <span className="qualifications__subtitle">
                                SMCS Gajraula <br></br>(CBSE)
                            </span>
                            <div className="qualifications__calendar">
                                <i className="uil uil-calendar-alt"></i>2019 - 2020
                            </div>
                        </div>
                    </div>

                    <div className="qualifications__data">
                        <div>
                            <h3 className="qualifications__title">High School (X) - 84%</h3>
                            <span className="qualifications__subtitle">
                                SMCS Gajraula <br />(CBSE)
                            </span>
                            <div className="qualifications__calendar">
                                <i className="uil uil-calendar-alt"></i>2017 - 2018
                            </div>
                        </div>

                        <div>
                            <span className="qualifications__rounder"></span>
                            <span className="qualifications__line"></span>
                        </div>
                    </div>

                    
                </div>

                <div className={toggleState === 2 ? "qualifications__content qualifications__content-active" : "qualifications__content"} onClick={()=> toggleTab(2)}>
                <div className="qualifications__data">
                        <div>
                        <a href='https://drive.google.com/file/d/15-JhqzpEkSjK-5-CbW1jWDtO7l4znE5p/view?usp=share_link' target='_blank'><h3 className="qualifications__title">Fintech Virtual Engineering Experience</h3></a>
                            <span className="qualifications__subtitle">
                               Online<br></br>Goldman Sachs
                            </span>
                            <div className="qualifications__calendar">
                                <i className="uil uil-calendar-alt"></i>Nov '22
                            </div>
                        </div>

                        <div>
                            <span className="qualifications__rounder"></span>
                            <span className="qualifications__line"></span>
                        </div>
                    </div>

                    <div className="qualifications__data">
                        <div></div>

                        <div>
                            <span className="qualifications__rounder"></span>
                            <span className="qualifications__line"></span>
                        </div>
                        <div>
                            <a href='https://drive.google.com/file/d/1fJRPyIOybopDludlk4-2JEx-Tfu4z0Qt/view?usp=share_link' target="_blank"><h3 className="qualifications__title">Data Science and ML Training</h3></a>
                            <span className="qualifications__subtitle">In-Class<br></br>
                            ABES Engineering College
                            </span>
                            <div className="qualifications__calendar">
                                <i className="uil uil-calendar-alt"></i>Jun '22 - Aug '22
                            </div>
                        </div>
                    </div>

                    <div className="qualifications__data">
                        <div>
                            <a href='https://drive.google.com/file/d/1DkcIDHDPse6NJbvlwqHBilRrLjOwvgSK/view?usp=share_link' target='_blank'><h3 className="qualifications__title">Programming Essentials in Python</h3></a>
                            <span className="qualifications__subtitle">
                                Online<br></br>Cisco
                            </span>
                            <div className="qualifications__calendar">
                                <i className="uil uil-calendar-alt"></i>Feb '22
                            </div>
                        </div>

                        <div>
                            <span className="qualifications__rounder"></span>
                            <span className="qualifications__line"></span>
                        </div>
                    </div>

                    <div className="qualifications__data">
                        <div></div>

                        <div>
                            <span className="qualifications__rounder"></span>
                            <span className="qualifications__line"></span>
                        </div>
                        <div>
                            <a href='https://drive.google.com/file/d/1Zr1GtbV2GGHl86JW5ZSZOE4DJ1-2bfxw/view?usp=share_link' target='_blank'><h3 className="qualifications__title">30 Days of Google Cloud Program '21</h3></a>
                            <span className="qualifications__subtitle">
                                 Online<br></br> GDSC ABESEC
                            </span>
                            <div className="qualifications__calendar">
                                <i className="uil uil-calendar-alt"></i> Oct '21 - Nov '21
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualifications