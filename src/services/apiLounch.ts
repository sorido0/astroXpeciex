import { type Doc, type APISpaceXResponse } from "../types/api";


export const getLounchesid = async ({ id }: { id: String }) => {
    const result = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);

    const docs = (await result.json()) as Doc;
    return docs;
}

export const getLounchesApi = async () => {
    const result = await fetch("https://api.spacexdata.com/v5/launches/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                srot: {
                    flight_number: "asc",
                },
                limit: 12,
            },
        }),
    });
    const { docs } = (await result.json()) as APISpaceXResponse;
    return docs;
}