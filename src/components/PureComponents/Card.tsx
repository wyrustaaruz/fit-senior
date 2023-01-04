import { Text, View } from "react-native";
import Colors from "../../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

type DefaultTextType = Text["props"];

interface TextType extends DefaultTextType {
  backgroundColor?: string;
}

export function Card(props: TextType) {
  const { style, backgroundColor } = props;
  const color = Colors.White
  const fontWeight = '600';

  return (
    <View style={{ marginHorizontal: 0 }}>
      <View>
        <LinearGradient
          style={{
            width: 200,
            height: 400,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          colors={['#eed9d2', '#cda697']}
        >
          <Text style={[{ color, fontWeight }, style]}>{props.children}</Text>
        </LinearGradient>
      </View>
    </View>
  );
}
