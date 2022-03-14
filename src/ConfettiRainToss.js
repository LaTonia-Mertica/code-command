import React from "react";
import { useWindowSize } from "@react-hook/window-size";
import Confetti from "react-confetti";

const ConfettiRainToss = () => {
  const { width, height } = useWindowSize();
  return <Confetti width={1700} height={1000} />;
};
export default ConfettiRainToss;
