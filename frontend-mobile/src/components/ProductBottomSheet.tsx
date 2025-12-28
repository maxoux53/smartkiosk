import { useCallback, forwardRef, useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomSheetModal, BottomSheetView, BottomSheetBackdrop, BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import { Product } from '../types/items';

export const ProductBottomSheet = forwardRef<BottomSheetModal, { product: Product | null }>(({ product }, ref) => {
  const [quantity, setQuantity] = useState(1);

  const renderBackdrop = useCallback((props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  if (!product) { // temporaire
    return null;
  }

  return (
      <BottomSheetModal
        ref={ref}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Image source={{ uri: product.image }} style={styles.image} />
          
          <Text style={styles.name}>{product.name}</Text>
          
          <View style={styles.footer}>
            <Text style={styles.price}>{product.price}€</Text>
            
            <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
                    <Text style={styles.quantityButton}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantity}</Text>
                <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                    <Text style={styles.quantityButton}>+</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Ajouter</Text>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        padding: 24,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 12,
        marginBottom: 16,
        resizeMode: 'cover',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    quantityButton: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    quantity: {
        fontSize: 18,
        fontWeight: '500',
    },
    addButton: {
        backgroundColor: 'black',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 100,
    },
    addButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    }
});

