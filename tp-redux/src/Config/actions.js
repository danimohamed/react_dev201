export const AddUserAction = (newuser) => {
    return { type: 'AddUser', payload: newuser }
}
export const UpdateUserAction = (userup) => {
    return { type: 'UpdateUser', payload: userup }
}
export const DeleteUserAction = (id) => {
    return { type: 'DeleteUser', payload: id }
}


