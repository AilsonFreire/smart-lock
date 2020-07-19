import Login from "@views/Login";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AuthLogin = createStackNavigator({ Login }, { headerMode: 'none' })

const Router = createAppContainer(createSwitchNavigator({ AuthLogin }, { initialRouteName: 'AuthLogin' }));

export default Router;