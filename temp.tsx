import { useState, type JSX } from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
    FlatList,
    Dimensions,
    TouchableOpacity,
    SafeAreaView
} from "react-native";
import SegmentedControl from "@react-native-segmented-control/segmented-control";

const { width } = Dimensions.get("window");
const GAP = 16;
const PADDING = 16;
const COLUMN_WIDTH = (width - (PADDING * 2) - GAP) / 2;

// Mock Data based on the prototype
const MOCK_PRODUCTS = [
    { 
        id: '1', 
        name: 'Nom du produit', 
        price: '€10,99', 
        image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' // Radishes
    },
    { 
        id: '2', 
        name: 'Nom du produit', 
        price: '€10,99', 
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' // Mushrooms
    },
    { 
        id: '3', 
        name: 'Nom du produit', 
        price: '€10,99', 
        image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' // Cherries
    },
];

export default function ProductsScreen(): JSX.Element {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const renderHeader = () => (
        <View>
            {/* Event Header */}
            <View style={styles.headerContainer}>
                {/* Placeholder pattern background */}
                <View style={styles.headerBackgroundPattern}>
                    <View style={[styles.checkerBox, { backgroundColor: '#f0f0f0' }]} />
                    <View style={[styles.checkerBox, { backgroundColor: '#e0e0e0' }]} />
                    <View style={[styles.checkerBox, { backgroundColor: '#e0e0e0' }]} />
                    <View style={[styles.checkerBox, { backgroundColor: '#f0f0f0' }]} />
                </View>
                
                <Text style={styles.headerTitle}>Nom de l'événement</Text>
            </View>

            {/* Segmented Control */}
            <View style={styles.segmentContainer}>
                <SegmentedControl
                    values={["Boisson", "Alimentaire"]}
                    selectedIndex={selectedIndex}
                    onChange={(event) => {
                        setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
                    }}
                    appearance="light"
                    fontStyle={{ fontSize: 16, fontWeight: '500' }}
                    style={{ height: 36 }}
                />
            </View>
        </View>
    );

    const renderItem = ({ item }: { item: any }) => (
        <TouchableOpacity style={styles.card} activeOpacity={0.8}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardPrice}>{item.price}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.screenContainer}>
            <FlatList
                data={MOCK_PRODUCTS}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
                ListHeaderComponent={renderHeader}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    listContent: {
        paddingBottom: 100, // Space for bottom tab bar
    },
    // Header
    headerContainer: {
        height: 120,
        marginHorizontal: 16,
        marginTop: 10,
        marginBottom: 24,
        borderRadius: 8,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    },
    headerBackgroundPattern: {
        ...StyleSheet.absoluteFillObject,
        flexDirection: 'row',
        flexWrap: 'wrap',
        opacity: 0.3,
    },
    checkerBox: {
        width: '50%',
        height: '50%',
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        zIndex: 1,
    },
    // Segmented Control
    segmentContainer: {
        marginHorizontal: 60, // Narrower as per design
        marginBottom: 24,
    },
    // Grid
    columnWrapper: {
        justifyContent: 'space-between',
        paddingHorizontal: PADDING,
    },
    card: {
        width: COLUMN_WIDTH,
        marginBottom: 24,
    },
    cardImage: {
        width: '100%',
        height: COLUMN_WIDTH, // Square aspect ratio
        borderRadius: 12,
        marginBottom: 8,
        backgroundColor: '#f0f0f0',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 4,
        color: '#000',
    },
    cardPrice: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
});
