export const setEmailUser = (valor) => localStorage.setItem('user', valor);
export const setIdentifier = (valor) => localStorage.setItem('identifier', valor);

export const getEmailUser = () => localStorage.getItem('user');
export const getIdentifier = () => localStorage.getItem('identifier');