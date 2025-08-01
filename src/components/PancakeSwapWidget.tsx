import React from "react";

const PancakeSwapWidget = () => {
  const contractAddress = "0xfEcb15A1810F80Ce6E562c172359565774F47EE8";

  return (
    <section id="swap" className="relative w-full min-h-screen h-screen">
      {/* Full Screen PancakeSwap Website - Responsive */}
      <iframe
        src={`https://pancakeswap.finance/swap?theme=light&inputCurrency=BNB&outputCurrency=${contractAddress}&exactAmount=1&exactField=input`}
        width="100%"
        height="100%"
        style={{ border: "none" }}
        allow="clipboard-read; clipboard-write; web-share; camera; microphone; display-capture; fullscreen; geolocation; gyroscope; accelerometer; encrypted-media; autoplay; picture-in-picture"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation"
        title="PancakeSwap Trading Platform"
        className="w-full h-full min-h-screen"
      />
    </section>
  );
};

export default PancakeSwapWidget;
