import { useCallback, useRef, type JSX } from 'react';
import { Text, Button } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';

export default function ProductBottomSheet(): JSX.Element {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
      bottomSheetModalRef.current?.present();
    },
    []
  );
  
  const handleSheetChanges = useCallback((index: number) => {
      console.log('handleSheetChanges', index);
    },
    []
  );

  const renderBackdrop = useCallback((props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  return (
        <BottomSheetModalProvider>
          <Button
            onPress={handlePresentModalPress}
            title="Present Modal"
            color="black"
          />
          <BottomSheetModal
            ref={bottomSheetModalRef}
            onChange={handleSheetChanges}
            backdropComponent={renderBackdrop}
          >
            <BottomSheetView style={{alignItems: 'center'}}>
              <Text>Ceci est une Bottom Sheet</Text>
            </BottomSheetView>
          </BottomSheetModal>
        </BottomSheetModalProvider>
  );
};
