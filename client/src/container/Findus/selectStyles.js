const selectStyles = {
  control: (styles) => ({
    ...styles,
    width: '100%', // Ancho por defecto
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderColor: 'transparent',
    borderRadius: '10px',
    height: '2.8rem',
    '&:hover': {
      borderColor: 'transparent',
    },
  }),

  placeholder: (styles) => ({
    ...styles,
    position: "absolute",
    top: '7px',
  }),

  singleValue: (styles) => ({
    ...styles,
    position: "absolute",
    top: '7px',
  }),

  dropdownIndicator: (styles) => ({
    ...styles,
    position: "absolute",
    top: '6px',
    right: '6px',
    color: 'black'
  }),

  indicatorSeparator: (styles) => ({
    ...styles,
    display: 'none', // Cambia el color del separador
  }),

};

export { selectStyles };
