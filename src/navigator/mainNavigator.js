import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps137637Navigator from '../features/Maps137637/navigator';
import Add-Item137636Navigator from '../features/Add-Item137636/navigator';
import Maps137632Navigator from '../features/Maps137632/navigator';
import UserProfile137628Navigator from '../features/UserProfile137628/navigator';
import Maps137458Navigator from '../features/Maps137458/navigator';
import Add-Item137457Navigator from '../features/Add-Item137457/navigator';
import Maps137453Navigator from '../features/Maps137453/navigator';
import UserProfile137449Navigator from '../features/UserProfile137449/navigator';
import BlankScreen2137426Navigator from '../features/BlankScreen2137426/navigator';
import Maps137408Navigator from '../features/Maps137408/navigator';
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
Maps137637: { screen: Maps137637Navigator },
Add-Item137636: { screen: Add-Item137636Navigator },
Maps137632: { screen: Maps137632Navigator },
UserProfile137628: { screen: UserProfile137628Navigator },
Maps137458: { screen: Maps137458Navigator },
Add-Item137457: { screen: Add-Item137457Navigator },
Maps137453: { screen: Maps137453Navigator },
UserProfile137449: { screen: UserProfile137449Navigator },
BlankScreen2137426: { screen: BlankScreen2137426Navigator },
Maps137408: { screen: Maps137408Navigator },
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
