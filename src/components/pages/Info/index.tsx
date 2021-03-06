import "./index.css";
import React from "react";
import ReactMomentCountDown from "react-moment-countdown";
import moment from "moment";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Info = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={4}>
            <header className="detail">Wedding Details</header>
            <p className="detailed">
              Event Date: August 21st, 2021
              <br />
              <br />
              Ceremony Start Time: 4:00 PM
              <br />
              <br />
              Location: Hidden Greens Golf Course
              <br />
              12977 200th St E.,
              <br />
              Hastings, MN 55033
              <br />
              <br />
              Reception At Ceremony Venue
              <br />
              <br />
              Formal Attire Requested
            </p>
          </Col>
          <Col xs={0} md={0} lg={4}>
            <header className="wedding-countdown">The "I Do" Countdown</header>
            <div>
              <ReactMomentCountDown
                className="countdown"
                style={{ color: "ivory" }}
                toDate={moment("Sat 20 Aug 2021 16:00:00")}
                targetFormatMask="DDD&nbsp;&nbsp; HH&nbsp;&nbsp; mm&nbsp;&nbsp; ss"
              />
              <p className="countdown-labels">
                {" "}
                Days&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Hrs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Mins&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Secs
              </p>
            </div>
            <header className="registry">Access Registries Here!</header>
            <a
                rel="noreferrer"
                target="_blank"
              href="https://www.target.com/gift-registry/giftgiver?registryId=002301809aa34966afa54d8700553528&type=WEDDING"
            >
              <Button bsPrefix="linkregistrytarget">
                <img
                  alt={"target company"}
                  className="targetpic"
                  src="https://www.verite.org/wp-content/uploads/2017/07/Target-Thumb.jpg"
                ></img>
              </Button>
            </a>
            <a
                rel="noreferrer"
                target="_blank"
              href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/549340290"
            >
              <Button bsPrefix="linkregistrybed">
                <img
                    alt={"bed bath and beyond company"}
                  className="bedpic"
                  src="https://www.pngitem.com/pimgs/m/153-1531852_bed-bath-and-beyond-coupons-hd-png-download.png"
                ></img>
              </Button>
            </a>
          </Col>
          <Col xs={0} md={0} lg={2}></Col>
          <Col xs={0} md={0} lg={2}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Info;
