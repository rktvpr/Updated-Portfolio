function Header() {
    return (
        <nav class="navbar navbar-expand-lg bg-light sticky-top text-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#home">Richard Welte</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#aboutMe">About Me</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#portfolioTitle">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://drive.google.com/file/d/1PK12J_k4SOhlvotvqQwAOfzQZu5zZc5q/view?usp=sharing">Resume</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#footer">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;