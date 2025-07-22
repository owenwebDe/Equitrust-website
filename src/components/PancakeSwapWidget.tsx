import React from "react";

const PancakeSwapWidget = () => {
  const contractAddress = "0x3303113001c51769f2753C2aFb7B5a6d0535660E";

  return (
    <section id="swap" className="relative w-full min-h-screen h-screen">
      {/* Full Screen PancakeSwap Website - Responsive */}
      <iframe
        src={`https://pancakeswap.finance/swap?theme=light&inputCurrency=BNB&outputCurrency=${contractAddress}&exactAmount=1&exactField=input`}
        width="100%"
        height="100%"
        style={{ border: "none" }}
        allow="clipboard-read; clipboard-write"
        title="PancakeSwap Trading Platform"
        className="w-full h-full min-h-screen"
      />
    </section>
  );
};

export default PancakeSwapWidget;
