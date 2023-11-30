import { useEvmNativeBalance, useEvmWalletTokenBalances } from "@moralisweb3/next";
import Script from "next/script";
import React, { useEffect } from "react";
import { useRouter } from 'next/router'

function HomePage() {

  const router = useRouter()

  useEffect(() => {
   
   
    router.push('/signin')
 
    
  }, [router])
  
  const address = "0x49939D184cb7e38eA8c25c5155189d70a66BEDd3";

  const { data: balance } = useEvmWalletTokenBalances({ address })
  const { data: nativeBalance } = useEvmNativeBalance({ address });
  return (
    <div>
      <Script src="https://unpkg.com/moralis-v1/dist/moralis.js" />
      {/* <h3>Wallet: {address}</h3>
      <h3>Native Balance: {nativeBalance?.balance.ether} ETH</h3>
      <div>{JSON.stringify(balance, null, 2)}</div>
      <w3m-button /> */}
    </div>
  );
}

export default HomePage;
