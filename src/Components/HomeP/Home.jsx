import { Link } from "react-router-dom";
import "./Home.css";
import { useEffect, useState, useRef } from "react";

function Home() {
  const myInputRef = useRef();

  const iconsun = useRef();

  const iconmoon = useRef();

  const focusOnchange = () => {
    if (myInputRef.current.checked) {
      iconsun.current.style.display = "none";
      console.log(true);
    } else {
      iconsun.current.style.display = "block";
    }

    if (!myInputRef.current.checked) {
      iconmoon.current.style.display = "none";
    } else {
      iconmoon.current.style.display = "block";
    }
  };

  const repayAmountElement = useRef();

  const focusreamountEl = () => {
    const element = repayAmountElement.current;
    if (element) {
      element.style.outline = "1px solid blue";
      element.style.transitionProperty = "outline";
      element.style.transitionDuration = ".50s";
      element.style.transitionTimingFunction = "linear";
      console.log(true);
    }
  };

  const handleOutsideClickEle = (e) => {
    const element = repayAmountElement.current;
    if (element && !element.contains(e.target)) {
      element.style.outline = "none";
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClickEle);

    return () => {
      document.removeEventListener("click", handleOutsideClickEle);
    };
  }, []);

  return (
    <div className="body">
      <ul className="flex-container">
        <li className="image_logo">
          <img
            src="https://html-template.spider-themes.net/banca/img/logo/Logo@2x.png"
            alt="logo"
            width={"100%"}
          />
        </li>
        <div className="d-flex">
          <div className="drop_down">
            <Link to="/" className="active">
              HOME
            </Link>
            <div className="circle-border"></div>
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
            <span>LOAN</span>
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
            <span>GET JOB</span>
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
            <span>ABOUT</span>
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
            <span>BLOG</span>
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
            <Link to="#" className="apply-loan">
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

      <div className="layout_one_dev">
        <div className="financial-text">
          <div className="contentOne">
            <h1>
              Smart finance<br></br> solutions for your<br></br> business
            </h1>
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
            <img
              src="https://html-template.spider-themes.net/banca/img/home-4/shape-2.png"
              alt="shapetwo"
              className="shape-two-img"
            />
            <Link to="#" className="link">
              Explore now{" "}
              <i
                class="fa-solid fa-arrow-right ms-2 animate__animated animate__fadeIn"
                style={{ fontSize: "15px" }}
              ></i>
            </Link>
          </div>
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
        </div>
        <form className="forms">
          <h2 style={{ fontWeight: "bold" }}>Loan calculator</h2>
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
          <img src="https://html-template.spider-themes.net/banca/img/home-4/shape-3.png" alt="shapethree" className="shape-three"/>
          <br></br>
          <div className="select_dev" style={{ marginBottom: "20px" }}>
            <label htmlFor="typeloan" className="mb-3">
              Type of Loan
            </label>
            <br></br>
            <select>
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
            <input type="text" placeholder="Enter amount" className="inpu" />
          </div>
          <div className="days-dev" style={{ marginBottom: "20px" }}>
            <label htmlFor="days" className="mb-3">
              For how long (days)
            </label>
            <br></br>
            <input type="text" placeholder="For how long (days)" />
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
        </form>
      </div>
    </div>
  );
}

export default Home;
