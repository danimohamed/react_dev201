
export const ajouterModule = (stagiaireCode, module) => ({
    type: 'AJOUTER_MODULE',
    payload: { stagiaireCode, module },
});

export const modifierOption = (stagiaireCode, nouvelleOption) => ({
    type: 'MODIFIER_OPTION',
    payload: { stagiaireCode, nouvelleOption },
});


