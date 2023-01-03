import { Text as DefaultText } from "react-native";
import Colors from "../../constants/Colors";

type DefaultTextType = DefaultText["props"];

interface TextType extends DefaultTextType {
  type?: string;
}

export function Text(props: TextType) {
  const { style, type, ...otherProps } = props;
  const color = Colors.Black
  const fontWeight = type === 'button' || type === 'title' ? '600' : '300';
  return <DefaultText style={[{ color, fontWeight }, style]} {...otherProps} />;
}
