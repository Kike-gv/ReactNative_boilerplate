import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

import { connect, useSelector, useDispatch } from 'react-redux';
import { actualizeInputValue } from '../../redux/actions/InputActions';

const DertialScreen = () => {
    const actualizeInput = useSelector(state => state.inputState.actualizeInput);
    const dispatch = useDispatch();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>El detalle</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 16, paddingRight: 16 }}
                placeholder='Escribe algo para que redux lo actualize'
                onChangeText={(text) => dispatch(actualizeInputValue(text))}
                value={actualizeInput}
            />
            <Text>Prueba de redux hooks</Text>
            <Text>{actualizeInput}</Text>
        </View>
    );
}

export default DertialScreen;