import { useEvmNativeBalance } from "@moralisweb3/next";
import Script from "next/script";
import React from "react";

function HomePage() {

  const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";
  const { data: nativeBalance } = useEvmNativeBalance({ address });
  return (
    <div>
      <Script src="https://unpkg.com/moralis-v1/dist/moralis.js" />
      <h3>Wallet: {address}</h3>
      <h3>Native Balance: {nativeBalance?.balance.ether} ETH</h3>

      <w3m-button />
    </div>
  );
}

export default HomePage;
