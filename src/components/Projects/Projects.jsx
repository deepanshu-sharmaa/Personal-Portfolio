import React from 'react'
import { useState, useRef } from 'react'
import './projects.css'

const Projects = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) =>{
        setToggleState(index);
    }

  return (
    <section className="projects section" id="projects">
        <h2 className='section__title'>Projects</h2>
        <span className='section__subtitle'> What projects I have completed</span>

        <div className="projects__container container grid">
            <div className="projects__content">
                <div>
                    <i className='uil uil-music projects__icon'></i>
                    <h3 className="servies__title">Spotify <br /> Clone</h3>
                </div>

                <span className="projects__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right projects__button-icon"></i></span>

                <div className={toggleState === 1 ? "projects__modal active-modal" : "projects__modal"}>
                    <div className="projects__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                        <h3 className="projects__modal-title">Spotify Clone</h3>
                        <p className="projects__modal-description">
                        This is a clone of th UI/UX of the Spotify, one of the leading music platforms.
                        </p>

                        <ul className="projects__modal-projects grid">
                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">
                                I developed the user interface.
                                </p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">React, Material UI, Context API and Flexbox are used.</p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">Spotify API's are used.</p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">User can login using its credentials via Spotify Authentication</p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">User can view its playlists, username and profile photo.</p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <a href='https://github.com/deepanshu-sharmaa/clone-spotify' target='_blank'><p className="projects__modal-info">Link to the project</p></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="projects__content">
                <div>
                <i className='uil uil-tear projects__icon'></i>
                    <h3 className="servies__title">Red <br /> Saviour</h3>
                </div>

                <span onClick={() => toggleTab(2)} className="projects__button">View More <i className="uil uil-arrow-right projects__button-icon"></i></span>

                <div className={toggleState === 2 ? "projects__modal active-modal" : "projects__modal"}>
                    <div className="projects__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                        <h3 className="projects__modal-title">Red Saviour</h3>
                        <p className="projects__modal-description">This is the frontend for the website of Blood Bank Management System with mulitple pages.</p>

                        <ul className="projects__modal-projects grid">
                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">This is my first project, kinda very basic.</p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">HTML, CSS and little bit of JS is used in this.</p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">I created multiple pages such as login, availability and schedule.</p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">I developed the user interface.</p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <a href='https://github.com/deepanshu-sharmaa/Red-Saviour' target='_blank'><p className="projects__modal-info">Link to the project</p></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="projects__content">
                <div>
                    <i className='uil uil-web-grid projects__icon'></i>
                    <h3 className="servies__title">Other<br></br> Projects</h3>
                </div>

                <span className="projects__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right projects__button-icon"></i></span>

                <div className={toggleState === 3 ? "projects__modal active-modal" : "projects__modal"}>
                    <div className="projects__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                        <h3 className="projects__modal-title">Other Projects</h3>
                        <p className="projects__modal-description">This section contains various other projects I made during my MERN training.</p>

                        <ul className="projects__modal-projects grid">
                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">I developed the user interface of a "Travel Agency".</p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <a href='https://github.com/deepanshu-sharmaa/Travel-Agency-Website' target='_blank' ><p className="projects__modal-info">Link to the project</p></a>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">I created a basic "To-Do List Web-app" using JS.</p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <a href='https://github.com/deepanshu-sharmaa/To-Do-List-Simple' target='_blank'><p className="projects__modal-info">Link to the project</p></a>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">I created a landing page for a construction firm using Bootstrap</p>
                            </li>

                            <li className="projects__modal-service">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <a href='https://github.com/deepanshu-sharmaa/BuildCon' target='_blank'><p className="projects__modal-info">Link to the project</p></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects