import { Link } from "react-router-dom";
import "./Home.css";
import { useEffect, useState, useRef } from "react";

function Home() {
  const myInputRef = useRef();

  const iconsun = useRef();

  const iconmoon = useRef();

  const formsbackgroundcolor = useRef();

  const body = useRef();

  const focusOnchange = () => {
    const isChecked = myInputRef.current.checked
    if (isChecked) {
      iconsun.current.style.display = 'none';
      iconmoon.current.style.display = 'block';
      formsbackgroundcolor.current.style.backgroundColor = '#2C303A';
      formsbackgroundcolor.current.style.color = '#bec3ce';
      body.current.style.backgroundColor = 'blue';
    } else {
      iconsun.current.style.display = 'block';
      iconmoon.current.style.display = 'none';
      formsbackgroundcolor.current.style.backgroundColor = 'white';
      formsbackgroundcolor.current.style.color = 'black';
      body.current.style.backgroundColor = '#161716';
    }
    localStorage.setItem('darkMode',isChecked);
  };

  const repayAmountElement = useRef();

  const focusreamountEl = () => {
    const element = repayAmountElement.current;
    if (element) {
      element.style.outline = "1px solid #0050B2";
      element.style.transitionProperty = "outline";
      element.style.transitionDuration = "100ms";
      element.style.transitionTimingFunction = "ease-in";
      console.log(true);
    }
  };

  const handleOutsideClickEle = (e) => {
    const element = repayAmountElement.current;
    if (element && !element.contains(e.target)) {
      element.style.outline = "none";
    }
  };

  const daysElement = useRef();

  const focusDaysElement = () => {
    const element = daysElement.current;
    if (element) {
      element.style.outline = "1px solid #0050B2";
      element.style.transitionProperty = "outline";
      element.style.transitionDuration = "100ms";
      element.style.transitionTimingFunction = "ease-in";
      console.log(true);
    }
  };

  const handledDaysOutsideClick = (e) => {
    const element = daysElement.current;
    if (element && !element.contains(e.target)) {
      element.style.outline = "none";
    }
  };

  const amountEle = useRef();

  const focusAmountElement = () => {
    const element = amountEle.current;
    if (element) {
      element.style.outline = "1px solid #0050B2";
      element.style.transitionProperty = "outline";
      element.style.transitionDuration = "70ms";
      element.style.transitionTimingFunction = "ease-in";
      console.log(true);
    }
  };

  const handleAmountOutsideClick = (e) => {
    const element = amountEle.current;
    if (element && !element.contains(e.target)) {
      element.style.outline = "none";
    }
  };

  const selectElement = useRef();

  const focusSelectElement = () => {
    const element = selectElement.current;
    if (element) {
      element.style.outline = "1px solid #0050B2";
      element.style.transitionProperty = "outline";
      element.style.transitionDuration = "100ms";
      element.style.transitionTimingFunction = "ease-in";
      console.log(true);
    }
  };

  const handleSelectElClick = (e) => {
    const element = selectElement.current;
    if (element && !element.contains(e.target)) {
      element.style.outline = "none";
    }
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

      prevScrollpos = currentScroll;
    };
  };

  useEffect(() => {
  const darkMode = localStorage.getItem('darkMode');
   myInputRef.current.checked = darkMode === "true";
   focusOnchange();

    document.addEventListener("click", handleOutsideClickEle);

    document.addEventListener("click", handledDaysOutsideClick);

    document.addEventListener("click", handleAmountOutsideClick);

    document.addEventListener("click", handleSelectElClick);

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleOutsideClickEle);

      document.removeEventListener("click", handledDaysOutsideClick);

      document.removeEventListener("click", handleAmountOutsideClick);

      document.removeEventListener("click", handleSelectElClick);

      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="body" ref={body}>
      {/* <br></br><br></br> */}
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
            <Link to="/" className="active" ref={homeLink}>
              HOME
            </Link>
            <div className="circle-border" ref={circleElement}></div>
            <br></br>
            <br></br>
            <div className="dropdown_content animate__animated animate__fadeIn">
              <li className="caret-up">
                <i class="fa-solid fa-caret-up"></i>
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
                <i class="fa-solid fa-caret-up"></i>
              </li>
              <Link
                to="#"
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
                <i class="fa-solid fa-caret-up"></i>
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
                <i class="fa-solid fa-caret-up"></i>
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
                <i class="fa-solid fa-caret-up"></i>
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

          <label class="switch">
            <input type="checkbox" ref={myInputRef} onClick={focusOnchange} />
            <span class="slider round"></span>
            <i class="fa-solid fa-cloud-sun" ref={iconsun}></i>
            <i class="fa-solid fa-moon" ref={iconmoon}></i>
          </label>
        </div>
      </ul>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* <br></br>
      <br></br>
      <br></br> */}

      <div className="layout_one_dev">
        <div className="financial-text">

            <div className="head">
             <h1 className="head-smart-f"> Smart finance<br></br> solutions for your</h1>
              <nav className="rectangle"> <li className="rectt"></li> <h2 className="head-buss">business</h2> </nav>
            </div>

            <img
              src="https://html-template.spider-themes.net/banca/img/home-4/shape-4.png"
              className="shape-four-img"
              alt="shapefour"
            />
            <p>
              Inventore veritatis et architecto beatae vitae dicta explicabo
              nemo enim<br></br> ipsam voluptatem quia voluptas aspernatur
              magni.
            </p>
            <button type="submit" className="bitton-one">
              <Link
                to="#"
                style={{
                  textDecoration: "none",
                  color: "white",
                  textAlign: "center",
                  fontFamily:
                    "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                }}
              >
                Get Started Now
              </Link>
            </button>
            <Link to="#" className="link">
              Explore now{" "}
              <i
                class="fa-solid fa-arrow-right ms-2 animate__animated animate__fadeIn"
                style={{ fontSize: "15px" }}
              ></i>
            </Link>
          <br></br>
          <br></br>
          <br></br>
          <div className="copera">
            <p>We are coperationg with:</p>
            <img
              src="https://html-template.spider-themes.net/banca/img/home-4/cooperator-1.png"
              alt="holdings-logo"
            />
            <img
              src="https://html-template.spider-themes.net/banca/img/home-4/cooperator-2.png"
              alt="martyn-logo"
              className="ms-3"
            />
            <img
              src="https://html-template.spider-themes.net/banca/img/home-4/cooperator-3.png"
              alt="reliance-logo"
              className="ms-3"
            />
          </div>
          <img
              src="https://html-template.spider-themes.net/banca/img/home-4/shape-2.png"
              alt="shapetwo"
              className="shape-two-img"
            />
        </div>
        
        <form className="forms" ref={formsbackgroundcolor}>
          <h2 style={{ fontWeight: "bold" }}>Loan calculator</h2>
          <br></br>
          <div className="select_dev" style={{ marginBottom: "20px" }}>
            <label htmlFor="typeloan" className="mb-3">
              Type of Loan
            </label>
            <br></br>
            <select ref={selectElement} onClick={focusSelectElement}>
              <option value="1" selected>
                Debt Loan
              </option>
              <option value="2">Installment loan</option>
            </select>
          </div>
          <div className="amount_dev" style={{ marginBottom: "20px" }}>
            <label htmlFor="amount" className="mb-3">
              Amount of money
            </label>
            <br></br>
            <input
              type="text"
              placeholder="Enter amount"
              className="inpu"
              ref={amountEle}
              onClick={focusAmountElement}
            />
            <i class="fa-solid fa-dollar-sign"></i>
          </div>
          <div className="days-dev" style={{ marginBottom: "20px" }}>
            <label htmlFor="days" className="mb-3">
              For how long (days)
            </label>
            <br></br>
            <input
              type="text"
              placeholder="For how long (days)"
              ref={daysElement}
              onClick={focusDaysElement}
            />
          </div>
          <div className="repay-dev" style={{ marginBottom: "20px" }}>
            <label htmlFor="repay" className="mb-3">
              Repayments
            </label>
            <br></br>
            <input
              type="text"
              placeholder="Enter amount"
              ref={repayAmountElement}
              onClick={focusreamountEl}
            />
            <i class="fa-solid fa-dollar-sign"></i>
          </div>
          <button type="submit" className="bitton">
            <Link
              to="#"
              style={{
                textDecoration: "none",
                textAlign: "center",
                color: "white",
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              Apply For Loans
            </Link>
          </button>
          <img
            src="https://html-template.spider-themes.net/banca/img/home-4/shape-1.png"
            alt="shapeone"
            className="shape-one"
          />
          <img
            src="https://html-template.spider-themes.net/banca/img/home-4/shape-5.png"
            alt="shapefive"
            className="shape-five"
          />
          <img
            src="https://html-template.spider-themes.net/banca/img/home-4/shape-3.png"
            alt="shapethree"
            className="shape-three"
          />
        </form>
      </div>
    </div>
  );
}

export default Home;
