import React from "react";
import { useEvmNativeBalance, useEvmWalletTokenBalances } from "@moralisweb3/next";

export default function Page() {
  const address = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";
  const { data: nativeBalance } = useEvmNativeBalance({ address });
  const { data: balance } = useEvmWalletTokenBalances({ address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d' })
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <h3>Wallet: {address}</h3>
      <h3>Native Balance: {nativeBalance?.balance.ether} ETH</h3>
      <pre>Token Balance: {JSON.stringify(balance, null, 2)}</pre>
      
    </div>
  );
}
