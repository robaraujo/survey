export const ucfirst = (text) => text.charAt(0).toUpperCase() + text.slice(1);

export const getInputLabel = ({ label, name }) => label || ucfirst(name);
