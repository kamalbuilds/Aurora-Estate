import React, { useState } from "react";
import { useAddress, useContract, useMintNFT } from "@thirdweb-dev/react";
import Container from "../components/Container/Container";
import { Box } from "@mui/material";
export default function Component() {
  const { contract } = useContract("0x107E64D41044eAf1bBC181c47ddA0Fb60F577071");
  const { mutate: mintNft, isLoading, error } = useMintNFT(contract);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [buildingStyle, setBuildingStyle] = useState("");
  const [rooms, setRooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [surface, setSurface] = useState("");
  const [yearOfConstruction, setYearOfConstruction] = useState("");

  const address = useAddress();

  if (error) {
    console.error("failed to mint NFT", error);
  }

  const handleMint = () => {
    const metadata = {
      name,
      description,
      image,
      attributes: [
        { trait_type: "Property Type", value: propertyType },
        { trait_type: "Building Style", value: buildingStyle },
        { trait_type: "Rooms", value: rooms },
        { trait_type: "Bathrooms", value: bathrooms },
        { trait_type: "Surface", value: surface },
        { trait_type: "Year of Construction", value: yearOfConstruction },
      ],
    };

    mintNft({
      metadata,
      // @ts-ignore
      to: address,
    });
  };

  return (
    <Container maxWidth="lg">
      <h1>Tokenize your Property as a NFT</h1>
      <form className="space-y-4 my-4">
        <div className="mb-4">
          <label className="block mb-2">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-400 rounded px-2 py-1"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Description:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-400 rounded px-2 py-1"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Image URL:
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full border border-gray-400 rounded px-2 py-1"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Property Type:
            <input
              type="text"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full border border-gray-400 rounded px-2 py-1"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Building Style:
            <input
              type="text"
              value={buildingStyle}
              onChange={(e) => setBuildingStyle(e.target.value)}
              className="w-full border border-gray-400 rounded px-2 py-1"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Rooms:
            <input
              type="text"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              className="w-full border border-gray-400 rounded px-2 py-1"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Bathrooms:
            <input
              type="text"
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
              className="w-full border border-gray-400 rounded px-2 py-1"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Surface:
            <input
              type="text"
              value={surface}
              onChange={(e) => setSurface(e.target.value)}
              className="w-full border border-gray-400 rounded px-2 py-1"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Year of Construction:
            <input
              type="text"
              value={yearOfConstruction}
              onChange={(e) => setYearOfConstruction(e.target.value)}
              className="w-full border border-gray-400 rounded px-2 py-1"
            />
          </label>
        </div>
      </form>
      <div className="flex justify-center">
        <button disabled={isLoading} onClick={handleMint} className="text-center border-4 border-sky-500 p-2">
          Mint!
        </button>
      </div>
    </Container>
  );
}
