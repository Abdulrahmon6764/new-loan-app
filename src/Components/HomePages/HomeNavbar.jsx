import React from "react";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function HomeNavbar(props) {
  const myInputRef = useRef();

  const iconsun = useRef();

  const iconmoon = useRef();

  const { formsbackgroundcolor, body } = props;

  const focusOnchange = () => {
    const isChecked = myInputRef.current.checked;
    if (isChecked) {
      iconsun.current.style.display = "none";
      iconmoon.current.style.display = "block";
      formsbackgroundcolor.current.style.backgroundColor = "#2C303A";
      formsbackgroundcolor.current.style.color = "#bec3ce";
      body.current.style.backgroundColor = "blue";
    } else {
      iconsun.current.style.display = "block";
      iconmoon.current.style.display = "none";
      formsbackgroundcolor.current.style.backgroundColor = "white";
      formsbackgroundcolor.current.style.color = "black";
      body.current.style.backgroundColor = "#161716";
    }
    localStorage.setItem("darkMode", isChecked);
  };

  const navBar = useRef();
  let prevScrollpos = window.pageYOffset;
  const _imageLogo = useRef();
  const homeLink = useRef();
  const circleElement = useRef();
  const loanElement = useRef();
  const getjobElement = useRef();
  const aboutElement = useRef();
  const blogElement = useRef();
  const applyElement = useRef();

  const handleScroll = () => {
    window.onscroll = function () {
      var currentScroll = window.pageYOffset;
      const element = navBar.current;
      const _imageElement = _imageLogo.current;
      const homeLinkEl = homeLink.current;
      const circleE = circleElement.current;
      const loanEl = loanElement.current;
      const getjobEl = getjobElement.current;
      const aboutEl = aboutElement.current;
      const blogEl = blogElement.current;
      const applyEl = applyElement.current;

      if (prevScrollpos > currentScroll) {
        element.style.top = "0";
        element.style.transitionProperty = "top";
        element.style.transitionDuration = "1s";
        element.style.opacity = "0.8";
      } else {
        element.style.top = "-125px";
        element.style.transitionProperty = "top";
        element.style.transitionDuration = "1s";
        element.style.opacity = "0.8";
      }

      if (currentScroll < 35) {
        element.style.top = "0";
        element.style.backgroundColor = "white";
        element.style.opacity = "0.8";
        _imageElement.setAttribute(
          "src",
          "https://html-template.spider-themes.net/banca/img/logo/Logo-2.png"
        );
        homeLinkEl.style.color = "#0050b2";
        circleE.style.backgroundColor = "#0050b2";
        circleE.style.color = "#0050b2";
        loanEl.style.color = "black";
        aboutEl.style.color = "black";
        blogEl.style.color = "black";
        applyEl.style.color = "white";
        applyEl.style.backgroundColor = "#0050b2";
        applyEl.style.border = "1px solid #0050b2";
        getjobEl.style.color = "black";
        getjobEl.style.width = "70px";
      }

      if (currentScroll < 1) {
        element.style.backgroundColor = "#161716";
        // element.style.backgroundImage="conic-gradient(at 50% 5%,#161716,#131A16)"
        _imageElement.setAttribute(
          "src",
          "https://html-template.spider-themes.net/banca/img/logo/Logo@2x.png"
        );
        homeLinkEl.style.color = "white";
        circleE.style.backgroundColor = "white";
        circleE.style.color = "white";
        loanEl.style.color = "white";
        aboutEl.style.color = "white";
        blogEl.style.color = "white";
        getjobEl.style.color = "white";
        getjobEl.style.width = "70px";
        applyEl.style.backgroundColor = "white";
        applyEl.style.color = "#0050b2";
        applyEl.style.border = "1px solid white";
        applyEl.addEventListener("mouseover", () => {
          applyEl.style.backgroundColor = "#0050b2";
          applyEl.style.border = "1px solid #0050b2";
          applyEl.style.color = "white";
        });
        applyEl.addEventListener("mouseout", () => {
          applyEl.style.backgroundColor = "white";
          applyEl.style.color = "#0050b2";
          applyEl.style.border = "1px solid white";
        });
      }

      let gotToTupButton = document.getElementById("myBTN");
      if (document.documentElement.scrollTop > 20 || window.scrollY > 20) {
        gotToTupButton.style.display = "block";
      } else {
        gotToTupButton.style.display = "none";
      }

      prevScrollpos = currentScroll;

      localStorage.setItem("currentScroll", prevScrollpos);
    };
  };

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    myInputRef.current.checked = darkMode === "true";
    focusOnchange();

    let currentScrrol = localStorage.getItem("currentScroll");

    currentScrrol == handleScroll;

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <ul className="flex-container" ref={navBar}>
        <div className="dflex">
          <li className="image_logo">
            <img
              src="https://html-template.spider-themes.net/banca/img/logo/Logo@2x.png"
              alt="logo"
              width={"100%"}
              ref={_imageLogo}
            />
          </li>
          <div className="drop_down">
            <Link to="/" className="home-active" ref={homeLink}>
              HOME
            </Link>
            <div className="circle-border" ref={circleElement}></div>
            <br></br>
            <br></br>
            <div className="dropdown_content animate__animated animate__fadeIn">
              <li className="caret-up">
                <i className="fa-solid fa-caret-up"></i>
              </li>
              <Link to="/" className="link_smart block">
                Smart Finance
              </Link>
              <Link
                to="#"
                className="loan-link block"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "gray",
                }}
              >
                Loan Company
              </Link>
              <Link
                to="#"
                className="mobilee-link block"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "gray",
                }}
              >
                Mobile App
              </Link>
              <Link
                to="#"
                className="simple-link block"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "gray",
                }}
              >
                Simple Banca
              </Link>
              <Link
                to="#"
                className="steps-link block"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "gray",
                }}
              >
                Loan Steps
              </Link>
              <Link
                to="#"
                className="finance-link block"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "gray",
                }}
              >
                Finance Sass App
              </Link>
              <Link
                to="#"
                className="small-link block"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "gray",
                }}
              >
                Small Bank
              </Link>
            </div>
          </div>

          <div className="loan-app-dropdown">
            <span ref={loanElement}>LOAN</span>
            <br></br>
            <br></br>
            <div className="loan-app-dropdown-content animate__animated animate__fadeIn">
              <li className="caret">
                <i className="fa-solid fa-caret-up"></i>
              </li>
              <Link
                to="loan"
                className="getloan-link dblock"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "gray",
                }}
              >
                Get Loan
              </Link>
              <Link
                to="#"
                className="loanapp-link dblock"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "gray",
                }}
              >
                Loan Application
              </Link>
            </div>
          </div>

          <div className="get-job-dropdown">
            <span ref={getjobElement}>GET JOB</span>
            <br></br>
            <br></br>
            <div className="job-dropdown-content animate__animated animate__fadeIn">
              <li className="carett">
                <i className="fa-solid fa-caret-up"></i>
              </li>
              <Link
                to="#"
                className="get-link dblock"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "gray",
                }}
              >
                Career
              </Link>
              <Link
                to="#"
                className="jb-link dblock"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "gray",
                }}
              >
                Jobs
              </Link>
              <Link
                to="#"
                className="jbapp-link dblock"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "gray",
                }}
              >
                Job Application
              </Link>
            </div>
          </div>

          <div className="about-dropdown">
            <span ref={aboutElement}>ABOUT</span>
            <br></br>
            <br></br>
            <div className="about-dropdown-content animate__animated animate__fadeIn">
              <li className="carett">
                <i className="fa-solid fa-caret-up"></i>
              </li>
              <Link
                to="#"
                className="cd-link dblock"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "gray",
                }}
              >
                Cards
              </Link>
              <Link
                to="#"
                className="abs-link dblock"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "gray",
                }}
              >
                About Us
              </Link>
              <Link
                to="#"
                className="cs-link dblock"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "gray",
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="blog-dropdown">
            <span ref={blogElement}>BLOG</span>
            <br></br>
            <br></br>
            <div className="blog-dropdown-content animate__animated animate__fadeIn">
              <li className="caretfa">
                <i className="fa-solid fa-caret-up"></i>
              </li>
              <Link
                to="#"
                className="news-link dblock"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "gray",
                }}
              >
                Latest News
              </Link>
              <Link
                to="#"
                className="detail-link dblock"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "gray",
                }}
              >
                Details
              </Link>
            </div>
          </div>

          <div className="apply_dev">
            <Link to="#" className="apply-loan" ref={applyElement}>
              APPLY
            </Link>
          </div>

          <label className="switch">
            <input type="checkbox" ref={myInputRef} onClick={focusOnchange} />
            <span className="slider round"></span>
            <i className="fa-solid fa-cloud-sun" ref={iconsun}></i>
            <i className="fa-solid fa-moon" ref={iconmoon}></i>
          </label>
        </div>
      </ul>
    </div>
  );
}

export default HomeNavbar;
