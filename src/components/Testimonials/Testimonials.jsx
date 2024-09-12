import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let translateX = 0;

  const slideForward = () => {
    if (translateX > -50) {
      translateX -= 25;
    }
    slider.current.style.transform = `translateX(${translateX}%)`;
  };

  const slideBackward = () => {
    if (translateX < 0) {
      translateX += 25;
    }
    slider.current.style.transform = `translateX(${translateX}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} className="next-button" onClick={slideForward} />
      <img src={back_icon} className="back-button" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} />
                <div>
                  <h3>William Hemisphere</h3>
                  <span>Educity, UK</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Educity was one of the best
                desicions I've made. The supportive community, state-of-the-art
                facilities, and commitment to academic excellence have truly
                exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} />
                <div>
                  <h3>William Hemisphere</h3>
                  <span>Educity, UK</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Educity was one of the best
                desicions I've made. The supportive community, state-of-the-art
                facilities, and commitment to academic excellence have truly
                exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} />
                <div>
                  <h3>William Hemisphere</h3>
                  <span>Educity, UK</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Educity was one of the best
                desicions I've made. The supportive community, state-of-the-art
                facilities, and commitment to academic excellence have truly
                exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} />
                <div>
                  <h3>William Hemisphere</h3>
                  <span>Educity, UK</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Educity was one of the best
                desicions I've made. The supportive community, state-of-the-art
                facilities, and commitment to academic excellence have truly
                exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
