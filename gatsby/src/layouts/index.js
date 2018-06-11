import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Animated, View, ScrollView, Text, StyleSheet } from 'react-native';
import iconFont from '../fonts/FontAwesome.ttf';
import tensiqFont from '../fonts/Tensiq.ttf';
import openSansNormal from '../fonts/OpenSans-Regular.ttf';
import openSansBold from '../fonts/OpenSans-Bold.ttf';
import favicon from '../images/favicon.png';
import Header from '../components/Header';

const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const styles = StyleSheet.create({
  scrollViewContent: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    alignSelf: 'center',
  },
});

class TemplateWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
      opacity: 0,
    };
  }
  onScroll = e => {
    const {
      nativeEvent: {
        contentOffset: { y: scrollYParam },
      },
    } = e;
    const value = Math.min(
      Math.max(0, 1 / HEADER_SCROLL_DISTANCE / 4 * scrollYParam),
      1,
    );
    this.setState(prevState => ({
      ...prevState,
      opacity: value,
      height: value,
    }));
  };
  render() {
    // const headerHeight =
    //   HEADER_MAX_HEIGHT - HEADER_SCROLL_DISTANCE * this.state.height;
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });
    const { children } = this.props;
    return (
      <View>
        <View
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
          }}
        >
          <ScrollView
            contentContainerStyle={styles.scrollViewContent}
            scrollEventThrottle={1}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
              { listener: this.onScroll },
            )}
          >
            {children()}
          </ScrollView>
        </View>
        <Header height={headerHeight} opacity={this.state.opacity} />
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <style type="text/css">
            {`
                  @font-face {
                    font-family: FontAwesome;
                    src: url(${iconFont});
                  }
                  @font-face {
                    font-family: Tensiq;
                    src: url(${tensiqFont});
                  }
                  @font-face {
                    font-family: OpenSans;
                    src: url(${openSansNormal}); 
                    font-weight: 400;
                  }
                  @font-face {
                    font-family: OpenSans;
                    src: url(${openSansBold}); 
                    font-weight: 700;
                  }
                `}
          </style>
          <link rel="shortcut icon" type="image/png" href={favicon} />
        </Helmet>
      </View>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
