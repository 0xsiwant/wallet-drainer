import { getSession, signOut } from "next-auth/react";
import { useConnect } from "wagmi"; 

import {
  useEvmNativeBalance,
  useEvmWalletTokenBalances,
} from "@moralisweb3/next";

export function User({ user }) {

  const { isConnected } = useConnect();
  const { data: balance } = useEvmWalletTokenBalances({
    address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
  });

  const { data: nativeBalance } = useEvmNativeBalance({
    address: user.address,
  });

  if (!isConnected) {
    console.error("Wallet not connected");
    return;
  }

  console.log(isConnected)


  return (
    <div>
      <h4>User session:</h4>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <h3>Native Balance: {nativeBalance?.balance.ether} ETH</h3>
      <pre>Token Balance: {JSON.stringify(balance, null, 2)}</pre>
      <button onClick={() => signOut({ redirect: "/signin" })}>Sign out</button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { user: session.user },
  };
}

export default User;
