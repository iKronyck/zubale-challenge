import { PropsWithChildren } from "react";
import { View } from "tamagui";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <View w="100%" h="100%" bg="$background">
      {children}
    </View>
  );
}
