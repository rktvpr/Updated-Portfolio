import PWA from '../assets/PWA-text-editor.png'
import TechBlog from '../assets/Tech-blog.png'
import SocialMediaAPI from '../assets/Social-Media-API.png'
import grittyWear from '../assets/gritty-wear.png'
import eCommerce from '../assets/E-Commerce.png'
import noteTaker from '../assets/Note-Taker.png'
import employee from '../assets/Employee.png'
function Work() {
    return (
        <div className="portfolio">
            <div className="portfolioTitle text-center mb-5"> My Portfolio</div>
            <div class="card mb-5 ml-5 mr-5">
                <img src={PWA} class="card-img-top" alt="PWA-text-editor" />
                <div class="card-body text-bg-secondary p-3 rounded-bottom">
                    <h5 class="card-title">PWA Text Editor</h5>
                    <p class="card-text">A PWA text editor with the ability to save and fetch notes to and from an indexedDB. There is also a install feature where you can download and run the app locally. </p>
                    <a href="https://github.com/rktvpr/PWA-text-editor" class="btn btn-dark">View Code!</a>
                    <p class="card-text"><small>Last commit 2/6/23</small></p>
                </div>
            </div>
            <div class="card mb-5 ml-5 mr-5">
                <img src={TechBlog} class="card-img-top" alt="Tech Blog" />
                <div class="card-body text-bg-secondary p-3 rounded-bottom">
                    <h5 class="card-title">RKT's Tech Blog</h5>
                    <p class="card-text">This is a Tech Blog webpage that has multiple functionalities to it including,
                        a login/logout feature, a dashboard to view posts from others, the ability to post new blog posts,
                        as well as comment and reaction functionality.</p>
                        <a href="https://github.com/rktvpr/Tech-Blog" class="btn btn-dark">View Code!</a>
                    <p class="card-text"><small>Last commit 2/6/23</small></p>
                </div>
            </div>
            <div class="card mb-5 ml-5 mr-5">
                <img src={SocialMediaAPI} class="card-img-top" alt="Tech Blog" />
                <div class="card-body text-bg-secondary p-3 rounded-bottom">
                    <h5 class="card-title">Social Network API</h5>
                    <p class="card-text">This is a backend API to be used for a social media site. This API has the ability to
                        create users with email and username as well as read, update and delete users. A user can create/read/update/delete a thought,
                        these thoughts can have reactions as well. Each user has the ability to add friends or delete them. This API was made using
                        MongoDB database and express.</p>
                        <a href="https://github.com/rktvpr/Social-Network-API" class="btn btn-dark">View Code!</a>
                    <p class="card-text"><small>Last commit 1/30/23</small></p>
                </div>
            </div>
            <div class="card mb-5 ml-5 mr-5">
                <img src={grittyWear} class="card-img-top" alt="Tech Blog" />
                <div class="card-body text-bg-secondary p-3 rounded-bottom">
                    <h5 class="card-title">Gritty-Wear</h5>
                    <p class="card-text">This is a group project I led within this bootcamp, managing branches, merge conflicts, and commits; while doing backend
                    and front end coding. This webpage is a Gritty themed E-Commerce store, using Stripe API for checkout and MySQL for the database. </p>
                    <a href="https://github.com/rktvpr/Gritty-Wear" class="btn btn-dark">View Code!</a>
                    <p class="card-text"><small>Last commit 12/22/22</small></p>
                </div>
            </div>
            <div class="card mb-5 ml-5 mr-5">
                <img src={eCommerce} class="card-img-top" alt="Tech Blog" />
                <div class="card-body text-bg-secondary p-3 rounded-bottom">
                    <h5 class="card-title">E-Commerce Back End</h5>
                    <p class="card-text">This is a back end application for an E-Commerce company using a mySQL database. 
                    It has the purpose of viewing, adding, updating and deleting Categories, Products, and Tags for the products.</p>
                    <a href="https://github.com/rktvpr/E-Commerce-Back-End" class="btn btn-dark">View Code!</a>
                    <p class="card-text"><small>Last commit 12/7/22</small></p>
                </div>
            </div>
            <div class="card mb-5 ml-5 mr-5">
                <img src={noteTaker} class="card-img-top" alt="Tech Blog" />
                <div class="card-body text-bg-secondary p-3 rounded-bottom">
                    <h5 class="card-title">Express Note Taker</h5>
                    <p class="card-text">An application made with Express.JS to be able to write save and delete notes and have them be saved in local storage.</p>
                    <a href="https://github.com/rktvpr/E-Commerce-Back-End" class="btn btn-dark">View Code!</a>
                    <p class="card-text"><small>Last commit 12/1/22</small></p>
                </div>
            </div>
            <div class="card mb-5 ml-5 mr-5">
                <img src={employee} class="card-img-top" alt="Tech Blog" />
                <div class="card-body text-bg-secondary p-3 rounded-bottom">
                    <h5 class="card-title">SQL Employee Tracker</h5>
                    <p class="card-text">This application is a command line Employee Tracker which takes user inputs 
                    and puts the information into an SQL database for the user to organize and keep track of their company. 
                    It allows users to view all departments, add a department, view roles for the company, add roles to the company, 
                    view employees and their information, add employees, and modify employees info.</p>
                    <a href="https://github.com/rktvpr/SQL-Employee-Tracker" class="btn btn-dark">View Code!</a>
                    <p class="card-text"><small>Last commit 12/1/22</small></p>
                </div>
            </div>
        </div>
    )
}
export default Work