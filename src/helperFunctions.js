import { ethers } from "ethers";
import { TICKET_ABI, TICKET_CONTRACT_ABI } from "./constant";

export const buyTicketFunc = async (eventAddress, uri) => {
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

    const functionArgs = [uri, signer.getAddress()];

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

export const readTicketData = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  let contract = new ethers.Contract(
    "0xaa419382AB341C5F9cEdaa9BFcCDB836bBf64384",
    TICKET_ABI,
    provider
  );

  try {
    let data = await contract.i_maxTicket();
    let data1 = await contract.balanceOf(
      "0x8816Fa30064cEf7E532E6597C0F4B0adAACF0401"
    );

    console.log(Number(data));
    console.log(data1);
  } catch (error) {
    console.log(error);
  }
};
