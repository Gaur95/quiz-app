import React, { memo } from "react";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp, submit }) {
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => submit(),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "100px" }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}

function Timer({ seconds, submit }) {
  const time = new Date();
  time.setSeconds(time.getSeconds() + seconds); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} submit={submit} />
    </div>
  );
}
export default Timer;
