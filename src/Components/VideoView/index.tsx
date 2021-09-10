import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';
import CarouselView from './carouselView';

/**
 *
 * @param {prop} videoData - pass the array list of video reels
 * @returns
 */

const VideoView = (props: any) => {
  const { videoData } = props;

  return (
    <View style={styles.container}>
      <ScrollView>
        {videoData.map((item: any, index: any) => {
          return (
            <View key={index}>
              <CarouselView
                dataItem={item.data}
                paginationLength={item.data.length}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default VideoView;
