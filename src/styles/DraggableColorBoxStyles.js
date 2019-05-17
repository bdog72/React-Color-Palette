const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.5)'
      // fontSize: '2rem'
    }
  },
  boxContent: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-between',
    // alignItems: 'center',
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    color: 'rgba(0,0,0,0.5)',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px'
  },
  deleteIcon: {
    transition: 'all 0.3s ease-in-out'
    // color: 'black'
  }
};
export default styles;
