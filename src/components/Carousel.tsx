import * as React from 'react';
import { View } from 'react-native';
import { default as DefaultCarousel }  from 'react-native-reanimated-carousel';
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated';
import Layout from '../constants/Layout';
import { withAnchorPoint } from '../utils/anchor-point';
import { Text } from './PureComponents';

const PAGE_WIDTH = Layout.window.width;
const PAGE_HEIGHT = Layout.window.width * 1.2;

function Carousel(props : any) {
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
                    return (
                    <Card
                        animationValue={animationValue}
                        key={index}
                        index={index}
                        data={item}
                    />
                )}}
            />
        </View>
    );
}

const Card: React.FC<{
    index: number;
    data: any;
    animationValue: Animated.SharedValue<number>;
}> = ({ index, animationValue, data }) => {
    const WIDTH = PAGE_WIDTH / 1.5;
    const HEIGHT = PAGE_HEIGHT / 1.5;
    const colors = ['#fda282', '#fdba4e', '#800015'];

    const cardStyle = useAnimatedStyle(() => {
        const scale = interpolate(
            animationValue.value,
            [-0.1, 0, 1],
            [0.95, 1, 1],
            Extrapolate.CLAMP
        );

        const translateX = interpolate(
            animationValue.value,
            [-1, -0.2, 0, 1],
            [0, WIDTH * 0.3, 0, 0]
        );

        const transform = {
            transform: [
                { scale },
                { translateX },
                { perspective: 200 },
                {
                    rotateY: `${interpolate(
                        animationValue.value,
                        [-1, 0, 0.4, 1],
                        [30, 0, -25, -25],
                        Extrapolate.CLAMP
                    )}deg`,
                },
            ],
        };

        return {
            ...withAnchorPoint(
                transform,
                { x: 0.5, y: 0.5 },
                { width: WIDTH, height: HEIGHT }
            ),
        };
    }, [index]);

    return (
      <Animated.View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Animated.View
          style={[
            {
              backgroundColor: colors[index],
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              width: WIDTH,
              height: HEIGHT,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 8,
              },
              shadowOpacity: 0.44,
              shadowRadius: 10.32,

              elevation: 16,
            },
            cardStyle,
          ]}
        >
          <Text type='title'>{data}</Text>
        </Animated.View>
      </Animated.View>
    );
};

export default Carousel;