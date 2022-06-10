import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import RoboPunksNFT from "./RoboPunkNFT.json";

const RoboPunksNFTAddress = "0xFAAE29dEa14028759F3eAAC2eBb59814e4616f26";

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = accounts[0];

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                RoboPunksNFTAddress,
                RoboPunksNFT.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount));
                console.log('response ', response);
            } catch (err) {
                console.log("error ", err);
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount  >= 3) return;
        setMintAmount(mintAmount + 1);
    };

    return (
        <div>
            <h1>RoboPunks</h1>
            <p>It's 2078.</p>
            {isConnected ? (
                <div>
                    <div>
                        <button onClick={handleDecrement}>-</button>
                        <input type="number" value={mintAmount} />
                        <button onClick={handleIncrement}>+</button>
                    </div>
                    <button onClick={handleMint}>Mint Now</button>
                </div>
            ) : (
                <div>
                    <p>You must be connected to Mint.</p>
                </div>
            )}
        </div>
    );
};

export default MainMint;
