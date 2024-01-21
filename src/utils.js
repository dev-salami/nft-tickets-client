export const isDateInPast = (dateString) => {
  const inputDate = new Date(dateString);

  const currentDate = new Date();

  return inputDate.getTime() < currentDate.getTime();
};
export const extractHashFromIpfsUrl = (ipfsUrl) => {
  if (ipfsUrl.startsWith("ipfs://")) {
    return ipfsUrl.slice("ipfs://".length);
  } else {
    return ipfsUrl;
  }
};
