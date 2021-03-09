export const ucfirst = (text) => text.charAt(0).toUpperCase() + text.slice(1);

export const getLabelText = ({ label, name }) => label || ucfirst(name);
