import React, { useState, useEffect } from "react";
import PageFrame from "View/component/PageFrame";

function TodayTopic() {
  const tmpTime = new Date().toLocaleTimeString().slice(2);
  const [time, setTime] = useState(tmpTime);

  const countTime = () => {
    const tmpTime = new Date().toLocaleTimeString().slice(2);
    setTime(tmpTime);
  };

  useEffect(() => {
    setInterval(countTime, 1000);
  }, [time]);

  const leftBarArr = [];
  const rightBarArr = [];
  for (let i = 0; i < 2.1; i += 0.3) {
    leftBarArr.push(
      <div
        className="animation-bar-left"
        style={{
          animationDelay: `${i}s`,
        }}
        key={i}
      ></div>
    );
    rightBarArr.push(
      <div
        className="animation-bar-right"
        style={{
          animationDelay: `${i}s`,
        }}
        key={i}
      ></div>
    );
  }

  return (
    <PageFrame>
      <div className="title-box">
        {leftBarArr}
        {rightBarArr}
        <div className="title-text">갤럭시</div>
        <div className="today-topic-time">{time}</div>
        <div className="title-text">아이폰</div>
      </div>
    </PageFrame>
  );
}

export default TodayTopic;
