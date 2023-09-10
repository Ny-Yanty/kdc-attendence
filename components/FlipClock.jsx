import { Component, useEffect, useRef } from 'react'
import { Animated, Easing, StyleSheet, Text, View } from 'react-native'

const cardWidth = 93
const cardHeight = 175
const cardSpacing = 50
const fontSize = 75
const cardColor = 'white'

const styles = StyleSheet.create({
  flipCard: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    width: '100%',
    height: '50%',
    overflow: 'hidden',
    backfaceVisibility: 'hidden',
  },

  flipCardUnfold: {
    top: '50%',
    alignItems: 'flex-start',
    transformOrigin: '50% 0%',
    transform: [ {rotateX: '180deg' }],
    backgroundColor: cardColor,
    borderBottomLeftRadius: '3px',
    borderBottomRightRadius: '3px',
    border: '0.5px solid whitesmoke',
  },
  flipCardUnFoldText: {
    transform: [
      {
        translateY: -cardWidth/2
      }
    ],
  },
  flipCardFold: {
    top: '0%',
    alignItems: 'flex-end',
    transformOrigin: '50% 100%',
    transform: 'rotateX(0deg)',
    backgroundColor: cardColor,
    borderTopLeftRadius: '3px',
    borderTopRightRadius: '3px',
    border: '0.5px solid whitesmoke',

  },
  flipCardFoldText: {
    transform: [
      {
        translateY: cardWidth/2
      }
    ],
    color: 'pink',
  },
  flipCardUnfoldText: {
    transform: [
      {
        translateY: cardWidth/2
      }
    ],
    color: 'pink',
  },
  flipclock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: (3 * cardWidth) + cardSpacing,
  },
  flipUnitContainer: {
    display: 'block',
    position: 'relative',
    width: cardWidth,
    height: cardHeight,
    perspectiveOrigin: '50% 50%',
    perspective: '300px',
    borderRadius: '3px',
    boxShadow: '0px 10px 10px -10px grey',
    backgroundColor: cardColor,
  },
  card: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
    overflow: 'hidden',
    border: '1px solid whitesmoke',
  },
  cardText: {
    fontSize: fontSize,
    fontWeight: 'light',
    color: '#333333',
  },
  upperCard: {
    alignItems: 'flex-end',
    borderBottom: '0.5px solid whitesmoke',
    borderTopLeftRadius: '3px',
    borderTopRightRadius: '3px',
  },
  upperCardText: {
    transform: [
      {
        translateY: cardWidth/2
      }
    ],
    color:'pink',
  },
  lowerCard: {
    alignItems: 'flex-start',
    borderTop: '0.5px solid whitesmoke',
    borderBottomLeftRadius: '3px',
    borderBottomRightRadius: '3px',
  },
  lowerCardText: {
    transform: [
      {
        translateY: -cardWidth/2
      }
    ],
    color: 'pink',
  },
})

const AnimatedCard = ({ animation, shuffle, digit }) => {
  const deg = new Animated.Value(0)

  useEffect(() => {
    if (shuffle) {
      Animated.timing(deg, {
        toValue: 1,
        duration: 600,
        easing: Easing.easeInOut,
        useNativeDriver: true, // To make use of native driver for performance
      }).start()
    }
      
  }, [deg])
  let spin, flipStyle, flipTextStyle, animatedStyles
  if (animation === 'fold') {
    spin = deg.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '-180deg'],
    })
    flipStyle = styles.flipCardFold
    flipTextStyle = styles.flipCardFoldText
  } else if (animation === 'unfold') {
    spin = deg.interpolate({
      inputRange: [0, 1],
      outputRange: ['180deg', '0deg'],
    })
    flipStyle = styles.flipCardUnfold
    flipTextStyle = styles.flipCardUnFoldText
  }
  if (spin) {
    animatedStyles = {
      transform: [
        {
          rotateX: spin,
        }, 
      ],
    }
  }
  return (
    <Animated.View
      style={[
        styles.flipCard,
        flipStyle,
        animatedStyles?animatedStyles:{},
      ]}
    >
      <Text
        style={[
          styles.cardText,
          flipTextStyle,
        ]}
      >
        {digit}
      </Text>
    </Animated.View>
  )
}

// function component
const StaticCard = ({ position, textStyle, digit }) => {
  return (
    <View style={[styles.card, position]}>
      <Text style={[styles.cardText, textStyle]}>{digit}</Text>
    </View>
  )
}

const FlipUnitContainer = ({ digit, shuffle, unit }) => {
  // assign digit values
  let currentDigit = digit
  let previousDigit = digit
  if (shuffle) {
    currentDigit = digit
    previousDigit = digit - 1
  }
  
  // to prevent a negative value
  if (unit !== 'hours') {
    previousDigit = previousDigit === -1 ? 59 : previousDigit
  } else {
    previousDigit = previousDigit === -1 ? 23 : previousDigit
  }

  // add zero
  if (currentDigit < 10) {
    currentDigit = `0${currentDigit}`
  }
  if (previousDigit < 10) {
    previousDigit = `0${previousDigit}`
  }

  // shuffle digits\
  let digit1 = currentDigit
  let digit2 = currentDigit
  if (shuffle) {
    digit1 = previousDigit
    digit2 = currentDigit
  }


  // shuffle animations
  const animation1 = shuffle ? 'fold' : 'unfold'
  const animation2 = !shuffle ? 'fold' : 'unfold'

  return (
    <View style={styles.flipUnitContainer}>
      <StaticCard
        position={styles.upperCard}
        textStyle={styles.upperCardText}
        digit={currentDigit}
      />
      <StaticCard
        position={styles.lowerCard}
        textStyle={styles.lowerCardText}
        digit={previousDigit}
      />
      <AnimatedCard digit={digit1} animation={animation1} shuffle={shuffle}/>
      <AnimatedCard digit={digit2} animation={animation2} shuffle={shuffle}/>
    </View>
  )
}

class FlipClock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hours: 0,
      hoursShuffle: true,
      minutes: 0,
      minutesShuffle: true,
      seconds: 0,
      secondsShuffle: true,
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  updateTime() {
    // get new date
    const time = new Date()
    // set time units
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    
    const hoursShuffle = hours !== this.state.hours
    const minutesShuffle = minutes !== this.state.minutes
    const secondsShuffle = seconds !== this.state.seconds
    
    this.setState({
      hours,
      hoursShuffle,
      minutes,
      minutesShuffle,
      seconds,
      secondsShuffle,
    })

  }

  render() {
    // state object destructuring
    const {
      hours,
      minutes,
      seconds,
      hoursShuffle,
      minutesShuffle,
      secondsShuffle,
    } = this.state

    return (
      <View style={styles.flipclock}>
        <FlipUnitContainer
          unit={'hours'}
          digit={hours}
          shuffle={hoursShuffle}
        />
        <FlipUnitContainer
          unit={'minutes'}
          digit={minutes}
          shuffle={minutesShuffle}
        />
        <FlipUnitContainer
          unit={'seconds'}
          digit={seconds}
          shuffle={secondsShuffle}
        />
      </View>
    )
  }
}
export default FlipClock