import AuthLoadingScreen from "@views/AuthLoadingScreen";
import Login from "@views/Login";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const LoginStack = createStackNavigator({ Login }, { headerMode: 'none' });
const LoadingStack = createStackNavigator({ AuthLoadingScreen }, { headerMode: 'none' });

const Router = createAppContainer(createSwitchNavigator(
  {
    LoginStack,
    LoadingStack
  },
  { initialRouteName: 'LoadingStack' }
)
);

export default Router;