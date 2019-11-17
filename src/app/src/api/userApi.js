import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/users/";

export function getUsers() {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}

export function authenticateUser(userData) {
    //   return fetch(baseUrl + course.id, {
    //     method: course.id ? "PUT" : "POST",
    //     headers: { "content-type": "application/json" },
    //     body: JSON.stringify(userData)
    //   })
    //     .then(handleResponse)
    //     .catch(handleError);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false;
            if (!error) {
                if (userData.username && userData.password) {
                    resolve({ result: true });
                }
                else { resolve({ result: false }); }
            }
            else reject();
        }, 2000);
    });
}

export function logoutUser() {
    //   return fetch(baseUrl + course.id, {
    //     method: course.id ? "PUT" : "POST",
    //     headers: { "content-type": "application/json" },
    //     body: JSON.stringify(userData)
    //   })
    //     .then(handleResponse)
    //     .catch(handleError);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false;
            if (!error) {
                resolve({ result: false });
            }
            else reject();
        }, 2000);
    });
}

export function deleteUser(userData) {
    return fetch(baseUrl + userData.username, { method: "DELETE" })
        .then(handleResponse)
        .catch(handleError);
}