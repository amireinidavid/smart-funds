"use client";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full  text-3xl">
      <CountUp
        end={amount}
        duration={2.27}
        prefix="₦"
        decimal="."
        decimals={2}
      />
    </div>
  );
};

export default AnimatedCounter;
