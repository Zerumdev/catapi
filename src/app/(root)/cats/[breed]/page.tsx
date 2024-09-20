/* eslint-disable @next/next/no-img-element */

import { Breed } from "@/types/cats-api-types";
import React from "react";

const fetchOptions = {
  headers: {
    "x-api-key":
      "live_2c3ifk5TO4g2CAqWYGOAH6RchwhQFf3eaJQIDtvLaNLMAtsn6m1hqrD7Kn8hDYbg",
  },
};

async function CatsOnBreedPage(props: { params: { breed: string } }) {
  const response1 = await fetch(
    `https://api..comthecatapi/v1/breeds/${props.params.breed}`,
    fetchOptions
  );
  const response2 = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${props.params.breed}`,
    fetchOptions
  );
  const breed = (await response1.json()) as Breed;
  const images = await response2.json();

  return (
    <div className="mx-20">
      <h1 className="text-3xl font-bold mb-5">{breed.name}</h1>

      <h2 className="mb-5">{breed.description}</h2>

      <a href="">이 게시물이 마음에 드셨나요? [좋아요버튼] [싫어요버튼]</a>

      <ul className="grid grid-cols-5">
        {images.map((image) => (
          <li key={image.id}>
            <img
              src={image.url}
              width={image.width}
              height={image.height}
              alt={image.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CatsOnBreedPage;
