import { SafeAreaView, ScrollView,View } from "react-native";
import Carousel from "../../components/Carousel";
import { Card, Text,  } from "../../components/PureComponents";
import Layout from "../../constants/Layout";


export default function Home() {
  const colors = ['#fda282', '#fdba4e', '#800015'];
  return (
    <SafeAreaView>
    <ScrollView >
      <Text type="title">Good Day, You look awesome today</Text>
      <Text type="title">Recent Activity</Text>
      <View style={{flex:1}}>
      <Carousel data={colors} />
            </View>
      </ScrollView>
    </SafeAreaView>
  );
}
