import * as React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { default as DefaultCarousel } from 'react-native-reanimated-carousel';
import Animated from 'react-native-reanimated';
import Layout from '../constants/Layout';
import { Text } from './PureComponents';
import Flower from '../../assets/images/svg/Flower';
import Colors from '../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';

const PAGE_WIDTH = Layout.window.width;
const PAGE_HEIGHT = Layout.window.width * 1.2;

function Carousel(props: any) {
  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
  } as const;

  return (
    <View style={{ flex: 1 }}>
      <DefaultCarousel
        {...baseOptions}
        loop
        autoPlay={true}
        withAnimation={{
          type: 'spring',
          config: {
            damping: 13,
          },
        }}
        autoPlayInterval={3500}
        data={props.data}
        renderItem={({ item, index, animationValue }) => {
          return <Card data={item} />;
        }}
      />
    </View>
  );
}

const Card: React.FC<{
  data: any;
}> = ({ data }) => {
  const WIDTH = PAGE_WIDTH / 1.5;
  const HEIGHT = PAGE_HEIGHT / 1.2;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log('123');
      }}
    >
      <Animated.View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <LinearGradient
          // Button Linear Gradient
          style={{
            width: WIDTH,
            height: HEIGHT,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          colors={['#eed9d2', '#cda697']}
        >
          <Flower
            width={WIDTH}
            height={HEIGHT}
            fill={Colors.PrimaryColor2}
            style={StyleSheet.absoluteFill}
          />

          <Text style={{ color: 'white', fontWeight: '900' }}>{data}</Text>
          <Text type="title">{data}</Text>
        </LinearGradient>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Carousel;
