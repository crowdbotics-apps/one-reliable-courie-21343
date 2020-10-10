import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Add-Item137407Navigator from '../features/Add-Item137407/navigator';
import Maps137403Navigator from '../features/Maps137403/navigator';
import UserProfile137399Navigator from '../features/UserProfile137399/navigator';
import BlankScreen1137376Navigator from '../features/BlankScreen1137376/navigator';
import BlankScreen0137375Navigator from '../features/BlankScreen0137375/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Add-Item137407: { screen: Add-Item137407Navigator },
Maps137403: { screen: Maps137403Navigator },
UserProfile137399: { screen: UserProfile137399Navigator },
BlankScreen1137376: { screen: BlankScreen1137376Navigator },
BlankScreen0137375: { screen: BlankScreen0137375Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
