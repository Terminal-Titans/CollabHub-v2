import React from 'react';


const Profile = () => {
    return (
        <div className="main">
            <div className="sidemenu">
                <div className="sideUpper">
                    <div className="profile_pic">
                        <img src={avatarImage} alt="Avatar" />
                    </div>
                    <h3 className="name">Desha Bare</h3>
                    <p className="position">Web Designer and Developer</p>
                    <div className="social_media_icons">
                        <a href="#" class="socia_icon">
                            <i class="ri-github-fill"></i>
                        </a>
                        <a href="#" class="socia_icon">
                            <i class="ri-linkedin-fill"></i>
                        </a>
                        <a href="#" class="socia_icon">
                            <i class="ri-twitter-fill"></i>
                        </a>
                        <a href="#" class="socia_icon">
                            <i class="ri-mail-fill"></i>
                        </a>
                    </div>
                    <div className="btn">
                        <a href="#" className="socia_icon_colab">
                            <i className="ri-user-add-fill"></i>
                        </a>
                        <p className='collab-text'>COLLAB</p>
                    </div>

                </div>
                <div className="sideLower">
                    <p className="contact">Some Useful Links</p>

                    <p className="email">
                        Email Id <br />
                        <br />
                        desha_bare@gmail.com
                    </p>

                    <p className="mobile">
                        Mobile Number <br />
                        <br />
                        +91 45678 87654
                    </p>
                </div>
            </div>
            <div className="main-content">
                <div className="intro">
                    <div className="container">
                        <div className="profiles">
                            <h1>
                                Hi, it is <span>Desha</span> here, Web Designer and Developer.
                            </h1>
                        </div>
                        <div className="abouts">
                            <div className="about">ABOUT</div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi,
                                in malesuada felis malesuada vel. Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
                                <span>Know more.</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="post">
                    <div className="container">post</div>
                    <div className="container">post</div>
                    <div className="container">post</div>
                    <div className="container">post</div>
                    <div className="container">post</div>
                    <div className="container">post</div>
                    <div className="container">post</div>
                    <div className="container">post</div>
                    <div className="container">post</div>
                    <div className="container">post</div>
                    <div className="container">post</div>
                    <div className="container">post</div>
                    <div className="container">post</div>
                    <div className="container">post</div>
                    <div className="container">post</div>
                    <div className="container">post</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
