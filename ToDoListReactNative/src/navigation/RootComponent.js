import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Container, Spinner } from 'native-base';
import { ReactiveBase } from '@appbaseio/reactivesearch-native';

import CONFIG from '../constants/Config';
import COLORS from '../constants/Colors';
import MainTabNavigator from './MainTabNavigator';


// Root Component:
export default class RootComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isReady: false
        };
    }

    // async componentWillMount() {
    //     await Font.loadAsync({
    //         Roboto: require('../../assets/fonts/Roboto.ttf'),
    //         Roboto_medium: require('../../assets/fonts/Roboto_medium.ttf'),
    //         Ionicons: require('../../assets/fonts/Ionicons.ttf'),
    //     });
    //     this.setState({ isReady: true });
    // }

    renderStatusBar = () => <StatusBar backgroundColor={COLORS.secondary} barStyle="dark-content" />;

    render() {
        // if (!this.state.isReady) {
        //     return (
        //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        //             {this.renderStatusBar()}
        //             <Spinner color={COLORS.primary} />
        //         </View>
        //     );
        // }

        return (
            <ReactiveBase app={CONFIG.app} credentials={CONFIG.credentials} type={CONFIG.type}>
                <Container>
                    <MainTabNavigator />
                </Container>
            </ReactiveBase>
            
        );
    }
}