import styled from "styled-components";
import "./App.css";
import React, { useState, useEffect } from "react";
import { ReactComponent as Spinner } from "../src/catLoading.svg";
import HappyCat from "../src/happyCat.gif";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);

    ReactGA.send("pageview");
  }, []);

  return (
    <Div>
      {loading ? (
        <Bottom className="fade-in">
          <div className="speech-bubble">Click Me</div>
          <img
            src={HappyCat}
            style={{ width: "300px" }}
            onClick={() =>
              (window.location.href = "https://m.blog.naver.com/thstlgus0601")
            }
          />
          {/* <Blog href="https://m.blog.naver.com/thstlgus0601">Blog</Blog> */}
          {/* <PlayList href="https://soundcloud.com/user-269111903/sets/ptubm01htmq2?ref=clipboard&p=i&c=1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
            Playlist
          </PlayList> */}
        </Bottom>
      ) : (
        <SpinnerWrap className="fade-out">
          <Spinner />
        </SpinnerWrap>
      )}
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  font-weight: 700;
  gap: 10px;
  background-image: url(https://i.pinimg.com/564x/7c/e4/8d/7ce48d85c2b7252124daf2fe71314aa9.jpg);
  background-size: cover;
  background-position: center;

  .fade-in {
    opacity: 1;
    animation: fadeIn ease-in-out 1s;
  }

  .fade-out {
    opacity: 0;
    animation: fadeOut ease-in-out 4s;
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.5;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

const SpinnerWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: white;
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .speech-bubble {
    width: 200px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #000000;
    border-radius: 0.4em;
    color: white;
    font-family: "CatFont";
    font-size: 24px;
    animation: motion 0.3s linear 0s infinite alternate;
    margin-top: 0;
    opacity: 0.85;
  }

  .speech-bubble:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 21px solid transparent;
    border-top-color: #000000;
    border-bottom: 0;
    margin-left: -21px;
    margin-bottom: -19px;
  }

  @keyframes motion {
    0% {
      margin-top: 0px;
    }
    100% {
      margin-top: 10px;
    }
  }
`;

const Blog = styled.a`
  text-decoration: none;
  font-size: 36px;
  color: white;
  background-color: black;
`;

const PlayList = styled.a`
  text-decoration: none;
  color: black;
  background-color: white;
  font-size: 36px;
`;

export default App;
