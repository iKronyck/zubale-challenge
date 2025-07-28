import { Image, View } from "tamagui";

export function PostImage() {
  return (
    <View>
      <Image
        source={{
          uri: "https://ciudadcaborojo.com/wp-content/uploads/2023/05/Frame-278-min.jpg",
        }}
        w="100%"
        h={375}
      />
    </View>
  );
}
