function Header() {
    return(
        <div className="NavContainer">
            <nav className="navbar">
                <ul className="list">
                    <li>
                        <a href="title"> Home </a>
                    </li>
                    <li>
                        <a href="aboutMe"> About Me </a>
                    </li>
                    <li>
                        <a href="workContainer"> Portfolio </a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/1PK12J_k4SOhlvotvqQwAOfzQZu5zZc5q/view?usp=sharing">Resume</a>
                    </li>
                    <li>
                        <a href="https://github.com/rktvpr"> Github </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/richard-welte-a263a8246/">LinkedIn</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;