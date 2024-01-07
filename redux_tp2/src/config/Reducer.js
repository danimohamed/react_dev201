const initialState = {
    stagiaires: [
        { code: 1, nom: "Rami", prenom: "Ahmed" },
        { code: 2, nom: "Aloui", prenom: "imane" }


    ]
}

export const reducer = (action, state = initialState) => { 
    switch (action.type) {
        case 'Add':
            return {
                ...state, stagiaires:
                    [...state.stagiaires, action.payload]
            }
        case 'Delete':
            return {
                ...state, stagiaires: [
                    ...state.stagiaires.
                        filter(
                            (s) => s.code !== parseInt(action.payload))
                ]
            }
        case 'Edit':
            const stg = state.stagiaires.
                find((s) => s.code === parseInt(action.payload.code))
            if (stg) {
                stg.nom = action.payload.nom
                stg.prenom = action.payload.prenom
            }
            return state;
        default:
            return state;
    }
}