import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import StyledText from '../components/util/StyledText';

const Countdown = ({ navigation }) => {
  const startDate = new Date(2021, 10, 24);
  const [rDay, setRDay] = useState(0);
  const [rHour, setRHour] = useState(0); //countdown 2 hours.
  const [rMin, setRMin] = useState(0);
  const [rSec, setRSec] = useState(0);

  // console.log(startDate.getHours());
  function getTime() {
    const currentDays = startDate.getDate() - new Date().getDate();

    const finishHours = startDate.getHours() + startDate.getMinutes() / 60 + startDate.getSeconds() / 3600;
    const currentHours = new Date().getHours() + new Date().getMinutes() / 60 + new Date().getSeconds() / 3600;
    const remainingHours = finishHours - currentHours;

    const remainingHour = Math.floor(remainingHours);
    const remainingMinute = Math.floor((remainingHours - remainingHour) * 60);
    const remainingSecond = Math.floor(((remainingHours - remainingHour) * 60 - remainingMinute) * 60)

    setRDay(currentDays);
    setRHour(remainingHour);
    setRMin(remainingMinute);
    setRSec(remainingSecond);
    // console.log("count")
  }
  useEffect(() => {
    const i = setInterval(getTime, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <View style={[styles.background]}>
      <View style={[styles.container]}>
        <Image
          style={[styles.image]}
          source={require('../assets/static/fdl-logo.png')}
        />
      </View>
      <View style={[styles.section]}>
        <Image
          style={[styles.text]}
          source={require('../assets/icons/Coming-Soon.svg')}
        />
      </View>
      <View style={[styles.section, styles.row]}>
        <StyledText
          children={("0" + rDay)}
          fontSize="30"
          fontWeight="800"
          color="#fff"
        />
        <StyledText
          children=' : '
          fontSize="30"
          fontWeight="800"
          color="#A07D28"
        />
        <StyledText
          children={("0" + rHour).slice(-2)}
          fontSize="30"
          fontWeight="800"
          color="#fff"
        />
        <StyledText
          children=' : '
          fontSize="30"
          fontWeight="800"
          color="#A07D28"
        />
        <StyledText
          children={("0" + rMin).slice(-2)}
          fontSize="30"
          fontWeight="800"
          color="#fff"
        />
        <StyledText
          children=' : '
          fontSize="30"
          fontWeight="800"
          color="#A07D28"
        />
        <StyledText
          children={("0" + rSec).slice(-2)}
          fontSize="30"
          fontWeight="800"
          color="#fff"
        />
      </View>
      <View style={[styles.section, styles.row]}>
      <Pressable style={{cursor: 'pointer'}} onPress={() => {navigation.navigate('Signup')}}>
      <StyledText
          children='Sign up '
          fontSize="26"
          fontWeight="600"
          color="#A07D28"
        />
        </Pressable>
        <StyledText
          children='to our email list so you can be notified when we go live!'
          fontSize="26"
          fontWeight="600"
          color="#fff"
        />
      </View>
    </View>
  )
}

export default Countdown

const styles = StyleSheet.create({
  background: {
    backgroundColor: "rgba(160, 125, 40, 0.3)",
    height: '100%',
  },
  container: {
    alignItems: 'center',
    paddingTop: '60px',
    marginBottom: 10,
  },
  section: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    width: 230,
    height: 60
  },
  image: {
    width: 223,
    height: 269,
  },
})
