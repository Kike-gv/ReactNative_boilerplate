import React from 'react';
import { Text, View } from 'react-native';

import { connect, useSelector, useDispatch } from 'react-redux';

const SettingsScreen = () => {
    const actualizeInput = useSelector(state => state.inputState.actualizeInput);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
            <Text>Texto que modifico con Redux</Text>
            <Text>{actualizeInput}</Text>
        </View>
    );
}

export default SettingsScreen;