import backgroundOne from '../assets/background.jpg'

function Display() {
    return (
        <div className="container">
            <div className="myName">
                <div className="name text-center mt-5 mb-4">Richard Welte</div>
            </div>
            <div>
                <div className="title text-center fs-1 mb-4">Full Stack Web Developer</div>
            </div>
            <div className="ProfilePicture text-center mb-4">
                <img alt="display img" src="https://via.placeholder.com/300/09f.png/fff "/>
            </div>
            <div className="aboutMeContainer">
                <div className="aboutMe fs-4 mb-5 text-center fw-semibold lh-lg"> Welcome to my portfolio! I am a Web Developer enrolled in UPenn's coding bootcamp, graduating in March 2023.
                    I enjoy back end coding preffered to front end but am capable of both.
                    I have always enjoyed technology, ranging from video games, video editing, audio production, and development of all sorts.
                    Seeing all the pieces of a project come together has been something I enjoyed throughout my schooling. Troubleshooting,
                    problem solving, and creative thinking have been strong suits throughout the years. Web development has been a fun and
                    interesting journey, allowing these skills and interests to be put to use, whether it be from group projects, in class
                    activities, or homework assignments, creating our own web applications or webpages.
                </div>
            </div>
        </div>
    )
}

export default Display;