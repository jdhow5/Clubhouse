import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/clubs/";

export function getClubs() {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}

export function saveClubs(clubs) {
    return fetch(baseUrl + (clubs.id || ""), {
        method: clubs.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
        headers: { "content-type": "application/json" },
        body: JSON.stringify(clubs)
    })
        .then(handleResponse)
        .catch(handleError);
}

export function deleteClubs(clubsId) {
    return fetch(baseUrl + clubsId, { method: "DELETE" })
        .then(handleResponse)
        .catch(handleError);
}
