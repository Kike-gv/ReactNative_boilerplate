import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { connect, useSelector, useDispatch } from 'react-redux';

const HomeScreen = ({ navigation }) => {
    const actualizeInput = useSelector(state => state.inputState.actualizeInput);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Una pagina home</Text>
            <Text>Texto que modifico con Redux</Text>
            <Text>{actualizeInput}</Text>
            <TouchableOpacity onPress={() => {
                // navigation.navigate('Detalle Promociones', props); el props sustiruirlo por la prop que quieras
                navigation.navigate('Detalle');
            }
            }>
                <Text>Si clicas aqui vas al StackRouter</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;