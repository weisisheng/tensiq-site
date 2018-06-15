import React from 'react';
import Link from '../components/RippleLink';
import { Platform, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Box from '../components/Grid/Box';
import { ThemeContext } from '../components/ThemeProvider';
import Img from 'gatsby-image';
import { Header1, Header2 } from '../components/PageHeader';
import { TextNormal, TextStrong } from '../components/Text';

import { createIconSet } from 'react-native-vector-icons';
const glyphMap = { rocket: parseInt('f135', 16) };
const Icon = createIconSet(glyphMap, 'FontAwesome');

const rocketIcon = theme => (
  <Icon name="rocket" style={theme.style({ element: 'teaserIcon' })} />
);

const styles = StyleSheet.create({
  block: {
    width: '100%',
    paddingVertical: 75,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  blockContent: {
    width: '100%',
    maxWidth: 960,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#f5f5f5ff',
    paddingVertical: 4,
  },
  text2: {
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#303030ff',
    paddingVertical: 4,
  },
  text3: {
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#102144ff',
  },
  text4: {
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#f5f5f5ff',
  },
  linearGradient: {
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 2,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
});

const shadow = Platform.select({
  default: {
    shadowColor: '#00000088',
    shadowRadius: 30,
  },
  android: {
    elevation: 6,
  },
});

class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <View>
        <ThemeContext.Consumer>
          {theme => {
            return (
              <View>
                <LinearGradient
                  {...theme.gradient('darkBlock1')}
                  style={theme.style({
                    element: 'contentBlock',
                    type: 'first',
                  })}
                >
                  <View
                    style={theme.style({
                      element: 'contentBlockOuterContainer',
                    })}
                  >
                    <Box
                      style={theme.style({
                        element: 'contentBlockInnerContainer',
                      })}
                    >
                      <Box
                        style={{
                          paddingTop: theme.sp(1),
                          marginRight: theme.sp(4),
                        }}
                        {...theme.props.rocketIconLeft}
                      >
                        {rocketIcon(theme)}
                      </Box>
                      <View style={{ flex: 1 }}>
                        <Text
                          style={theme.style({
                            element: 'teaserTitleText',
                          })}
                        >
                          Let's build awesome things together...
                        </Text>
                        <Box
                          style={{
                            marginVertical: theme.sp(3),
                            alignItems: 'center',
                          }}
                          {...theme.props.rocketIconCenter}
                        >
                          {rocketIcon(theme)}
                        </Box>
                        <Text
                          style={theme.style({
                            element: 'teaserText',
                          })}
                        >
                          We master the bridge between cutting-edge technology
                          and secure, resilient, performant solutions.
                        </Text>
                        <View
                          style={theme.style({
                            element: 'teaserButtonContainer',
                          })}
                        >
                          <Link
                            to="/"
                            style={{ flex: 1 }}
                            contentStyle={theme.style({
                              element: 'teaserButtonContent',
                            })}
                            rippleColor={theme.color('rippleTeaserButton')}
                          >
                            <LinearGradient
                              {...theme.gradient('lightBlock')}
                              style={{
                                width: '100%',
                                height: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                            >
                              <Text
                                style={theme.style({
                                  element: 'teaserButtonText',
                                })}
                              >
                                Get In Touch
                              </Text>
                            </LinearGradient>
                          </Link>
                        </View>
                      </View>
                    </Box>
                  </View>
                </LinearGradient>
                <LinearGradient
                  {...theme.gradient('lightBlock')}
                  style={[theme.style({ element: 'contentBlock' })]}
                >
                  <View
                    style={theme.style({
                      element: 'contentBlockOuterContainer',
                    })}
                  >
                    <View
                      style={[
                        theme.style({
                          element: 'contentBlockInnerContainer',
                        }),
                        { flexDirection: 'column' },
                      ]}
                    >
                      <Header1 theme={theme}>Services</Header1>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                          justifyContent: 'center',
                        }}
                      >
                        <Box
                          style={theme.style({ element: 'contentColumn3' })}
                          {...theme.props.contentColumn3}
                        >
                          <View
                            style={theme.style({
                              element: 'contentColumnTitle',
                            })}
                          >
                            <Header2 theme={theme}>
                              Modern Mobile & Web Apps
                            </Header2>
                          </View>
                          <Img
                            sizes={
                              data.imgModernMobileWebApps.childImageSharp.sizes
                            }
                          />
                          <TextNormal theme={theme}>
                            Responsive mobile-first native and Progressive Web
                            Apps with high quality UI components and cloud
                            service integration like{' '}
                            <TextStrong theme={theme}>Firebase</TextStrong>{' '}
                            powered by{' '}
                            <TextStrong theme={theme}>React Native</TextStrong>,{' '}
                            <TextStrong theme={theme}>
                              React Native Web
                            </TextStrong>,{' '}
                            <TextStrong theme={theme}>Gatsby.js </TextStrong>
                            and <TextStrong theme={theme}>Node.js</TextStrong>.
                          </TextNormal>
                        </Box>
                        <Box
                          style={theme.style({ element: 'contentColumn3' })}
                          {...theme.props.contentColumn3}
                        >
                          <View
                            style={theme.style({
                              element: 'contentColumnTitle',
                            })}
                          >
                            <Header2 theme={theme}>
                              Cross-Platform 2D Games
                            </Header2>
                          </View>
                          <Img
                            sizes={
                              data.imgCrossPlatform2dGames.childImageSharp.sizes
                            }
                          />
                          <Text style={theme.style({ element: 'text' })}>
                            Beautiful, cross-platform games designed in{' '}
                            <TextStrong theme={theme}>Inkscape</TextStrong> and{' '}
                            <TextStrong theme={theme}>Gimp</TextStrong> and
                            build with the highly extensible{' '}
                            <TextStrong theme={theme}>Godot Engine</TextStrong>{' '}
                            backed by an commercial friendly MIT licence.
                          </Text>
                        </Box>
                        <Box
                          style={[theme.style({ element: 'contentColumn3' })]}
                          {...theme.props.contentColumn3}
                        >
                          <View
                            style={theme.style({
                              element: 'contentColumnTitle',
                            })}
                          >
                            <Header2 theme={theme}>Data Analysis</Header2>
                          </View>
                          <Img
                            sizes={data.imgDataAnalysis.childImageSharp.sizes}
                          />
                          <Text style={theme.style({ element: 'text' })}>
                            Interactive analysis of data from cloud APIs,
                            Databases and common filetypes with{' '}
                            <TextStrong theme={theme}>Python</TextStrong>,{' '}
                            <TextStrong theme={theme}>Pandas</TextStrong>,
                            <TextStrong theme={theme}>
                              NumPy
                            </TextStrong> and{' '}
                            <TextStrong theme={theme}>SciPy</TextStrong> in{' '}
                            <TextStrong theme={theme}>
                              Jupyter notebooks
                            </TextStrong>{' '}
                            resulting in visual presentations and interaction
                            with ipywidget and Matplotlib.
                          </Text>
                        </Box>
                      </View>
                    </View>
                  </View>
                </LinearGradient>
                <LinearGradient
                  {...theme.gradient('darkBlock2')}
                  style={[styles.block, { paddingTop: 75 }]}
                >
                  <View style={styles.blockContent}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 20,
                        paddingRight: 10,
                      }}
                    >
                      <LinearGradient
                        start={{ x: 0.0, y: 0.25 }}
                        end={{ x: 1.0, y: 0.9 }}
                        colors={['#e8dae9ff', '#b0d6f9ff']}
                        style={{
                          ...shadow,
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: 100,
                          height: 50,
                          backgroundColor: '#f5f5f5ff',
                        }}
                      >
                        <Text style={styles.text3}>Git</Text>
                      </LinearGradient>
                      <LinearGradient
                        start={{ x: 0.0, y: 0.25 }}
                        end={{ x: 1.0, y: 0.9 }}
                        colors={['#e8dae9ff', '#b0d6f9ff']}
                        style={{
                          ...shadow,
                          marginTop: 10,
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: 100,
                          height: 50,
                          backgroundColor: '#f5f5f5ff',
                        }}
                      >
                        <Text style={styles.text3}>Project</Text>
                      </LinearGradient>
                      <LinearGradient
                        start={{ x: 0.0, y: 0.25 }}
                        end={{ x: 1.0, y: 0.9 }}
                        colors={['#e8dae9ff', '#b0d6f9ff']}
                        style={{
                          ...shadow,
                          marginTop: 10,
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: 100,
                          height: 50,
                          backgroundColor: '#f5f5f5ff',
                        }}
                      >
                        <Text style={styles.text3}>Target</Text>
                      </LinearGradient>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        paddingVertical: 20,
                        paddingLeft: 10,
                      }}
                    >
                      <Text style={styles.text}>
                        Open up src/App.js to start working on your app!
                      </Text>
                      <Text style={styles.text}>
                        Changes you make will automatically reload.
                      </Text>
                      <Text style={styles.text}>
                        Shake your phone to open the developer menu.
                      </Text>
                    </View>
                  </View>
                </LinearGradient>
                <LinearGradient
                  start={{ x: 0.0, y: 0.25 }}
                  end={{ x: 1.0, y: 0.9 }}
                  colors={['#e8dae9ff', '#b0d6f9ff']}
                  style={styles.block}
                >
                  <View style={styles.blockContent}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        paddingVertical: 20,
                        paddingRight: 10,
                      }}
                    >
                      <Text style={styles.text2}>
                        Open up src/App.js to start working on your app!
                      </Text>
                      <Text style={styles.text2}>
                        Changes you make will automatically reload.
                      </Text>
                      <Text style={styles.text2}>
                        Shake your phone to open the developer menu.
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 20,
                        paddingRight: 10,
                      }}
                    >
                      <LinearGradient
                        start={{ x: 0.25, y: 0.0 }}
                        end={{ x: 0.5, y: 1.0 }}
                        colors={['#7c7c7cff', '#2b2b2bff']}
                        style={{
                          ...shadow,
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: 100,
                          height: 50,
                          backgroundColor: '#3a3a3aff',
                        }}
                      >
                        <Text style={styles.text4}>Git</Text>
                      </LinearGradient>
                      <LinearGradient
                        start={{ x: 0.25, y: 0.0 }}
                        end={{ x: 0.5, y: 1.0 }}
                        colors={['#7c7c7cff', '#2b2b2bff']}
                        style={{
                          ...shadow,
                          marginTop: 10,
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: 100,
                          height: 50,
                          backgroundColor: '#3a3a3aff',
                        }}
                      >
                        <Text style={styles.text4}>Project</Text>
                      </LinearGradient>
                      <LinearGradient
                        start={{ x: 0.25, y: 0.0 }}
                        end={{ x: 0.5, y: 1.0 }}
                        colors={['#7c7c7cff', '#2b2b2bff']}
                        style={{
                          ...shadow,
                          marginTop: 10,
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: 100,
                          height: 50,
                          backgroundColor: '#3a3a3aff',
                        }}
                      >
                        <Text style={styles.text4}>Target</Text>
                      </LinearGradient>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            );
          }}
        </ThemeContext.Consumer>
      </View>
    );
  }
}

export default IndexPage;

export const query = graphql`
  query GatsbyImageSampleQuery {
    imgModernMobileWebApps: file(
      relativePath: { eq: "images/modern-mobile-web-apps.png" }
    ) {
      childImageSharp {
        sizes(maxWidth: 960) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    imgCrossPlatform2dGames: file(
      relativePath: { eq: "images/cross-platform-2d-games.png" }
    ) {
      childImageSharp {
        sizes(maxWidth: 960) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    imgDataAnalysis: file(relativePath: { eq: "images/data-analysis.png" }) {
      childImageSharp {
        sizes(maxWidth: 960) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`;
