export const AddUserAction = (newuser) => {
    return { type: 'AddUser', payload: newuser }
}
const userup = { id: 2, name: 'Hind Allaoui', email: 'benani@gmail.com' }
export const UpdateUserAction = (userup) => {
    return { type: 'UpdateUser', payload: userup }
}
export const DeleteUserAction = (id) => {
    return { type: 'DeleteUser', payload: id }
}


