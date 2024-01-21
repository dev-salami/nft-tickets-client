import { ethers } from "ethers";
import { TICKET_CONTRACT_ABI } from "./constant";

export const buyTicket = async (eventAddress) => {
  try {
    if (!window.ethereum) {
      console.log("Install A Wallet");
    }

    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();
    const Contract = new ethers.Contract(
      eventAddress,
      TICKET_CONTRACT_ABI,
      signer
    );
    const functionName = "buyPublic_Ticket";

    const functionArgs = ["uri", signer.getAddress()];

    const Transaction = await Contract[functionName](
      ...functionArgs,

      {
        value: "0",
      }
    );
    const txHash = await Transaction.wait();
    console.log(txHash.transactionHash);
  } catch (error) {
    console.error("Error ", error.message);
  }
};
