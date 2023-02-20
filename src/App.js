import styled from "styled-components";
import "./App.css";
function App() {
  return (
    <Div>
      <Bottom>
        <Blog href="https://m.blog.naver.com/thstlgus0601">Blog</Blog>
        <PlayList href="https://soundcloud.com/user-269111903/sets/ptubm01htmq2?ref=clipboard&p=i&c=1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
          Playlist
        </PlayList>
      </Bottom>
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
