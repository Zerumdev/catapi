import axios from "axios";

const catAPI = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "x-api-key":
      "live_2c3ifk5TO4g2CAqWYGOAH6RchwhQFf3eaJQIDtvLaNLMAtsn6m1hqrD7Kn8hDYbg",
  },
});

export async function getCatBreeds() {
  try {
    const response = await catAPI.get("/breeds");
    const data = response.data;

    return data;
  } catch (e) {
    console.log(e);
  }
}

// export async function getCatBreedImages(breedID: string) {my
//     try {
//         const response = await catAPI.get<CatImage[]>(
//             `/images/search?/limit/apo`
//         )
//     }
// }
