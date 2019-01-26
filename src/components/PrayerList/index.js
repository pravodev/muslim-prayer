import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import AlarmIcon from '@material-ui/icons/Alarm'

import Box from '../Box/'
import PrayerTime from '../../contexts/PrayerTime'

import styles from './styles'

const prayers = [
  {
    id: 'shubuh',
    name: 'Shubuh'
  },
  {
    id: 'dzuhur',
    name: 'Dzuhur',
  },
  {
    id: 'ashar',
    name: 'Ashar',
  },
  {
    id: 'maghrib',
    name: 'Maghrib',
  },
  {
    id: 'isya',
    name: 'Isya',
  },
]

class PrayerList extends Component {
  static contextType = PrayerTime

  updatePrayer = prayer => () => {
    const { updatePrayer, clearNext } = this.context

    updatePrayer(prayer)
    clearNext()
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.prayerList}>
        <Box>
          <List className={classes.lists} component="nav">
            {prayers.map((prayer, i) => (
              <ListItem
                key={i}
                onClick={this.updatePrayer(prayer.id)}
                className={classes.list}
                button
              >
                <ListItemText
                  classes={{
                    primary: classes.text
                  }}
                  primary={prayer.name}
                />
                <ListItemSecondaryAction>
                  <IconButton className={classes.icon}>
                    <AlarmIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Box>
      </div>
    )
  }
}

PrayerList.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PrayerList)