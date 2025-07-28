import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Image, Text, View } from "tamagui";

interface Story {
  id: string;
  username: string;
  avatar: string;
  hasStory: boolean;
  isLive?: boolean;
  isViewed?: boolean;
}

const MOCK_STORIES: Story[] = [
  {
    id: "0",
    username: "Your Story",
    avatar: "https://picsum.photos/100/100?random=0",
    hasStory: false,
  },
  {
    id: "1",
    username: "karennne",
    avatar: "https://picsum.photos/100/100?random=1",
    hasStory: true,
    isLive: true,
    isViewed: false,
  },
  {
    id: "2",
    username: "zackjohn",
    avatar: "https://picsum.photos/100/100?random=2",
    hasStory: true,
    isViewed: false,
  },
  {
    id: "3",
    username: "kieron_d",
    avatar: "https://picsum.photos/100/100?random=3",
    hasStory: true,
    isViewed: false,
  },
  {
    id: "4",
    username: "craig_j",
    avatar: "https://picsum.photos/100/100?random=4",
    hasStory: true,
    isViewed: true,
  },
  {
    id: "5",
    username: "sarah_m",
    avatar: "https://picsum.photos/100/100?random=5",
    hasStory: true,
    isViewed: false,
  },
];

interface StoryItemProps {
  story: Story;
  onPress: (story: Story) => void;
}

function StoryItem({ story, onPress }: StoryItemProps) {
  const scale = useSharedValue(1);
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }, { rotate: `${rotation.value}deg` }],
    };
  });

  const handlePressIn = () => {
    scale.value = withSpring(0.95);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  const handlePress = () => {
    rotation.value = withTiming(rotation.value + 360, { duration: 800 });
    onPress(story);
  };

  const GradientBorder = ({ children }: { children: React.ReactNode }) => {
    if (!story.hasStory) {
      return (
        <View
          width={70}
          height={70}
          borderRadius={35}
          backgroundColor="$gray8"
          alignItems="center"
          justifyContent="center"
        >
          {children}
        </View>
      );
    }

    if (story.isViewed) {
      return (
        <View
          width={70}
          height={70}
          borderRadius={35}
          backgroundColor="#8E8E8E"
          alignItems="center"
          justifyContent="center"
        >
          {children}
        </View>
      );
    }

    return (
      <LinearGradient
        colors={["#7700C3", "#C60188", "#E20337"]}
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          alignItems: "center",
          justifyContent: "center",
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {children}
      </LinearGradient>
    );
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View
        style={[{ alignItems: "center", marginHorizontal: 8 }, animatedStyle]}
      >
        <GradientBorder>
          <View
            width={66}
            height={66}
            borderRadius={33}
            backgroundColor="$background"
            padding="$0.5"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              source={{ uri: story.avatar }}
              width={60}
              height={60}
              borderRadius={30}
            />
          </View>
        </GradientBorder>

        {story.isLive && (
          <View
            position="absolute"
            bottom={20}
            backgroundColor="$red10"
            paddingHorizontal="$1.5"
            paddingVertical="$0.5"
            borderRadius="$2"
            borderWidth={2}
            borderColor="$background"
          >
            <Text
              color="$textPrimary"
              fontSize={10}
              fontWeight="700"
              textTransform="uppercase"
            >
              Live
            </Text>
          </View>
        )}

        <Text
          color="$textPrimary"
          fontSize={12}
          marginTop="$1"
          maxWidth={70}
          textAlign="center"
          numberOfLines={1}
        >
          {story.username}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
}

interface StoriesListProps {
  stories?: Story[];
  onStoryPress?: (story: Story) => void;
}

export function StoriesList({
  stories = MOCK_STORIES,
  onStoryPress = () => {},
}: StoriesListProps) {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {stories.map((story) => (
          <StoryItem key={story.id} story={story} onPress={onStoryPress} />
        ))}
      </ScrollView>
    </View>
  );
}
