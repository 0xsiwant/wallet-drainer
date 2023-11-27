import { MoralisNextApi } from "@moralisweb3/next";


// Define the configuration options
const config = {
  apiKey: process.env.MORALIS_API_KEY as string, // Moralis API key from your environment variables
  authentication: {
    domain: "amazing.dapp", // Moralis authentication domain
    uri: process.env.NEXTAUTH_URL as string, // NextAuth URL from your environment variables
    timeout: 120, // Timeout for the authentication process
  },
};

// Export the default configuration for the MoralisNextApi
export default MoralisNextApi(config);
