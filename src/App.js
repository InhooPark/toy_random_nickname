import { useState } from "react";
import "./App.scss";
import Layout from "./Layout";

function App() {
  const firstname = [
    "어지러운",
    "기운찬",
    "톡쏘는",
    "별난",
    "운좋은",
    "근사한",
    "까다로운",
    "졸린",
    "고약한",
    "엄청난",
    "무시무시한",
    "반짝이는",
    "행복한",
    "미친",
    "광포한",
    "광오한",
    "숨겨진",
    "번듯한",
    "재빠른",
    "엉뚱한",
    "막강한",
    "심술쟁이",
    "게으른",
    "부지런한",
    "까다로운",
    "여유로운",
    "화끈한",
    "금빛",
    "은빛",
    "똑똑한",
    "멍청한",
    "작은",
    "거대한",
    "퉁명한",
    "친절한",
    "재채기하는",
    "소리없는",
    "전투",
    "밤",
    "꼬마",
    "유령",
    "거대",
    "로봇",
    "마법",
  ];
  const lastname = [
    "드워프",
    "인간",
    "엘프",
    "도끼",
    "칼",
    "창",
    "활",
    "오크",
    "고양이",
    "호랑이",
    "까마귀",
    "노움",
    "고블린",
    "타우렌",
    "트롤",
    "티탄",
    "짐승",
    "저그",
    "프로토스",
    "테란",
    "자객",
    "오징어",
    "발바닥",
    "손바닥",
    "주술사",
    "도적",
    "전사",
    "마법사",
    "드루이드",
    "수도사",
    "암살자",
  ];

  const [myName, setMyName] = useState("당신의닉네임");

  function createNick() {
    setMyName(firstname[Math.floor(Math.random() * firstname.length)] + lastname[Math.floor(Math.random() * lastname.length)]);
  }
  function copyNick() {
    window.navigator.clipboard.writeText(myName);
    alert("복사되었습니다!");
  }
  return (
    <div className="App">
      <Layout>
        <main>
          <p id="mynick">{myName}</p>

          <button onClick={createNick}> Create New Nickname </button>
          <button onClick={copyNick}> Copy Nickname </button>
        </main>
      </Layout>
    </div>
  );
}

export default App;
