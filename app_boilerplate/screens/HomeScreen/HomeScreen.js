import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Una pagina home</Text>
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