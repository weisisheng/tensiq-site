import React from 'react';
import Link from '../RippleLink';
import PropTypes from 'prop-types';
import { Platform, Animated, View, Text, StyleSheet } from 'react-native';
import ThemeProvider from 'react-native-material-ui/src/styles/ThemeProvider.react';
import { ThemeContext } from '../ThemeProvider';
import Box from '../Grid/Box';

const uiTheme = {};

class Footer extends React.PureComponent {
  state = {
    fade: new Animated.Value(0),
  };
  componentDidMount() {
    Animated.timing(
      // Animate over time
      this.state.fade, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 1000, // Make it take a while
      },
    ).start();
  }
  render() {
    const { fade } = this.state;
    return (
      <ThemeContext.Consumer>
        {theme => (
          <ThemeProvider uiTheme={uiTheme}>
            <Animated.View style={{ opacity: fade }}>
              <Box
                style={theme.style({ element: 'footerOuterContainer' })}
                display={['flex', , 'none']}
              >
                <View style={theme.style({ element: 'footerColor' })} />
                <View style={theme.style({ element: 'footerInnerContainer' })}>
                  <View
                    style={{
                      flex: 1,
                      height: '100%',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                      flexDirection: 'row',
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        marginHorizontal: 2,
                      }}
                    >
                      <Link
                        to="/"
                        contentStyle={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Text
                          style={{
                            ...theme.fonts.normal,
                            fontSize: 16,
                            fontWeight: theme.fontweights.bold,
                            color: '#f5f5f5ff',
                            paddingHorizontal: theme.sp(1),
                            paddingVertical: theme.sp(2),
                          }}
                        >
                          Services
                        </Text>
                      </Link>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        marginHorizontal: 2,
                      }}
                    >
                      <Link
                        to="/about"
                        contentStyle={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Text
                          style={{
                            ...theme.fonts.normal,
                            fontSize: 16,
                            fontWeight: theme.fontweights.bold,
                            textAlign: 'center',
                            color: '#f5f5f5ff',
                            paddingHorizontal: theme.sp(1),
                            paddingVertical: theme.sp(2),
                          }}
                        >
                          About
                        </Text>
                      </Link>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        marginHorizontal: 2,
                      }}
                    >
                      <Link
                        to="/contact"
                        contentStyle={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Text
                          style={{
                            ...theme.fonts.normal,
                            fontSize: 16,
                            fontWeight: theme.fontweights.bold,
                            color: '#f5f5f5ff',
                            paddingHorizontal: theme.sp(1),
                            paddingVertical: theme.sp(2),
                          }}
                        >
                          Contact
                        </Text>
                      </Link>
                    </View>
                  </View>
                </View>
              </Box>
            </Animated.View>
          </ThemeProvider>
        )}
      </ThemeContext.Consumer>
    );
  }
}

Footer.propTypes = {
  height: PropTypes.object,
  opacity: PropTypes.number,
};

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  barColor: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#3a3a3aff',
    opacity: 1,
  },
  bar: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: 1200,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    ...Platform.select({
      default: {
        paddingBottom: 2,
      },
      web: {
        paddingBottom: 0,
      },
    }),
  },
  title: {
    flex: 1,
    backgroundColor: 'transparent',
    color: '#f5f5f5ff',
    fontSize: 32,
    fontWeight: 'bold',
    elevation: 8,
  },
  menu: {
    backgroundColor: 'transparent',
    color: '#f5f5f5ff',
    fontSize: 20,
    paddingTop: 4,
    paddingHorizontal: 10,
    elevation: 8,
  },
  logo: {
    fontFamily: 'Tensiq',
    color: '#f5f5f5ff',
    fontSize: 48,
    elevation: 8,
  },
});

export default Footer;