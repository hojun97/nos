import styled from "styled-components";
import "./App.css";
import React, { useState, useEffect } from "react";
import { ReactComponent as Spinner } from "../src/catLoading.svg";
function App() {
  const [loading, setLoading] = useState(false);
  const [fadeOut, setFadeOut] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 4000);
  }, []);

  return (
    <Div>
      {loading ? (
        <Bottom className="fade-in">
          <Blog href="https://m.blog.naver.com/thstlgus0601">Blog</Blog>
          <PlayList href="https://soundcloud.com/user-269111903/sets/ptubm01htmq2?ref=clipboard&p=i&c=1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
            Playlist
          </PlayList>
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
  background-image: url(https://i.pinimg.com/564x/1f/be/b1/1fbeb1f5d9940a6610cf1de2c4e68ad9.jpg);
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
  display: flex;
  margin: 100px auto;
  gap: 30px;
  flex-direction: column;
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
