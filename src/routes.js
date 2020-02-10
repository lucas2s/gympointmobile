import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from '~/pages/SignIn';
import CheckIns from '~/pages/CheckIns';

const Routes = createAppContainer(
  createSwitchNavigator({
    SignIn,
    CheckIns,
  })
);

export default Routes;
