import { useDispatch } from "react-redux";
import { Button, Text, View } from "../../components/PureComponents";
import Actions from "../../redux/actions";


export default function Login() {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(Actions.authActions.makeLogin('132', '123'));
  };
  return (
      <View style={{marginTop:200}}>
        <Text>Login</Text>
        <Button onPress={handleLogin}><Text type="danger" >Login</Text></Button>
      </View>
  );
}
