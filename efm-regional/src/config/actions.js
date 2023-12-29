export const AddEmployer = (newEmployer) => {
    return { type: 'AddEmployer', payload: newEmployer }
}

export const DeleteEmployer = (matricule) => {
    return { type: 'DeleteEmployer', payload: matricule }
}

export const EditEmployer = (editedEmployer) => {
    return { type: 'EditEmployer', payload: editedEmployer }
}
