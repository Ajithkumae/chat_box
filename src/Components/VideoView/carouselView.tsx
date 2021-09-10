import React, { useRef } from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import InViewPort from '@coffeebeanslabs/react-native-inviewport';
import Video from 'react-native-video';
import { Pagination } from 'react-native-snap-carousel';
import { COLORS } from '../../Utils/theme';

/**
 *
 * @param {prop} dataItem - pass the array list of video reels
 * @param {prop} paginationLength - length of the Carousel for indication
 * @returns
 */

const CarouselView = (props: any) => {
  const { dataItem, paginationLength } = props;
  const videoReel = useRef([]);

  const playVideo = (isVisible: boolean, data: any) => {
    isVisible
      ? videoReel.current[data.item.id].setNativeProps({
          paused: false,
        })
      : videoReel.current[data.item.id].setNativeProps({
          paused: true,
        });
  };
  const renderItem = (data: any) => {
    return (
      <View style={styles.videoContainer}>
        <InViewPort
          onChange={(isVisible: any) => playVideo(isVisible, data)}
          style={styles.inViewPortContainer}>
          <Video
            source={{
              uri: data.item.videolink,
            }}
            ref={(ref: any) => {
              videoReel.current[data.item.id] = ref;
            }}
            controls={true}
            style={styles.imageView}
          />
        </InViewPort>
        <Pagination
          dotsLength={paginationLength}
          activeDotIndex={data.index}
          containerStyle={styles.paginationStyle}
          dotColor={COLORS.blue}
          dotStyle={styles.paginationDots}
          inactiveDotColor={COLORS.black}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={dataItem}
        pagingEnabled
        horizontal
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
export default CarouselView;
