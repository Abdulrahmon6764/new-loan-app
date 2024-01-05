import { Link } from "react-router-dom";
import "./Home.css";
import { useEffect, useRef } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./HomeNavbar";
import Carousels from "./Carousel";

function Home(props) {
  const formsbackgroundcolor = useRef();
  const body = useRef();

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
    // document.getElementById("DefaultCollabsOpen").click();
  };

  let rand = Math.floor(Math.random() * 1000);
  let string = rand.toFixed();

  let random = Math.floor(Math.random() * 1000);
  let randString = random.toFixed();

  let ran = Math.random() * 100;
  let sti = ran.toString();

  let cotation = Math.random() * 100;
  let cotationString = cotation.toString();

  let perran = Math.random() * 5;
  let shwper = perran.toString();

  function topFunc() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    handleCollapsibles();

    document.getElementById("DefaultCollabsOpen").click();

    document.addEventListener("click", handleOutsideClickEle);

    document.addEventListener("click", handledDaysOutsideClick);

    document.addEventListener("click", handleAmountOutsideClick);

    document.addEventListener("click", handleSelectElClick);

    document.getElementById("defaultOpen").click();

    return () => {
      document.getElementById("DefaultCollabsOpen").click();

      handleCollapsibles();

      document.removeEventListener("click", handleOutsideClickEle);

      document.removeEventListener("click", handledDaysOutsideClick);

      document.removeEventListener("click", handleAmountOutsideClick);

      document.removeEventListener("click", handleSelectElClick);
    };
  }, []);
  return (
    <div className="body">
      <main className="back_ground_color" ref={body}>


        <Navbar formsbackgroundcolor={formsbackgroundcolor} body={body} />

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

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
            {string} <span>K</span>
          </h1>
          <h6 style={{ color: "#A7B4C0" }}>Total active customers</h6>
        </div>

        <div
          style={{ borderLeft: "1px solid #A7B4C0", marginLeft: "100px" }}
        ></div>

        <div style={{ marginLeft: "100px" }}>
          <h1 style={{ fontWeight: "bold", fontSize: "50px" }}>
            {randString} M+
          </h1>
          <h6 style={{ color: "#A7B4C0" }}>Order success rate</h6>
        </div>

        <div
          style={{ borderLeft: "1px solid #A7B4C0", marginLeft: "100px" }}
        ></div>

        <div style={{ marginLeft: "100px" }}>
          <h1 style={{ fontWeight: "bold", fontSize: "50px" }}>
            {sti.slice(0, 5)}%
          </h1>
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
        <div>
          <br></br>
          <br></br>
     <Carousels />
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

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <footer className="hjrjger">
        <div className="startFree-container container col-8">
          <div className="startfree-content col-7">
            <h1 style={{ fontWeight: "bold", color: "white" }}>
              Start your free trial !
            </h1>
            <p className="text-white">
              There are many variations of passages of Lorem Ipsum available.
            </p>
            <input type="text" placeholder="Enter Email Address" />
            <button type="submit">Subscribe</button>
            <p className="mt-3">
              <i
                className="fa-solid fa-check"
                style={{
                  border: "1px solid #D7D7D7",
                  borderRadius: "50%",
                  backgroundColor: "#D7D7D7",
                  color: "#0050B2",
                  fontSize: "12px",
                  padding: "3px 3px 2px 3px",
                }}
              ></i>{" "}
              <span className="ms-1 text-white"> Get 30 day free trial</span>{" "}
              <i
                className="fa-solid fa-check ms-3"
                style={{
                  border: "1px solid #D7D7D7",
                  borderRadius: "50%",
                  backgroundColor: "#D7D7D7",
                  color: "#0050B2",
                  fontSize: "12px",
                  padding: "3px 3px 2px 3px",
                }}
              ></i>{" "}
              <span className="ms-1 text-white"> No Spamming</span>
            </p>
          </div>

          <div className="col-4" style={{ marginTop: "-80px" }}>
            <img
              src="https://html-template.spider-themes.net/banca/img/home-4/cta-Img.png"
              alt="cta"
            />
          </div>
        </div>

        <footer className="homePage-footer-container">
          <div className="footer-content-one">
            <p className="text-white" style={{ marginBottom: "50px" }}>
              Banca is a leading bank in the worldzone<br></br> and a prominent
              international banking<br></br> institution
            </p>
            <h6>COTATION</h6>
            <h1>
              ${cotationString.slice(0, 4)}
              <span style={{ fontSize: "20px" }}>-{shwper.slice(0, 4)}%</span>
            </h1>
            <h6>2021-01-05 14:00 (INTERNATIONAL TIME)</h6>
          </div>

          <ul className="footer-content-two" style={{ marginLeft: "50px" }}>
            <li
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                color: "white",
                marginBottom: "30px",
              }}
            >
              Banca At A Glance
            </li>

            <li className="footer-link">
              <a href="#">Our core Businesses</a>
            </li>

            <li className="footer-link">
              <a href="#">Our 'company purpose'</a>
            </li>

            <li className="footer-link">
              <a href="#">Jobs & Careers</a>
            </li>

            <li className="footer-link">
              <a href="#">Our Responsibility</a>
            </li>
          </ul>

          <ul style={{ marginLeft: "50px" }}>
            <li
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                color: "white",
                marginBottom: "30px",
              }}
            >
              Publications
            </li>

            <li className="footer-link">
              <a href="#">Compliance Publications</a>
            </li>

            <li className="footer-link">
              <a href="#">Annual Reports</a>
            </li>

            <li className="footer-link">
              <a href="#">CSR Reports</a>
            </li>

            <li className="footer-link">
              <a href="#">Financial documentation</a>
            </li>
          </ul>

          <ul style={{ marginLeft: "50px" }}>
            <li
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                color: "white",
                marginBottom: "30px",
              }}
            >
              Direct Access
            </li>

            <li className="footer-link">
              <a href="#">Our news</a>
            </li>

            <li className="footer-link">
              <a href="#">Our press releases</a>
            </li>

            <li className="footer-link">
              <a href="#">Our job offers</a>
            </li>

            <li className="footer-link">
              <a href="#">Our websites</a>
            </li>
          </ul>
        </footer>
      </footer>

      <div className="social-container">
        <div>
          <img
            src="https://html-template.spider-themes.net/banca/img/logo/Logo.png"
            alt="logo"
          />
        </div>

        <div>
          <h6>
            <span style={{ color: "gray" }}>Copyright© Banca 2023.</span>
            <a href="#" className="ms-3 condition-link">
              Privacy
            </a>
            <span
              className="ms-3"
              style={{ borderLeft: "1px solid gray" }}
            ></span>
            <a href="#" className="ms-3 condition-link">
              Term of Use
            </a>
          </h6>
        </div>

        <div>
          <a href="#" className="fa-brands fa-facebook-f"></a>
          <a
            href="#"
            className="fa-brands fa-x-twitter"
            style={{ marginLeft: "5px" }}
          ></a>
          <a
            href="#"
            className="fa-brands fa-linkedin-in"
            style={{ marginLeft: "10px" }}
          ></a>
          <a
            href="#"
            className="fa-brands fa-instagram"
            style={{ marginLeft: "10px" }}
          ></a>
          <a
            href="#"
            className="fa-brands fa-pinterest-p"
            style={{ marginLeft: "10px" }}
          ></a>
        </div>

        <div className="gototupDiv">
          <button id="myBTN" title="Go to top" type="submit" onClick={topFunc}>
            <i className="fa-solid fa-chevron-up"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
