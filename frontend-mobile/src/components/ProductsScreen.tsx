import * as React from 'react';
import { Text, View } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

type SegmentedControlChangeEvent = {
    nativeEvent: {
        selectedSegmentIndex: number;
    };
};

export default function ProductsScreen() : React.JSX.Element {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16 }}>
            <SegmentedControl
                values={['Tous', 'Catégorie 1', 'Catégorie 2']}
                selectedIndex={selectedIndex}
                onChange={(event: SegmentedControlChangeEvent) => {
                    setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
                }}
                tintColor="lightgray"
                style={{ alignSelf: 'stretch', height: 34, marginVertical: 12 }}
            />

            <Text>Produits! Index sélectionné: {selectedIndex}</Text>
        </View>
    );
}
