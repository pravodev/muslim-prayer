import React, { Component } from 'react'
import Loadable from 'react-loadable'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { interval } from 'rxjs'

import PrayerScreenLoader from '../../components/PrayerScreen/Loader'
import PrayerList from '../../components/PrayerList/'
import PrayerScreenAnimation from '../../contexts/PrayerScreenAnimation'
import PrayerTime from '../../contexts/PrayerTime'

import styles from './styles'

const PrayerScreen = Loadable({
  loader: () => import('../../components/PrayerScreen/'),
  loading: () => <PrayerScreenLoader />
})

class Home extends Component {
  static contextType = PrayerTime

  componentDidMount() {
    this.subscription = interval(1000)
      .subscribe(() => {
        this.context.getNearestPrayer()
      })
  }

  componentWillUnmount() {
    this.subscription.unsubscribe()
  }

  render() {
    const { classes } = this.props

    return (
      <PrayerScreenAnimation.Consumer>
        {({updateByWheel, setInitTouched}) => (
          <div
            className={classes.home}
            onWheel={updateByWheel}
            onTouchStart={setInitTouched}
          >
            <PrayerScreen />
            <PrayerList />
          </div>
        )}
      </PrayerScreenAnimation.Consumer>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home)