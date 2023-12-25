import { Link } from "react-router-dom";
import "./Home.css";
import { useEffect, useRef } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "./CarouselStyles.css";
function Home() {
  //////Dark Mode Handling
  const myInputRef = useRef();

  const iconsun = useRef();

  const iconmoon = useRef();

  const formsbackgroundcolor = useRef();

  const body = useRef();

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

      // localStorage.setItem("prevScroll", currentScroll);
    };
  };

  const handleTabDisplay = (evt, tabname) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" activee", "");
    }

    document.getElementById(tabname).style.display = "block";

    evt.currentTarget.className += " activee";
  };

  const handleCollapsibles = () => {
    let coll = document.getElementsByClassName("collapsible");
    // const defaultColabs = document.getElementById("DefaultCollabsOpen").click();
    let i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active_e");
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
    document.getElementById("DefaultCollabsOpen").click();
    // localStorage.setItem("defaultColabs", defaultColabs);
  };

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    myInputRef.current.checked = darkMode === "true";
    focusOnchange();

    // document.getElementById("DefaultCollabsOpen").click();
    // const currentScroll = localStorage.getItem("prevScroll")
    // window.onscroll = currentScroll

    // handleScroll();

    handleCollapsibles();

    document.getElementById("DefaultCollabsOpen").click();

    document.addEventListener("click", handleOutsideClickEle);

    document.addEventListener("click", handledDaysOutsideClick);

    document.addEventListener("click", handleAmountOutsideClick);

    document.addEventListener("click", handleSelectElClick);

    window.addEventListener("scroll", handleScroll);

    document.getElementById("defaultOpen").click();

    return () => {
      document.getElementById("DefaultCollabsOpen").click();

      handleCollapsibles();

      //  window.onscroll(null,currentScroll)

      // window.onscroll = null;

      document.removeEventListener("click", handleOutsideClickEle);

      document.removeEventListener("click", handledDaysOutsideClick);

      document.removeEventListener("click", handleAmountOutsideClick);

      document.removeEventListener("click", handleSelectElClick);

      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="body">
      {/* <br></br><br></br> */}
      <main className="back_ground_color" ref={body}>
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
              <h1 className="head-smart-f">
                {" "}
                Smart finance<br></br> solutions for your
              </h1>
              <nav className="rectangle">
                {" "}
                <li className="rectt"></li>{" "}
                <h2 className="head-buss">business</h2>{" "}
              </nav>
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
                className="fa-solid fa-arrow-right ms-2 animate__animated animate__fadeIn"
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
              <i className="fa-solid fa-dollar-sign"></i>
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
              <i className="fa-solid fa-dollar-sign"></i>
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
      </main>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="txt-content">
        <div>
          <h6 style={{ textAlign: "center", color: "grey", fontSize: "12px" }}>
            _OUR PROCESS
          </h6>
          <nav className="rectan">
            <li className="recti"></li>
            <h1 className="three-steps">3 steps to follow</h1>
          </nav>
          <p className="text-center">
            There are many variations of passages of Lorem Ipsum available, but
            the<br></br> majority have suffered alteration in some form,
          </p>
        </div>
      </div>

      <div className="flex-boxe">
        <div className="box-one">
          <img
            src="https://html-template.spider-themes.net/banca/img/home-4/step-icon-01.svg"
            alt="wave-icon"
            className="wave-icon"
          />
          <h3 style={{ textAlign: "center" }}>Apply for loan</h3>
          <p>
            Quis dapibus volutpat condimentum quam<br></br> sed non elit sed
            magna lectus dui interdum<br></br> facilisi justo
          </p>
        </div>

        <div className="box-two">
          <img
            src="https://html-template.spider-themes.net/banca/img/home-4/step-icon-02.svg"
            alt="like-icon"
            className="like-icon"
          />
          <h3 style={{ textAlign: "center" }}>Get approved</h3>
          <p>
            Quis dapibus volutpat condimentum quam<br></br> sed non elit sed
            magna lectus dui interdum<br></br> facilisi justo
          </p>
        </div>

        <div className="box-three">
          <img
            src="https://html-template.spider-themes.net/banca/img/home-4/step-icon-03.svg"
            alt="dollar-icon"
            className="dollar-icon"
          />
          <h3 style={{ textAlign: "center" }}>Get your money</h3>
          <p>
            Quis dapibus volutpat condimentum quam<br></br> sed non elit sed
            magna lectus dui interdum<br></br> facilisi justo
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="layout-four-container">
        <div className="layout-one-images">
          <img
            src="https://html-template.spider-themes.net/banca/img/home-4/manage-cash-img.png"
            alt="manage-cash"
            className="manage-cash-image"
          />
          <img
            src="https://html-template.spider-themes.net/banca/img/home-4/basic-info-3.png"
            alt="basic-info"
            className="basic-info"
          />
          <img
            src="https://html-template.spider-themes.net/banca/img/home-4/basic-info-2.png"
            alt="amount-image"
            className="amount-image"
          />
        </div>

        <div className="layout-content-two">
          <h6 style={{ color: "grey", fontSize: "12px" }}>_WHY BANCA?</h6>
          <h1 className="man-el">Manage your</h1>
          <nav className="easy-nav">
            <li className="easy-rec"></li>
            <h1 className="easy">cash easily</h1>
          </nav>
          <p>
            Lorem Ipsum is simply dummy text of the printing and the<br></br>{" "}
            typesetting industry. Lorem Ipsum has been industrys
          </p>
          <p style={{ fontWeight: "bold" }}>
            <i
              className="fa-solid fa-check"
              style={{
                color: "white",
                borderRadius: "50%",
                backgroundColor: "#0050B2",
                padding: "1px 1px 1px 1px",
              }}
            ></i>{" "}
            <span style={{ paddingLeft: "10px" }}>
              Inventore veritatis et architecto beatae
            </span>
          </p>
          <p style={{ fontWeight: "bold" }}>
            <i
              className="fa-solid fa-check"
              style={{
                color: "white",
                borderRadius: "50%",
                backgroundColor: "#0050B2",
                padding: "1px 1px 1px 1px",
              }}
            ></i>{" "}
            <span style={{ paddingLeft: "10px" }}>
              Inventore veritatis et architecto beatae
            </span>
          </p>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div className="tab">
        <button
          className="tablinks"
          onClick={(event) => handleTabDisplay(event, "Freelancers")}
          id="defaultOpen"
        >
          Freelancers
        </button>
        <button
          className="tablinks"
          onClick={(event) => handleTabDisplay(event, "SMBs")}
        >
          SMBs & Startups
        </button>
        <button
          className="tablinks"
          onClick={(event) => handleTabDisplay(event, "Business")}
        >
          Business Founders
        </button>
        <button
          className="tablinks"
          onClick={(event) => handleTabDisplay(event, "Micro")}
        >
          Micro businesses
        </button>
      </div>

      <hr style={{ marginTop: "-1px", width: "900px", margin: "auto" }} />

      <div id="Freelancers" className="tabcontent">
        <div className="freelance-content-container">
          <div className="freelance-layout-one">
            <h1 className="acces_">Access to secure</h1>
            <nav className="dev-banking">
              <li className="bankin-rec"></li>
              <h1 className="banking-txt">banking</h1>
            </nav>
            <p>
              Lorem Ipsum is simply dummy text of the printing and the<br></br>{" "}
              typesetting industry. Lorem Ipsum has been industrys
            </p>
            <button type="submit" className="getStar-button">
              Get started now
              <i class="fa-solid fa-arrow-right ms-2"></i>
            </button>
            <div className="line"></div>
          </div>

          <div className="freelance-images">
            <img
              src="https://html-template.spider-themes.net/banca/img/home-4/freelance-tab.png"
              alt="freelance"
              className="freelance-tab"
            />
          </div>
        </div>
      </div>

      <div id="SMBs" className="tabcontent">
        <div className="smbs-content-container">
          <div className="smbs-content-two">
            <h1 className="man-el">Manage your</h1>
            <nav className="easy-nav">
              <li className="easy-rec"></li>
              <h1 className="easy">cash easily</h1>
            </nav>
            <p>
              Lorem Ipsum is simply dummy text of the printing and the<br></br>{" "}
              typesetting industry. Lorem Ipsum has been industrys
            </p>
          </div>

          <div className="layout-one-images smbs-images">
            <img
              src="https://html-template.spider-themes.net/banca/img/home-4/manage-cash-img.png"
              alt="manage-cash"
              className="manage-cash-image"
            />
            <img
              src="https://html-template.spider-themes.net/banca/img/home-4/basic-info-3.png"
              alt="basic-info"
              className="basic-info"
            />
            <img
              src="https://html-template.spider-themes.net/banca/img/home-4/basic-info-2.png"
              alt="amount-image"
              className="amount-image"
            />
          </div>
        </div>
      </div>

      <div id="Business" className="tabcontent">
        <div className="freelance-content-container">
          <div className="freelance-layout-one">
            <h1 className="acces_">Access to secure</h1>
            <nav className="dev-banking">
              <li className="bankin-rec"></li>
              <h1 className="banking-txt">banking</h1>
            </nav>
            <p>
              Lorem Ipsum is simply dummy text of the printing and the<br></br>{" "}
              typesetting industry. Lorem Ipsum has been industrys
            </p>
            <button type="submit" className="getStar-button">
              Get started now
              <i class="fa-solid fa-arrow-right ms-2"></i>
            </button>
            <div className="line"></div>
          </div>

          <div className="freelance-images">
            <img
              src="https://html-template.spider-themes.net/banca/img/home-4/freelance-tab.png"
              alt="freelance"
              className="freelance-tab"
            />
          </div>
        </div>
      </div>

      <div id="Micro" className="tabcontent">
        <div className="smbs-content-container">
          <div className="smbs-content-two">
            <h1 className="man-el">Manage your</h1>
            <nav className="easy-nav">
              <li className="easy-rec"></li>
              <h1 className="easy">cash easily</h1>
            </nav>
            <p>
              Lorem Ipsum is simply dummy text of the printing and the<br></br>{" "}
              typesetting industry. Lorem Ipsum has been industrys
            </p>
          </div>

          <div className="layout-one-images smbs-images">
            <img
              src="https://html-template.spider-themes.net/banca/img/home-4/manage-cash-img.png"
              alt="manage-cash"
              className="manage-cash-image"
            />
            <img
              src="https://html-template.spider-themes.net/banca/img/home-4/basic-info-3.png"
              alt="basic-info"
              className="basic-info"
            />
            <img
              src="https://html-template.spider-themes.net/banca/img/home-4/basic-info-2.png"
              alt="amount-image"
              className="amount-image"
            />
          </div>
        </div>
      </div>

      <section className="sec-lyt-six">
        <div className="flex-container-layt-six">
          <div>
            <img
              src="https://html-template.spider-themes.net/banca/img/home-4/faq-Img.png"
              alt="imageG"
            />
          </div>

          <div style={{ marginLeft: "50px", marginTop: "1px" }}>
            <h6 style={{ color: "#A7B4C0", fontWeight: "bold" }}>_FAQ</h6>
            <h1
              className="text-white"
              style={{ fontWeight: "bold", fontSize: "50px" }}
            >
              Frequently asked
            </h1>
            <nav className="gen-nav">
              <li className="gen-rec"></li>
              <h1 className="text-white gener-q">general questions</h1>
            </nav>
            <br></br>
            <br></br>
            <button
              className="collapsible"
              style={{ border: "none" }}
              id="DefaultCollabsOpen"
            >
              Can I pay off my loan early?
            </button>
            <div className="content">
              <p>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch.
              </p>
            </div>
            <button
              className="collapsible"
              style={{
                border: "1px solid white",
                borderRight: "none",
                borderLeft: "none",
                borderBottom: "none",
              }}
            >
              How much can I Banca?
            </button>
            <div className="content">
              <p>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch.
              </p>
            </div>
            <button
              className="collapsible"
              style={{
                border: "1px solid white",
                borderRight: "none",
                borderLeft: "none",
                borderBottom: "none",
              }}
            >
              Do you offering refinancing ?
            </button>
            <div className="content">
              <p>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch.
              </p>
            </div>
            <button
              className="collapsible"
              style={{
                border: "1px solid white",
                borderRight: "none",
                borderLeft: "none",
                borderBottom: "none",
              }}
            >
              Can I do all of my banking with you?
            </button>
            <div className="content">
              <p>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch.
              </p>
            </div>
            <div
              style={{
                color: "white",
                width: "625px",
                height: "1px",
                backgroundColor: "white",
              }}
            ></div>
            <div
              style={{ color: "white", marginLeft: "20px", marginTop: "15px" }}
            >
              Have more questions ?{" "}
              <a href="#" style={{ color: "white" }}>
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container-layt-seven">
        <h6
          style={{ color: "#A7B4C0", fontWeight: "bold", textAlign: "center" }}
        >
          _SERVICE COMPARISONS
        </h6>
        <nav className="better-ser-nav">
          <li className="better-rec"></li>
          <h1 className="better-txt">Our better services</h1>
        </nav>
        <p style={{ textAlign: "center" }}>
          There are many variations of passages of Lorem Ipsum available,
          <br></br> but the majority have suffered alteration in some form,
        </p>
      </div>

      <br></br>
      <br></br>

      <table>
        <tr>
          <td></td>
          <td style={{ textAlign: "center" }}>
            <img
              src="https://html-template.spider-themes.net/banca/img/logo/Logo-2.png"
              alt="logo"
            />
          </td>
          <td>
            <h3 style={{ fontWeight: "bold", textAlign: "center" }}>
              Other Companies
            </h3>
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: "#F9FDFE" }}>
            <h5 style={{ fontWeight: "bold", paddingLeft: "20px" }}>
              Payment Per Transaction
            </h5>
          </td>
          <td style={{ backgroundColor: "#F4F5F6" }}>
            <h6 style={{ textAlign: "center" }}>0.50/per transacrion</h6>
          </td>
          <td style={{ backgroundColor: "#F9FDFE" }}>
            <h6 style={{ textAlign: "center" }}>1.50/per transaction</h6>
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: "#F4F5F6" }}>
            <h5 style={{ fontWeight: "bold", paddingLeft: "20px" }}>
              Bank account limitations
            </h5>
          </td>
          <td style={{ backgroundColor: "#E9E9EA" }}>
            <h6 style={{ textAlign: "center" }}>up to 10 bank accounts</h6>
          </td>
          <td style={{ backgroundColor: "#F4F5F6" }}>
            <h6 style={{ textAlign: "center" }}>Only 3 bank accounts</h6>
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: "#F9FDFE" }}>
            <h5 style={{ fontWeight: "bold", paddingLeft: "20px" }}>
              Local fees capped at NGN 2,000
            </h5>
          </td>
          <td style={{ textAlign: "center", backgroundColor: "#F4F5F6" }}>
            <i
              class="fa-solid fa-check"
              style={{
                border: "1px solid #0050b2",
                borderRadius: "50%",
                backgroundColor: "#0050b2",
                color: "white",
                padding: "2px 3px 2px 3px",
              }}
            ></i>
          </td>
          <td style={{ textAlign: "center", backgroundColor: "#F9FDFE" }}>
            <i
              class="fa-solid fa-xmark"
              style={{
                border: "1px solid red",
                borderRadius: "50%",
                backgroundColor: "red",
                color: "white",
                padding: "2px 3px 2px 3px",
              }}
            ></i>
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: "#F4F5F6" }}>
            <h5 style={{ fontWeight: "bold", paddingLeft: "20px" }}>
              Loan Purchase
            </h5>
          </td>
          <td style={{ backgroundColor: "#E9E9EA" }}>
            <h6 style={{ textAlign: "center" }}>easy to follow steps</h6>
          </td>
          <td style={{ backgroundColor: "#F4F5F6" }}>
            <h6 style={{ textAlign: "center" }}>complicated steps</h6>
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: "#F9FDFE" }}>
            <h5 style={{ fontWeight: "bold", paddingLeft: "20px" }}>
              Debt Financing
            </h5>
          </td>
          <td style={{ textAlign: "center", backgroundColor: "#F4F5F6" }}>
            <i
              class="fa-solid fa-check"
              style={{
                border: "1px solid #0050b2",
                borderRadius: "50%",
                backgroundColor: "#0050b2",
                color: "white",
                padding: "2px 3px 2px 3px",
              }}
            ></i>
          </td>
          <td style={{ textAlign: "center", backgroundColor: "#F9FDFE" }}>
            <i
              class="fa-solid fa-xmark"
              style={{
                border: "1px solid red",
                borderRadius: "50%",
                backgroundColor: "red",
                color: "white",
                padding: "2px 3px 2px 3px",
              }}
            ></i>
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: "#F4F5F6" }}>
            <h5 style={{ fontWeight: "bold", paddingLeft: "20px" }}>
              No hidden fees or charges
            </h5>
          </td>
          <td style={{ textAlign: "center", backgroundColor: "#E9E9EA" }}>
            <i
              class="fa-solid fa-check"
              style={{
                border: "1px solid #0050b2",
                borderRadius: "50%",
                backgroundColor: "#0050b2",
                color: "white",
                padding: "2px 3px 2px 3px",
              }}
            ></i>
          </td>
          <td style={{ textAlign: "center", backgroundColor: "#F4F5F6" }}>
            <i
              class="fa-solid fa-xmark"
              style={{
                border: "1px solid red",
                borderRadius: "50%",
                backgroundColor: "red",
                color: "white",
                padding: "2px 3px 2px 3px",
              }}
            ></i>
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: "#F9FDFE" }}>
            <h5 style={{ fontWeight: "bold", paddingLeft: "20px" }}>
              Local fees capped
            </h5>
          </td>
          <td style={{ textAlign: "center", backgroundColor: "#F4F5F6" }}>
            <i
              class="fa-solid fa-check"
              style={{
                border: "1px solid #0050b2",
                borderRadius: "50%",
                backgroundColor: "#0050b2",
                color: "white",
                padding: "2px 3px 2px 3px",
              }}
            ></i>
          </td>
          <td style={{ textAlign: "center", backgroundColor: "#F9FDFE" }}>
            <i
              class="fa-solid fa-xmark"
              style={{
                border: "1px solid red",
                borderRadius: "50%",
                backgroundColor: "red",
                color: "white",
                padding: "2px 3px 2px 3px",
              }}
            ></i>
          </td>
        </tr>
      </table>
      <div className="tableButton">
        <button>
          <a
            href="#"
            style={{ color: "white", fontWeight: "bold", fontSize: "17px" }}
          >
            Get Started Now
          </a>
          <i
            class="fa-solid fa-arrow-right"
            style={{ color: "white", fontSize: "13px", marginLeft: "10px" }}
          ></i>
        </button>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="container-layt-nine">
        <div>
          <h1 style={{ fontWeight: "bold", fontSize: "50px" }}>
            0 <span>K</span>
          </h1>
          <h6 style={{ color: "#A7B4C0" }}>Total active customers</h6>
        </div>

        <div style={{ borderLeft: "1px solid #A7B4C0" }}></div>

        <div>
          <h1 style={{ fontWeight: "bold", fontSize: "50px" }}>0M+</h1>
          <h6 style={{ color: "#A7B4C0" }}>Order success rate</h6>
        </div>

        <div style={{ borderLeft: "1px solid #A7B4C0" }}></div>

        <div>
          <h1 style={{ fontWeight: "bold", fontSize: "50px" }}>0.00%</h1>
          <h6 style={{ color: "#A7B4C0" }}>Avg. new projects</h6>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <section
        style={{
          background: "#F4F5F6",
          paddingTop: "60px",
          paddingBottom: "100px",
        }}
      >
        <div className="container-layt-seven">
          <h6
            style={{
              color: "#A7B4C0",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            _TESTIMONIALS
          </h6>
          <nav className="customerF-nav">
            <li className="customerF-rec"></li>
            <h1 className="customerF">Customer feedbacks</h1>
          </nav>
          <p style={{ textAlign: "center" }}>
            There are many variations of passages of Lorem Ipsum available,
            <br></br> but the majority have suffered alteration in some form,
          </p>
        </div>

        <div className="container">
          <Carousel>
            <Carousel.Item>
              <div className="carousel-content-container">
                <div className="caro-layt-one">
                  <p
                    style={{
                      marginLeft: "30px",
                      paddingTop: "30px",
                      marginTop: "0",
                    }}
                  >
                    <i
                      className="fa-solid fa-star text-warning"
                      style={{ fontSize: "25px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star text-warning ps-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star text-warning ps-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star text-warning ps-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </p>

                  <div
                    className="paragh-div"
                    style={{
                      marginLeft: "30px",
                      marginBottom: "30px",
                      marginTop: "0",
                    }}
                  >
                    {/* <Carousel.Caption> */}
                    <p
                      className="text-black"
                      style={{ fontSize: "18px", fontWeight: "400" }}
                    >
                      Assertively procrastinate distributed<br></br>
                      relationships whereas equity invested<br></br>
                      intellectual capital everything
                    </p>
                    {/* </Carousel.Caption> */}
                  </div>

                  <div
                    className="d-flex"
                    style={{ marginLeft: "30px", marginBottom: "20px" }}
                  >
                    <div>
                      <img
                        src="https://html-template.spider-themes.net/banca/img/home-4/client-rev-1.png"
                        alt="client-rev"
                        width={"100%"}
                        height={"100%"}
                      />
                    </div>
                    <div className="ms-3">
                      {/* <Carousel.Caption> */}
                      <h6
                        className="text-black"
                        style={{ fontSize: "18px", fontWeight: "400" }}
                      >
                        Gerry Hellmen
                      </h6>
                      <h6
                        style={{
                          fontSize: "15px",
                          fontWeight: "400",
                          color: "grey",
                        }}
                      >
                        Ui / Ux Designer
                      </h6>
                      {/* </Carousel.Caption> */}
                    </div>
                  </div>
                </div>

                <div className="caro-layt-one" style={{ marginLeft: "30px" }}>
                  <p
                    style={{
                      marginLeft: "30px",
                      paddingTop: "30px",
                      marginTop: "0",
                    }}
                  >
                    <i
                      className="fa-solid fa-star text-warning"
                      style={{ fontSize: "25px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star text-warning ps-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star text-warning ps-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star text-warning ps-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </p>

                  <div
                    className="paragh-div"
                    style={{
                      marginLeft: "30px",
                      marginBottom: "30px",
                      marginTop: "0",
                    }}
                  >
                    {/* <Carousel.Caption> */}
                    <p
                      className="text-black"
                      style={{ fontSize: "18px", fontWeight: "400" }}
                    >
                      Assertively procrastinate distributed<br></br>
                      relationships whereas equity invested<br></br>
                      intellectual capital everything
                    </p>
                    {/* </Carousel.Caption> */}
                  </div>

                  <div
                    className="d-flex"
                    style={{ marginLeft: "30px", marginBottom: "20px" }}
                  >
                    <div>
                      <img
                        src="https://html-template.spider-themes.net/banca/img/home-4/client-rev-1.png"
                        alt="client-rev"
                        width={"100%"}
                        height={"100%"}
                      />
                    </div>
                    <div className="ms-3">
                      {/* <Carousel.Caption> */}
                      <h6
                        className="text-black"
                        style={{ fontSize: "18px", fontWeight: "400" }}
                      >
                        Gerry Hellmen
                      </h6>
                      <h6
                        style={{
                          fontSize: "15px",
                          fontWeight: "400",
                          color: "grey",
                        }}
                      >
                        Ui / Ux Designer
                      </h6>
                      {/* </Carousel.Caption> */}
                    </div>
                  </div>
                </div>

                <div className="caro-layt-one" style={{ marginLeft: "30px" }}>
                  <p
                    style={{
                      marginLeft: "30px",
                      paddingTop: "30px",
                      marginTop: "0",
                    }}
                  >
                    <i
                      className="fa-solid fa-star text-warning"
                      style={{ fontSize: "25px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star text-warning ps-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star text-warning ps-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star text-warning ps-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </p>

                  <div
                    className="paragh-div"
                    style={{
                      marginLeft: "30px",
                      marginBottom: "30px",
                      marginTop: "0",
                    }}
                  >
                    {/* <Carousel.Caption> */}
                    <p
                      className="text-black"
                      style={{ fontSize: "18px", fontWeight: "400" }}
                    >
                      Assertively procrastinate distributed<br></br>
                      relationships whereas equity invested<br></br>
                      intellectual capital everything
                    </p>
                    {/* </Carousel.Caption> */}
                  </div>

                  <div
                    className="d-flex"
                    style={{ marginLeft: "30px", marginBottom: "20px" }}
                  >
                    <div>
                      <img
                        src="https://html-template.spider-themes.net/banca/img/home-4/client-rev-1.png"
                        alt="client-rev"
                        width={"100%"}
                        height={"100%"}
                      />
                    </div>
                    <div className="ms-3">
                      {/* <Carousel.Caption> */}
                      <h6
                        className="text-black"
                        style={{ fontSize: "18px", fontWeight: "400" }}
                      >
                        Gerry Hellmen
                      </h6>
                      <h6
                        style={{
                          fontSize: "15px",
                          fontWeight: "400",
                          color: "grey",
                        }}
                      >
                        Ui / Ux Designer
                      </h6>
                      {/* </Carousel.Caption> */}
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-content-container">
                <div className="caro-layt-one" style={{ marginLeft: "30px" }}>
                  <p
                    style={{
                      marginLeft: "30px",
                      paddingTop: "30px",
                      marginTop: "0",
                    }}
                  >
                    <i
                      className="fa-solid fa-star text-warning"
                      style={{ fontSize: "25px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star text-warning ps-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star text-warning ps-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star text-warning ps-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </p>

                  <div
                    className="paragh-div"
                    style={{
                      marginLeft: "30px",
                      marginBottom: "30px",
                      marginTop: "0",
                    }}
                  >
                    {/* <Carousel.Caption> */}
                    <p
                      className="text-black"
                      style={{ fontSize: "18px", fontWeight: "400" }}
                    >
                      Assertively procrastinate distributed<br></br>
                      relationships whereas equity invested<br></br>
                      intellectual capital everything
                    </p>
                    {/* </Carousel.Caption> */}
                  </div>

                  <div
                    className="d-flex"
                    style={{ marginLeft: "30px", marginBottom: "20px" }}
                  >
                    <div>
                      <img
                        src="https://html-template.spider-themes.net/banca/img/home-4/client-rev-1.png"
                        alt="client-rev"
                        width={"100%"}
                        height={"100%"}
                      />
                    </div>
                    <div className="ms-3">
                      {/* <Carousel.Caption> */}
                      <h6
                        className="text-black"
                        style={{ fontSize: "18px", fontWeight: "400" }}
                      >
                        Gerry Hellmen
                      </h6>
                      <h6
                        style={{
                          fontSize: "15px",
                          fontWeight: "400",
                          color: "grey",
                        }}
                      >
                        Ui / Ux Designer
                      </h6>
                      {/* </Carousel.Caption> */}
                    </div>
                  </div>
                </div>

                <div className="caro-layt-one" style={{ marginLeft: "30px" }}>
                  <p
                    style={{
                      marginLeft: "30px",
                      paddingTop: "30px",
                      marginTop: "0",
                    }}
                  >
                    <i
                      className="fa-solid fa-star text-warning"
                      style={{ fontSize: "25px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star text-warning ps-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star text-warning ps-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star text-warning ps-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </p>

                  <div
                    className="paragh-div"
                    style={{
                      marginLeft: "30px",
                      marginBottom: "30px",
                      marginTop: "0",
                    }}
                  >
                    {/* <Carousel.Caption> */}
                    <p
                      className="text-black"
                      style={{ fontSize: "18px", fontWeight: "400" }}
                    >
                      Assertively procrastinate distributed<br></br>
                      relationships whereas equity invested<br></br>
                      intellectual capital everything
                    </p>
                    {/* </Carousel.Caption> */}
                  </div>

                  <div
                    className="d-flex"
                    style={{ marginLeft: "30px", marginBottom: "20px" }}
                  >
                    <div>
                      <img
                        src="https://html-template.spider-themes.net/banca/img/home-4/client-rev-1.png"
                        alt="client-rev"
                        width={"100%"}
                        height={"100%"}
                      />
                    </div>
                    <div className="ms-3">
                      {/* <Carousel.Caption> */}
                      <h6
                        className="text-black"
                        style={{ fontSize: "18px", fontWeight: "400" }}
                      >
                        Gerry Hellmen
                      </h6>
                      <h6
                        style={{
                          fontSize: "15px",
                          fontWeight: "400",
                          color: "grey",
                        }}
                      >
                        Ui / Ux Designer
                      </h6>
                      {/* </Carousel.Caption> */}
                    </div>
                  </div>
                </div>

                <div className="caro-layt-one" style={{ marginLeft: "30px" }}>
                  <p
                    style={{
                      marginLeft: "30px",
                      paddingTop: "30px",
                      marginTop: "0",
                    }}
                  >
                    <i
                      className="fa-solid fa-star text-warning"
                      style={{ fontSize: "25px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star text-warning ps-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star text-warning ps-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star text-warning ps-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </p>

                  <div
                    className="paragh-div"
                    style={{
                      marginLeft: "30px",
                      marginBottom: "30px",
                      marginTop: "0",
                    }}
                  >
                    {/* <Carousel.Caption> */}
                    <p
                      className="text-black"
                      style={{ fontSize: "18px", fontWeight: "400" }}
                    >
                      Assertively procrastinate distributed<br></br>
                      relationships whereas equity invested<br></br>
                      intellectual capital everything
                    </p>
                    {/* </Carousel.Caption> */}
                  </div>

                  <div
                    className="d-flex"
                    style={{ marginLeft: "30px", marginBottom: "20px" }}
                  >
                    <div>
                      <img
                        src="https://html-template.spider-themes.net/banca/img/home-4/client-rev-1.png"
                        alt="client-rev"
                        width={"100%"}
                        height={"100%"}
                      />
                    </div>
                    <div className="ms-3">
                      {/* <Carousel.Caption> */}
                      <h6
                        className="text-black"
                        style={{ fontSize: "18px", fontWeight: "400" }}
                      >
                        Gerry Hellmen
                      </h6>
                      <h6
                        style={{
                          fontSize: "15px",
                          fontWeight: "400",
                          color: "grey",
                        }}
                      >
                        Ui / Ux Designer
                      </h6>
                      {/* </Carousel.Caption> */}
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-content-container">
                <div className="caro-layt-one" style={{ marginLeft: "30px" }}>
                  <p
                    style={{
                      marginLeft: "30px",
                      paddingTop: "30px",
                      marginTop: "0",
                    }}
                  >
                    <i
                      className="fa-solid fa-star text-warning"
                      style={{ fontSize: "25px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star text-warning ps-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star text-warning ps-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star text-warning ps-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </p>

                  <div
                    className="paragh-div"
                    style={{
                      marginLeft: "30px",
                      marginBottom: "30px",
                      marginTop: "0",
                    }}
                  >
                    {/* <Carousel.Caption> */}
                    <p
                      className="text-black"
                      style={{ fontSize: "18px", fontWeight: "400" }}
                    >
                      Assertively procrastinate distributed<br></br>
                      relationships whereas equity invested<br></br>
                      intellectual capital everything
                    </p>
                    {/* </Carousel.Caption> */}
                  </div>

                  <div
                    className="d-flex"
                    style={{ marginLeft: "30px", marginBottom: "20px" }}
                  >
                    <div>
                      <img
                        src="https://html-template.spider-themes.net/banca/img/home-4/client-rev-1.png"
                        alt="client-rev"
                        width={"100%"}
                        height={"100%"}
                      />
                    </div>
                    <div className="ms-3">
                      {/* <Carousel.Caption> */}
                      <h6
                        className="text-black"
                        style={{ fontSize: "18px", fontWeight: "400" }}
                      >
                        Gerry Hellmen
                      </h6>
                      <h6
                        style={{
                          fontSize: "15px",
                          fontWeight: "400",
                          color: "grey",
                        }}
                      >
                        Ui / Ux Designer
                      </h6>
                      {/* </Carousel.Caption> */}
                    </div>
                  </div>
                </div>

                <div className="caro-layt-one" style={{ marginLeft: "30px" }}>
                  <p
                    style={{
                      marginLeft: "30px",
                      paddingTop: "30px",
                      marginTop: "0",
                    }}
                  >
                    <i
                      className="fa-solid fa-star text-warning"
                      style={{ fontSize: "25px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star text-warning ps-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star text-warning ps-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star text-warning ps-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </p>

                  <div
                    className="paragh-div"
                    style={{
                      marginLeft: "30px",
                      marginBottom: "30px",
                      marginTop: "0",
                    }}
                  >
                    {/* <Carousel.Caption> */}
                    <p
                      className="text-black"
                      style={{ fontSize: "18px", fontWeight: "400" }}
                    >
                      Assertively procrastinate distributed<br></br>
                      relationships whereas equity invested<br></br>
                      intellectual capital everything
                    </p>
                    {/* </Carousel.Caption> */}
                  </div>

                  <div
                    className="d-flex"
                    style={{ marginLeft: "30px", marginBottom: "20px" }}
                  >
                    <div>
                      <img
                        src="https://html-template.spider-themes.net/banca/img/home-4/client-rev-1.png"
                        alt="client-rev"
                        width={"100%"}
                        height={"100%"}
                      />
                    </div>
                    <div className="ms-3">
                      {/* <Carousel.Caption> */}
                      <h6
                        className="text-black"
                        style={{ fontSize: "18px", fontWeight: "400" }}
                      >
                        Gerry Hellmen
                      </h6>
                      <h6
                        style={{
                          fontSize: "15px",
                          fontWeight: "400",
                          color: "grey",
                        }}
                      >
                        Ui / Ux Designer
                      </h6>
                      {/* </Carousel.Caption> */}
                    </div>
                  </div>
                </div>

                <div className="caro-layt-one" style={{ marginLeft: "30px" }}>
                  <p
                    style={{
                      marginLeft: "30px",
                      paddingTop: "30px",
                      marginTop: "0",
                    }}
                  >
                    <i
                      className="fa-solid fa-star text-warning"
                      style={{ fontSize: "25px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star text-warning ps-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star text-warning ps-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                    <i
                      className="fa-solid fa-star text-warning ps-2"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </p>

                  <div
                    className="paragh-div"
                    style={{
                      marginLeft: "30px",
                      marginBottom: "30px",
                      marginTop: "0",
                    }}
                  >
                    {/* <Carousel.Caption> */}
                    <p
                      className="text-black"
                      style={{ fontSize: "18px", fontWeight: "400" }}
                    >
                      Assertively procrastinate distributed<br></br>
                      relationships whereas equity invested<br></br>
                      intellectual capital everything
                    </p>
                    {/* </Carousel.Caption> */}
                  </div>

                  <div
                    className="d-flex"
                    style={{ marginLeft: "30px", marginBottom: "20px" }}
                  >
                    <div>
                      <img
                        src="https://html-template.spider-themes.net/banca/img/home-4/client-rev-1.png"
                        alt="client-rev"
                        width={"100%"}
                        height={"100%"}
                      />
                    </div>
                    <div className="ms-3">
                      {/* <Carousel.Caption> */}
                      <h6
                        className="text-black"
                        style={{ fontSize: "18px", fontWeight: "400" }}
                      >
                        Gerry Hellmen
                      </h6>
                      <h6
                        style={{
                          fontSize: "15px",
                          fontWeight: "400",
                          color: "grey",
                        }}
                      >
                        Ui / Ux Designer
                      </h6>
                      {/* </Carousel.Caption> */}
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="container-layt-seven">
        <h6
          style={{ color: "#A7B4C0", fontWeight: "bold", textAlign: "center" }}
        >
          _BLOG
        </h6>
        <nav className="latest-aticle">
          <li className="aticle-rec"></li>
          <h1 className="articles-txt">Our latest articles</h1>
        </nav>
        <p style={{ textAlign: "center" }}>
          There are many variations of passages of Lorem Ipsum available,
          <br></br> but the majority have suffered alteration in some form,
        </p>
      </div>

      <div className="container-article">
        <div className="container-article-content-one">
          <div className="d-flex">
            <img
              src="https://html-template.spider-themes.net/banca/img/home-4/article-1.png"
              alt="article-one"
            />{" "}
            <li className="desin">DESIGN</li>
          </div>
          <li className="arti-link">
            <a href="#">
              Build a website that looks like it<br></br> can run on it’s own
            </a>
          </li>
          <li>
            <i className="fa-regular fa-calendar"></i>{" "}
            <span className="ms-1">December 25, 2023</span>{" "}
            <i className="fa-regular fa-user ms-3"></i>{" "}
            <span className="ms-1">Spiderthemes</span>
          </li>
        </div>

        <div
          className="container-article-content-one"
          style={{ marginLeft: "50px" }}
        >
          <div className="d-flex">
            <img
              src="https://html-template.spider-themes.net/banca/img/home-4/article-2.png"
              alt="article-one"
            />{" "}
            <li className="desing">DESIGN</li>
          </div>
          <li className="arti-link">
            <a href="#">
              Build a website that looks like it<br></br> can run on it’s own
            </a>
          </li>
          <li>
            <i className="fa-regular fa-calendar"></i>{" "}
            <span className="ms-1">December 25, 2023</span>{" "}
            <i className="fa-regular fa-user ms-3"></i>{" "}
            <span className="ms-1">Spiderthemes</span>
          </li>
        </div>

        <div
          className="container-article-content-one"
          style={{ marginLeft: "50px" }}
        >
          <div className="d-flex">
            <img
              src="https://html-template.spider-themes.net/banca/img/home-4/article-3.png"
              alt="article-one"
            />{" "}
            <li className="designn">DESIGN</li>
          </div>
          <li className="arti-link">
            <a href="#">
              Build a website that looks like it<br></br> can run on it’s own
            </a>
          </li>
          <li>
            <i className="fa-regular fa-calendar"></i>{" "}
            <span className="ms-1">December 25, 2023</span>{" "}
            <i className="fa-regular fa-user ms-3"></i>{" "}
            <span className="ms-1">Spiderthemes</span>
          </li>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
