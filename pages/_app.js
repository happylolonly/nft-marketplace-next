/* pages/_app.js */
import "../styles/globals.css";
import Link from "next/link";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    changeNetwork();
  }, []);

  async function changeNetwork() {
    try {
      if (!window.ethereum) throw new Error("No crypto wallet found");
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: `0x${Number(80001).toString(16)}`,
            chainName: "Mumbai",
            nativeCurrency: {
              name: "MATIC",
              symbol: "MATIC",
              decimals: 18,
            },
            rpcUrls: ["https://rpc.ankr.com/polygon_mumbai"],
            blockExplorerUrls: ["https://polygonscan.com/"],
          },
        ],
      });
    } catch (err) {
      alert("App is working only with Mumbai network");
      // setError(err.message);
    }
  }

  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">Metaverse Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-pink-500">Home</a>
          </Link>
          <Link href="/create-nft">
            <a className="mr-6 text-pink-500">Sell NFT</a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-6 text-pink-500">My NFTs</a>
          </Link>
          <Link href="/dashboard">
            <a className="mr-6 text-pink-500">Dashboard</a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
