import { motion } from "framer-motion";
import React from "react";
import Button from "./components/button";

import Section from "./components/section";

import {
    AiFillFacebook as FBIcon,
    AiFillInstagram as IGIcon,
    AiFillGithub as GHIcon,
    AiOutlineClose as CloseIcon
} from "react-icons/ai";

import './styles/main.scss';
import Article from "./components/article";

export default function App() {
    
    let [scrollY, setScrollY] = React.useState(0);
    let [scrollHeight, setScrollHeight] = React.useState(0);
    let [landscape, setLandscape] = React.useState(null);
    let [imageSelected, setImageSelected] = React.useState('');

    const scrollRef = React.useRef(null);
    const Mark = ({ children, l = false, i = false }) => <motion.span className={(l ? "clr-alt" : "clr") + (i ? " italic" : "")}>{children}</motion.span>

    React.useEffect(() => {
        if (!scrollRef.current) return;
        let currentElementRef = scrollRef.current;
        const measure = () => {
            let pi = parseInt;
            setScrollY(currentElementRef.scrollTop > pi(currentElementRef.scrollTop) ? pi(currentElementRef.scrollTop) + 1 : pi(currentElementRef.scrollTop));
            setScrollHeight(currentElementRef.scrollHeight - window.innerHeight);
            setLandscape(window.orientation === 90);
        }
        currentElementRef.addEventListener("scroll", measure);
        currentElementRef.addEventListener("resize", measure);
        window.addEventListener("orientationchange", measure);
        return () => {
            currentElementRef.removeEventListener("scroll", measure);
            currentElementRef.removeEventListener("resize", measure);
            window.removeEventListener("orientationchange", measure);
        }
    }, [scrollY, scrollHeight, landscape]);
    
    let section = (scrollY / scrollHeight * 100) / 25;
    let scrolled = (scrollY > window.innerHeight ? scrollY - window.innerHeight : 0) / (scrollHeight - window.innerHeight) * 75

    const Articles = [
        { 
            title: "Web: Hotel Management [part]", 
            description: [
                "This is a first-part of the final project, due to a hard drive failure, I losed the original folder, this is a part of it from a compressed file i found.",
                "The outcome of this project was to manage room reservations in an hotel, it saves every movement in the server into a registry file",
                "The requisites were use a Java EE server, Access database and simple html front-end (JSP)"
            ], 
            photos: ["hotel-admin.png", "hotel-regis.png"], 
            onClick: setImageSelected,
            link: "link/to"
        },
        {
            title: "Web: File Video Rendering",
            description: [
                "This screenshots are temporal while I recover the original project. This project has the objective to load a video from local computer and play it with advanced media controls.",
                "I'm working on gettin back this project and it's screenshots."
            ],
            photos: ["video-render-1.png", "video-render-2.png", "video-render-3.png"],
            onClick: setImageSelected
        },
        {
            title: "Web: Portfolio [Current]",
            description: [
                "This current project is a second-hand made project, I'll be getting a better portfolio in a few days.",
                "The initial project got lost in a hard drive failure a time ago.",
                "The outcome is to save the work I will be doing through my development career.",
                "At this moment, there is not a lot to show, but soon I'll provide more projects as I got to recover | recreate them."
            ],
            photos: ["portfolio-1.png"],
            onClick: setImageSelected,
            link: ""
        },
        {
            title: "Java: Minecraft server plugin",
            description: [
                "This small plugin implemented chat commands and better interaction between players.",
                "Extra features for admin users.",
                "The outcome of this project was to improve in-game chat in a private server I worked on.",
            ],
            photos: [],
            onClick: setImageSelected,
            link: "https://github.com/KevinBarcenas12/BetterChat"
        },
        {
            title: "First portfolio attempt",
            description: [
                "This was one of the first attemps of creating my own portfolio.",
                "I decided to change from Typescript to Javascript, Typescript was displaying unexisting missed file errors.",
                "Then I decided to start again in a new Javascript project.",
                "In the next few days I'll be publishing some screenshots"
            ],
            photos: [],
            onClick: setImageSelected,
            link: "https://github.com/KevinBarcenas12/portfolio-attempt"
        }
    ]

    console.log(scrollY / scrollHeight * 4);

    return <React.Fragment>
        <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, ease: [.25, .25, .5, 1], when: "beforeChildren" }}
            className="main-container"
            ref={scrollRef}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="nav-container"
                style={{ '--page-height': `${scrollHeight}px` }}
            >
                <motion.div 
                    className="buttons"
                    style={{ '--scrolled': `${scrolled}vh`, '--bar-opacity': (landscape ? (section >= 1.15) : (section >= 1)) ? .5 : 0 }}
                >
                    <motion.div>
                        <Button to="#about" current={landscape ? (section > .9 && section < 3.1) : (section >= 1 && section < 2.1)} outline>
                            <Mark l>.</Mark>About<Mark l>()</Mark>
                        </Button>
                        <Button to="#work" current={landscape ? (section >= 3.1 && section < 3.7) : (section >= 2.1 && section < 3.7)} outline>
                            <Mark l>.</Mark>Work<Mark l>()</Mark>
                        </Button>
                        <Button to="#contact" current={landscape ? (section >= 3.6) : (section >= 3.7)} outline>
                            <Mark l>.</Mark>Contact<Mark l>()</Mark>
                        </Button>
                    </motion.div>
                </motion.div>
            </motion.div>
            <Section id="head"> {/* Head Section */}
                <motion.div className="info-square" animate={{ opacity: 1, x: 0 }}>
                    <img src="/img/profile.jpeg" className="img" alt="Profile" />
                    <div className="name-cont">
                        <span>Kevin Andres</span><br/>
                        <span>Galindo Barcenas</span><br/>
                        <span className="role">Front-End Developer</span>
                    </div>
                </motion.div>
                <motion.div
                    className="content"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: .75 }}
                >
                    Welcome to my <Mark l>Portfolio</Mark>!
                    <br />
                    Here you will find some information about me and my work.
                    <br/><br/>
                    This is just a second-hand made portfolio, 
                    my original portfolio is in development
                    <br/>
                    and it's not ready to be published yet.
                    <br/>
                    I apologize for that, but with that said, let's jump into the content!
                    <br/><br/>
                    {/* I love programming and I enjoy putting hours practicing daily.<br/><br/> */}
                    <span style={{ textAlign: 'right', float: 'right' }}>Here you have some buttons to navigate through the page:</span>
                </motion.div>
            </Section>
            <Section id="about"> {/* About Section */}
                <div className="content head-section">
                    <img src="/img/profile.jpeg" className="profile" alt="Profile" ></img>
                    <div className="name-cont">
                        <span className="name">Kevin Galindo</span>
                        <span className="age">20 years old</span>
                        <span className="role">Front-End Web Developer</span>
                    </div>
                </div>
                <div className="content mid-section">
                    <div className="info-cont">
                        I am a <Mark>Front-End Developer</Mark> who likes <Mark l>dark</Mark>, <Mark l>simple</Mark> and <Mark l>animated</Mark> websites,
                        both create and explore them.
                        <br/>
                        I started as a Freelancer from a bit more than <Mark l>two</Mark> years, in this time I haven't
                        created that much projects, but the ones I've created were with a lot of dedication and love.
                        <br/><br/>
                        I really enjoy programming web sites and web applications, I <Mark>love</Mark> to <Mark l>try</Mark> and <Mark l>learn</Mark> new things, 
                        I learn them as fast as I can, trying to <Mark l>read</Mark> every documentation available for it and also <Mark l>testing</Mark> it on my own.
                        <br/><br/>
                        The <Mark l i>(</Mark>tools <Mark l i>||</Mark> techs<Mark l i>)</Mark> I like the most to use are:
                        <motion.ul className="tech-list" role="list">
                            <motion.li>
                                <span>React <Mark l>&</Mark> React Router</span>
                                <br/>
                                <span className="description">Up to 2 years using react as a Front-End</span>
                            </motion.li>
                            <motion.li>
                                <span>Framer motion</span>
                                <br/>
                                <span className="description">Up to 1 year and 6 months using Framer Motion with React</span>
                            </motion.li>
                            <motion.li>
                                <span>SASS</span>
                                <br/>
                                <span className="description">Up to 2 years learning and using SASS</span>
                            </motion.li>
                            <motion.li>
                                <span>Tailwind</span>
                                <br/>
                                <span className="description">Up to 6 months learning and using Tailwind CSS</span>
                            </motion.li>
                            <motion.li>
                                <span>Figma</span>
                                <br/>
                                <span className="description">1 year using Figma tool to create SVG</span>
                            </motion.li>
                            <motion.li>
                                <span>Adobe Illustrator</span>
                                <br/>
                                <span className="description">6 months using Adobe Illustrator to create icons</span>
                            </motion.li>
                            <motion.li>
                                <span>Adobe Photoshop</span>
                                <br/>
                                <span className="description">6 months using Adobe Photoshop editing images</span>
                            </motion.li>
                        </motion.ul>
                        <br/>
                        I prefer to work in a <Mark l>Linux</Mark> enviroment, to be more specific; <Mark>Arch Linux</Mark>.
                        I have worked on <Mark>Arch Linux</Mark> for more than a year now.
                        <br/>
                        I have worked with <Mark l>multiple</Mark> programming languages:
                        <motion.ul role="list">
                            <motion.li>
                                <span>
                                    <span className="title">Javascript <Mark l>(<Mark>Main</Mark>)</Mark></span>
                                    <br/>
                                    <span className="description">2 years in <Mark l>Freelancing</Mark> up to 4 years learning</span>
                                </span>
                            </motion.li>
                            <motion.li>
                                <div>
                                    <span className="title">Java <Mark l>(</Mark>Minecraft <Mark l>(</Mark><Mark>Plugin</Mark> <Mark l>||</Mark> <Mark>Server</Mark><Mark l>)</Mark> developer<Mark l>)</Mark></span>
                                    <br/>
                                    <span className="description">1 year working for a private server, 5 months creating plugins</span>
                                </div>
                            </motion.li>
                            <motion.li>
                                <div>
                                    <span className="title">C++ <Mark l>(</Mark>Study purposes<Mark l>)</Mark></span>
                                    <br/>
                                    <span className="description">Up to 1 year studying language basic usages</span>
                                </div>
                            </motion.li>
                            <motion.li>
                                <div>
                                    <span className="title">C <Mark l>(</Mark>Study purposes<Mark l>)</Mark></span>
                                    <br/>
                                    <span className="description">Up to 6 months studying language basic usages</span>
                                </div>
                            </motion.li>
                            <motion.li>
                                <div>
                                    <span className="title">GoLang <Mark l>(</Mark>Study purposes<Mark l>)</Mark></span>
                                    <br/>
                                    <span className="description">Up to 3 months studying language basic usages</span>
                                </div>
                            </motion.li>
                        </motion.ul>
                    </div>
                </div>
            </Section>
            <Section id="work"> {/* Works Section */}
                <div className="content">
                    <span className="header">To <Mark l>show</Mark> you some of the projects I have <Mark l>worked</Mark> on, i have this small list:</span>
                    <motion.div layout className="project-list">
                        {Articles.map(Article)}
                    </motion.div>
                </div>
            </Section>
            <Section id="contact"> {/* Contact Section */}
                <div className="content">
                    <span className="header">To contact me, you can use my email:</span>
                    <br/><br/>
                    <span className="email">
                        <Mark>
                            <span onClick={() => navigator.clipboard.writeText("kevingbarcenas@gmail.com")}>kevingbarcenas@gmail.com</span>
                        </Mark> <span className="small">(Click to copy)</span>
                    </span>
                    <br/><br/><br/>
                    <span>You can take a look into my social media:</span>
                    <br/><br/>
                    <a href="https://www.facebook.com/andres.barcenas.3720/"><Mark l>Facebook <FBIcon className="icon" /></Mark> <Mark l></Mark></a>
                    <br/>
                    <a href="https://www.instagram.com/kevin.barcenas12/"><Mark l>Instagram <IGIcon className="icon" /></Mark></a>
                    <br/>
                    <a href="https://github.com/KevinBarcenas12"><Mark l>GitHub <GHIcon className="icon" /></Mark></a>
                    <br/>
                </div>
            </Section>
        </motion.div>
        {imageSelected && <div className="image-selected">
            <button className="close-button" onClick={() => setImageSelected(null)}><CloseIcon className="icon" /></button>
            <img src={imageSelected} alt="fc" className="fc-img" />
        </div>}
    </React.Fragment>
}