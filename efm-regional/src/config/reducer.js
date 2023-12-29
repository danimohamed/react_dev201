const initialState = {
    employers: [
        { matricule: 100, nom: "Rami", departement: "Achat" },
        { matricule: 101, nom: "Aloui", departement: "Vente" }
    ]
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AddEmployer':
            return {
                ...state, employers: [...state.employers, action.payload]
            }
        case 'DeleteEmployer':
            return {
                ...state, employers: [
                    ...state.employers.filter((emp) => emp.matricule !== parseInt(action.payload))
                ]
            }
        case 'EditEmployer':
            return state;
        default:
            return state;
    }
}
