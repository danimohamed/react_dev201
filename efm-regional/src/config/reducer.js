const initialState = {
    employers: [
        { matricule: 100, nom: "dani", departement: "Achat" },
        { matricule: 101, nom: "achraf", departement: "Vente" }
    ]
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AddEmployer':
            return {
                ...state,
                employers: [...state.employers, action.payload]
            };
        case 'DeleteEmployer':
            return {
                ...state,
                employers: [
                    ...state.employers.filter((emp) => emp.matricule !== parseInt(action.payload))
                ]
            };
        case 'EditEmployer':
            return {
                ...state,
                employers: state.employers.map((emp) =>
                    emp.matricule === action.payload.matricule ? { ...emp, ...action.payload } : emp
                )
            };
        default:
            return state;
    }
};

