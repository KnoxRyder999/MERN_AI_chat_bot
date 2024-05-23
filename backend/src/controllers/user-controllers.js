export const getAllUsers = () => {

    //get all users from the server
    return fetch('/api/users')
        .then(res => res.json())
}