export const AddStgAction = (Newstg) => {
    return { type: 'Add', payload: Newstg }
}
export const DeleteStgAction = (code) => {
    return { type: 'Delete', payload: code }
}
export const EditStgAction = (stg) => {
    return { type: 'Edit', payload: stg }
}
