export const selectStyles = {
  container: (baseStyles, state) => ({
    ...baseStyles,
    width: '100%',
    outline: 'none',
    border: 'none',
    marginBottom: '40px',
    '@media screen and (max-width:767px)': {
      width: '280px',
    },
  }),
  valueContainer: (baseStyles, state) => ({
    ...baseStyles,
  }),
  control: (baseStyles, state) => ({
    ...baseStyles,
    border: 'none',
    outline: 'none',
    borderBottom: '1px solid var(--disabled-grey-text-color)',
    boxShadow: 'none',
    borderRadius: '0',
    cursor: 'pointer',
    ':hover': {
      borderBottom: '1px solid var(--accent-color-blue)',
    },
    ':focus': {
      borderBottom: '1px solid var(--accent-color-blue)',
    },
  }),
  menu: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    boxShadow: '0px 6px 15px 0px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(25px)',
    borderRadius: '20px',
    overflow: 'hidden',
  }),
  menuList: (baseStyles, state) => ({
    ...baseStyles,
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    fontSize: '18px',
    fontWeight: '400',
    color: '#000',
    cursor: 'pointer',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    ':hover': {
      color: 'var(--accent-color-red)',
      backgroundColor: 'white',
    },
    transition: 'color 250ms linear',
  }),
  indicatorSeparator: (baseStyles, state) => ({
    ...baseStyles,
    display: 'none',
  }),
  placeholder: (baseStyles, state) => ({
    ...baseStyles,
    color: '#bdbdbd',
    fontSize: '18px',
  }),
};
