import { JSX } from "react";
import { Text, View, ImageBackground } from "react-native";
//import { styles } from "../styles";

export default function EventNameHeader(props: { name: string }): JSX.Element {
    return (
        <View style={{borderRadius: 12}}>
            <ImageBackground 
                source={{uri: '/Users/max/Documents/GitHub/smartkiosk/frontend-mobile/src/assets/void.png'}} 
                style={{width: '100%', height: 120, justifyContent: 'center', paddingHorizontal: 20}}
                imageStyle={{ opacity: 0.3 }}
            >
                <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black',}}>{props.name}</Text>
            </ImageBackground>
        </View>
    );
}
