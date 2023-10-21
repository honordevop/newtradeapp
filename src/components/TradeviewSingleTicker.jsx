import React from "react";
import {
  Ticker,
  ForexCrossRates,
  AdvancedRealTimeChart,
  MarketData,
} from "react-ts-tradingview-widgets";

const TradeviewSingleTicker = () => {
  return (
    <div className="py-4 flex flex-col gap-3">
      <Ticker colorTheme="dark"></Ticker>
      <ForexCrossRates
        colorTheme="dark"
        className="overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300"
        autosize
      ></ForexCrossRates>
      <AdvancedRealTimeChart theme="dark" autosize></AdvancedRealTimeChart>
      <MarketData colorTheme="dark" width="100%" height={400}></MarketData>
      {/* <div
        style={{
          height: "433px",
          backgroundColor: "#1D2330",
          overflow: "hidden",
          boxSizing: "border-box",
          border: "1px solid #282E3B",
          borderRadius: "4px",
          textAlign: "right",
          lineHeight: "14px",
          fontSize: "12px",
          fontFeatureSettings: "normal",
          textSizeAdjust: "100%",
          boxShadow: "inset 0 -20px 0 0 #262B38",
          padding: "0px",
          margin: "0px",
          width: "100%",
        }}
      >
        <div
          style={{
            height: "413px",
            padding: "0px",
            margin: "0px",
            width: "100%",
          }}
        >
          <iframe
            src="https://widget.coinlib.io/widget?type=full_v2&theme=dark&cnt=6&pref_coin_id=1505&graph=yes"
            width="100%"
            height="409px"
            scrolling="auto"
            marginWidth="0"
            marginHeight="0"
            frameBorder="0"
            border="0"
            style={{ border: "0", margin: "0", padding: "0" }}
          ></iframe>
        </div>
        <div
          style={{
            color: "#626B7F",
            lineHeight: "14px",
            fontWeight: "400",
            fontSize: "11px",
            boxSizing: "border-box",
            padding: "2px 6px",
            width: "100%",
            fontFamily: "Verdana, Tahoma, Arial, sans-serif",
          }}
        >
          <a
            href="https://coinlib.io"
            target="_blank"
            style={{
              fontWeight: "500",
              color: "#626B7F",
              textDecoration: "none",
              fontSize: "11px",
            }}
          >
            Cryptocurrency Prices
          </a>
          &nbsp;by Coinlib
        </div>
      </div> */}
    </div>
  );
};

export default TradeviewSingleTicker;

{
  /* <div style="height:433px; background-color: #1D2330; overflow:hidden; box-sizing: border-box; border: 1px solid #282E3B; border-radius: 4px; text-align: right; line-height:14px; font-size: 12px; font-feature-settings: normal; text-size-adjust: 100%; box-shadow: inset 0 -20px 0 0 #262B38; padding: 0px; margin: 0px; width: 100%;"><div style="height:413px; padding:0px; margin:0px; width: 100%;"><iframe src="https://widget.coinlib.io/widget?type=full_v2&theme=dark&cnt=6&pref_coin_id=1505&graph=yes" width="100%" height="409px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style="border:0;margin:0;padding:0;"></iframe></div><div style="color: #626B7F; line-height: 14px; font-weight: 400; font-size: 11px; box-sizing: border-box; padding: 2px 6px; width: 100%; font-family: Verdana, Tahoma, Arial, sans-serif;"><a href="https://coinlib.io" target="_blank" style="font-weight: 500; color: #626B7F; text-decoration:none; font-size:11px">Cryptocurrency Prices</a>&nbsp;by Coinlib</div></div> */
}
