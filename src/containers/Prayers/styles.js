import { navbarHeight } from '../../constants/'

export default theme => ({
  prayers: {
    boxSizing: 'border-box',
    height: '100%',
    padding: '0px 20px',
    paddingBottom: 20 + 48 + navbarHeight
  },
  menuIcon: {
    color: 'rgba(0, 0, 0, 0.54)'
  },
  dates: {
    padding: '15px 10px',
    margin: 'unset',
  },
  innerDates: {
    height: '100%',
    width: '100%',
    padding: 0,
    margin: 0,
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    padding: theme.spacing.unit / 2,
  }
})