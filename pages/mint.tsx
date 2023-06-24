import { useContract , useMintNFT , MintNFTParams } from "@thirdweb-dev/react";
import Container from "../components/Container/Container";

export default function Component () {
    const { contract } = useContract("0x107E64D41044eAf1bBC181c47ddA0Fb60F577071");
    const {
      mutate: mintNft,
      isLoading,
      error,
    } = useMintNFT(contract);

    console.log(contract,"h");
  
    if (error) {
      console.error("failed to mint NFT", error);
    }

    const metadata = {
      name: "Cool NFT",
      description: "This is a cool NFT",
      // image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
    };
  
    const mintParams : MintNFTParams = {
      metadata,
      to: "0xCF8D2Da12A032b3f3EaDC686AB18551D8fD6c132"
    }

    return (
      <>
        <Container maxWidth="lg">
      <h1>kamal</h1>
      <button
        disabled={isLoading}
        onClick={() => mintNft(mintParams)}
      >
        Mint!
      </button>
      </Container>
      </>
    );
  };