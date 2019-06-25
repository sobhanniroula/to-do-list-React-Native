import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TabNaviagator, TabBarBottom } from 'react-navigation';

import COLORS from '../constants/Colors';
import CONSTANTS from '../constants';
import TodosScreen from '../screens/TodosScreen';


const commonNavigationOptions = ({ navigation }) => ({
    header: null,
    title: navigation.state.nouteName
});

const routeOptions = {
    screen: TodosScreen,
    navigationOptions: commonNavigationOptions
};


// Different routes for all, active and completed todos
const TabNav = TabNaviagator(
    {
        [CONSTANTS.ALL]: routeOptions,
        [CONSTANTS.ACTIVE]: routeOptions,
        [CONSTANTS.COMPLETED]: routeOptions
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch (routeName) {
                    case CONSTANTS.ALL:
                        iconName = 'format-list-bulleted';
                        break;
                    case CONSTANTS.ACTIVE:
                        iconName = 'filter-center-focus';
                        break;
                    case CONSTANTS.COMPLETED:
                        iconName = 'playlist-add-check'; 
                }
                return (
                    <MaterialIcons
                        name={iconName}
                        size={28}
                        style={{ marginBottom: -3 }}
                        color={focused ? COLORS.tabIconSelected : COLORS.tabIconDefault}
                    />
                );
            }
        }),

        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true
    }
);

export default TabNav;