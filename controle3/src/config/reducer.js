const initialState = {
    stagiaires: [
      {
        code: 1,
        nom: 'dani',
        prenom: 'mohamed',
        filiere: 'Informatique',
        option: 'full stack',
        modules: [
          { code_m: 101, libelle: 'Module 1', MH: 30 },
          { code_m: 102, libelle: 'Module 2', MH: 20 },
        ],
      },
    ],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'AJOUTER_MODULE':
    
        return state;
      case 'MODIFIER_OPTION':
        
        return {
          ...state,
          stagiaires: state.stagiaires.map((stagiaire) =>
            stagiaire.code === action.payload.stagiaireCode
              ? { ...stagiaire, option: action.payload.nouvelleOption }
              : stagiaire
          ),
        };
      
      default:
        return state;
    }
  };
  
  export default reducer;
  
  