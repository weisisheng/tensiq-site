import React from 'react';
import Link from '../components/RippleLink';
import { navigateTo } from 'gatsby-link';
import { Platform, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Box from '../components/Grid/Box';
import { ThemeContext } from '../components/ThemeProvider';
import Img from 'gatsby-image';
import { Header1, Header2 } from '../components/PageHeader';
import { TextNormal, TextStrong } from '../components/Text';
import ThemeProvider from 'react-native-material-ui/src/styles/ThemeProvider.react';
import Card from 'react-native-material-ui/src/Card';
import { createIconSet } from 'react-native-vector-icons';

const glyphMap = {
  rocket: parseInt('f135', 16),
  users: parseInt('f0c0', 16),
  heartbeat: parseInt('f21e', 16),
  toolbox: parseInt('f552', 16),
  'arrow-circle-right': parseInt('f0a9', 16),
  heart: parseInt('f004', 16),
};

const brandGlyphMap = {
  react: parseInt('f41b', 16),
  github: parseInt('f09b', 16),
  twitter: parseInt('f099', 16),
};

const customGlyphMap = {
  tensiq: 't',
  netlify: 'n',
  gatsby: 'g',
};

const Icon = createIconSet(glyphMap, 'FontAwesome');
const BrandIcon = createIconSet(brandGlyphMap, 'FontAwesomeBrands');
const CustomIcon = createIconSet(customGlyphMap, 'Tensiq');

const tensiqCardIcon = theme => (
  <CustomIcon name="tensiq" style={theme.style({ element: 'cardWrapIcon' })} />
);

const tensiqIcon = () => <CustomIcon name="tensiq" />;

const netlifyIcon = () => <CustomIcon name="netlify" />;

const gatsbyIcon = () => <CustomIcon name="gatsby" />;

const crewIcon = (theme, type = 'normal') => (
  <Icon name="users" style={theme.style({ element: 'headerIcon', type })} />
);

const missionIcon = (theme, type = 'normal') => (
  <Icon name="heartbeat" style={theme.style({ element: 'headerIcon', type })} />
);

const toolsIcon = (theme, type = 'normal') => (
  <Icon name="toolbox" style={theme.style({ element: 'headerIcon', type })} />
);

const goIcon = theme => (
  <Icon name="arrow-circle-right" style={theme.style({ element: 'goIcon' })} />
);

const heartIcon = () => <Icon name="heart" />;
const reactIcon = () => <BrandIcon name="react" />;
const githubIcon = () => <BrandIcon name="github" />;
const twitterIcon = () => <BrandIcon name="twitter" />;

class AboutPage extends React.Component {
  render() {
    const { data } = this.props;
    // console.log(data);
    return (
      <View>
        <ThemeProvider uiTheme={{}}>
          <ThemeContext.Consumer>
            {theme => {
              return (
                <View>
                  <Text id="mission" />
                  <LinearGradient
                    {...theme.gradient('darkBlock1')}
                    style={theme.style({
                      element: 'contentBlockCol',
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
                          style={theme.style({ element: 'headerIconLeft' })}
                          {...theme.props.headerIconLeft}
                        >
                          {missionIcon(theme)}
                        </Box>
                        <View style={{ flex: 1 }}>
                          <Text
                            style={theme.style({
                              element: 'headerTitleText',
                            })}
                          >
                            Mission
                          </Text>
                          <Box
                            style={theme.style({ element: 'headerIconCenter' })}
                            {...theme.props.headerIconCenter}
                          >
                            {missionIcon(theme)}
                          </Box>
                          <Text
                            style={theme.style({
                              element: 'headerText',
                            })}
                          >
                            All things in life start with why. Feel what powers
                            our minds and thus fuels this company.
                          </Text>
                        </View>
                      </Box>
                    </View>
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
                        <Card
                          style={{
                            container: theme.rawStyles.cardContainer.normal,
                          }}
                        >
                          <LinearGradient
                            style={theme.style({
                              element: 'cardGradient',
                              type: 'withIcon',
                            })}
                            {...theme.gradient('lightBlock')}
                            pointerEvents="none"
                          >
                            <View
                              style={theme.style({
                                element: 'cardTitle',
                                type: 'withIcon',
                              })}
                              pointerEvents="none"
                            >
                              <Header1 theme={theme}>Tensiq</Header1>
                              <View
                                style={theme.style({ element: 'socialBlock' })}
                              >
                                <Text
                                  style={theme.style({
                                    element: 'socialBlockEntry',
                                    type: 'dark',
                                  })}
                                >
                                  {twitterIcon()}
                                  <TextNormal
                                    theme={theme}
                                    element="socialBlockEntryText"
                                  >
                                    tensiq
                                  </TextNormal>
                                </Text>
                              </View>
                            </View>
                            <View
                              style={theme.style({
                                element: 'cardTextBody',
                                type: 'withIcon',
                              })}
                              pointerEvents="none"
                            >
                              <TextNormal theme={theme}>
                                Tensiq is an estonian based web and mobile app
                                development company specialized in building
                                custom solutions for innovative projects. We
                                focus on technology that let us build fast,
                                secure, reliable and maintainable products while
                                targeting most of the commonly used devices.
                                Backed by 12 years of experience in the IT
                                industry, we really know what we are doing and
                                how to reach the target. We are really good at
                                what we do and love to build the next big thing.
                              </TextNormal>
                            </View>
                          </LinearGradient>
                          <Text id="crew" />
                        </Card>
                      </Box>
                      <View
                        style={theme.style({ element: 'cardIconContainer' })}
                      >
                        <View
                          style={{
                            position: 'absolute',
                            top: 36,
                            height: '99%',
                            width: '99%',
                          }}
                        >
                          <Img
                            sizes={
                              data.imgTensiqIconShadow.childImageSharp.sizes
                            }
                          />
                        </View>
                        {tensiqCardIcon(theme)}
                        <View
                          style={{
                            position: 'absolute',
                            top: 35,
                            left: -2,
                            width: '100%',
                          }}
                        >
                          <Img
                            sizes={data.imgTensiqIcon.childImageSharp.sizes}
                          />
                        </View>
                      </View>
                    </View>
                  </LinearGradient>
                  <LinearGradient
                    {...theme.gradient('lightBlock')}
                    style={theme.style({
                      element: 'contentBlockCol',
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
                          style={theme.style({ element: 'headerIconLeft' })}
                          {...theme.props.headerIconLeft}
                        >
                          {crewIcon(theme, 'dark')}
                        </Box>
                        <View style={{ flex: 1 }}>
                          <Text
                            style={theme.style({
                              element: 'headerTitleText',
                              type: 'dark',
                            })}
                          >
                            Crew
                          </Text>
                          <Box
                            style={theme.style({ element: 'headerIconCenter' })}
                            {...theme.props.headerIconCenter}
                          >
                            {crewIcon(theme, 'dark')}
                          </Box>
                          <Text
                            style={theme.style({
                              element: 'headerText',
                              type: 'dark',
                            })}
                          >
                            Great people create great products. This is our crew
                            to fly this rocket-ship...
                          </Text>
                          <Text id="tools" />
                        </View>
                      </Box>
                    </View>
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
                        <Card
                          style={{
                            container: theme.rawStyles.cardContainer.normal,
                          }}
                        >
                          <LinearGradient
                            style={theme.style({
                              element: 'cardGradient',
                              type: 'withIcon',
                            })}
                            {...theme.gradient('blackBlock')}
                            pointerEvents="none"
                          >
                            <View
                              style={theme.style({
                                element: 'cardTitle',
                                type: 'withIcon',
                              })}
                              pointerEvents="none"
                            >
                              <Header1 light="true" theme={theme}>
                                Jens
                              </Header1>
                              <View
                                style={theme.style({ element: 'socialBlock' })}
                              >
                                <Text
                                  style={theme.style({
                                    element: 'socialBlockEntry',
                                  })}
                                >
                                  {twitterIcon()}
                                  <TextNormal
                                    theme={theme}
                                    element="socialBlockEntryText"
                                  >
                                    arrkiin
                                  </TextNormal>
                                </Text>
                                <Text
                                  style={theme.style({
                                    element: 'socialBlockEntry',
                                  })}
                                >
                                  {githubIcon()}
                                  <TextNormal
                                    theme={theme}
                                    element="socialBlockEntryText"
                                  >
                                    arrkiin
                                  </TextNormal>
                                </Text>
                              </View>
                            </View>
                            <View
                              style={theme.style({
                                element: 'cardTextBody',
                                type: 'withIcon',
                              })}
                              pointerEvents="none"
                            >
                              <Text style={{ color: theme.color('lightText') }}>
                                <TextNormal theme={theme}>
                                  I am an academically educated and awarded IT
                                  specialist working in diverse IT projects for
                                  almost two decades now. I believe in great
                                  people forming even better teams by fluent
                                  collaboration and the force of constant
                                  improvement. As an highly motivated engineer I
                                  provide a great ability to integrate into
                                  existing teams while keeping the courage to
                                  offer leadership. I love working with
                                  teammates and invest all of my creativity,
                                  experience and skills to deliver smart and
                                  elegant solutions.
                                </TextNormal>
                              </Text>
                            </View>
                          </LinearGradient>
                        </Card>
                      </Box>
                      <View
                        style={theme.style({ element: 'cardIconContainer' })}
                      >
                        <View
                          style={{
                            position: 'absolute',
                            top: 34,
                            width: '100%',
                          }}
                        >
                          <Img
                            sizes={
                              data.imgTensiqIconShadow.childImageSharp.sizes
                            }
                          />
                        </View>
                        {tensiqCardIcon(theme)}
                        <View
                          style={{
                            position: 'absolute',
                            top: 34,
                            width: '100%',
                          }}
                        >
                          <Img sizes={data.imgJensIcon.childImageSharp.sizes} />
                        </View>
                      </View>
                    </View>
                  </LinearGradient>
                  <LinearGradient
                    {...theme.gradient('darkBlock2')}
                    style={theme.style({
                      element: 'contentBlockCol',
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
                          style={theme.style({ element: 'headerIconLeft' })}
                          {...theme.props.headerIconLeft}
                        >
                          {toolsIcon(theme)}
                        </Box>
                        <View style={{ flex: 1 }}>
                          <Text
                            style={theme.style({
                              element: 'headerTitleText',
                            })}
                            id="tools"
                          >
                            Tools
                          </Text>
                          <Box
                            style={theme.style({ element: 'headerIconCenter' })}
                            {...theme.props.headerIconCenter}
                          >
                            {toolsIcon(theme)}
                          </Box>
                          <Text
                            style={theme.style({
                              element: 'headerText',
                            })}
                          >
                            Awesome products need great tools. We show you which
                            great products we love and use...
                          </Text>
                        </View>
                      </Box>
                    </View>
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
                        <Card
                          style={{
                            container: theme.rawStyles.cardContainer.normal,
                          }}
                        >
                          <LinearGradient
                            style={theme.style({
                              element: 'cardGradient',
                              type: 'withIcon',
                            })}
                            {...theme.gradient('lightBlock')}
                            pointerEvents="none"
                          >
                            <View
                              style={theme.style({
                                element: 'cardTitle',
                                type: 'withIcon',
                              })}
                              pointerEvents="none"
                            >
                              <Header1 theme={theme}>
                                Cross-Platform-Stack
                              </Header1>
                            </View>
                            <View
                              style={theme.style({
                                element: 'cardTextBody',
                                type: 'withIcon',
                              })}
                              pointerEvents="none"
                            >
                              <TextNormal theme={theme}>
                                We fell in love with the React ecosystem and use
                                all the proven libraries like redux and mobx. To
                                reach the goal of cross-platform we focus on
                                using React Native and React Native Web and
                                wisely select 3rd party libraries that support
                                this approach.
                              </TextNormal>
                            </View>
                          </LinearGradient>
                          <Text id="crew" />
                        </Card>
                      </Box>
                    </View>
                  </LinearGradient>
                  <View
                    style={[
                      {
                        paddingTop: theme.sp(3),
                        paddingBottom: theme.sp(7),
                        backgroundColor: theme.color('footnotes'),
                        alignItems: 'center',
                      },
                    ]}
                  >
                    <View
                      style={[
                        {
                          flexDirection: 'column',
                          alignItems: 'center',
                          paddingHorizontal: theme.sp(2),
                          paddingBottom: theme.sp(1),
                        },
                      ]}
                    >
                      <TextNormal theme={theme} element="footnoteText">
                        Copyright © 2018 {tensiqIcon(theme)} Tensiq OÜ.
                      </TextNormal>
                      <TextNormal theme={theme} element="footnoteText">
                        All rights reserved.
                      </TextNormal>
                      <TextNormal theme={theme} element="footnoteText">
                        Built with {heartIcon(theme)} in Tallinn, Estonia.
                      </TextNormal>
                      <TextNormal theme={theme} element="footnoteText">
                        Crafted with {gatsbyIcon(theme)} Gatsby.js and{' '}
                        {reactIcon(theme)} React Native Web.
                      </TextNormal>
                      <TextNormal theme={theme} element="footnoteText">
                        Organized on {githubIcon(theme)} Github and deployed on{' '}
                        {netlifyIcon(theme)} Netlify.
                      </TextNormal>
                    </View>
                  </View>
                </View>
              );
            }}
          </ThemeContext.Consumer>
        </ThemeProvider>
      </View>
    );
  }
}

export default AboutPage;

export const query = graphql`
  query AboutImageQuery {
    imgTensiqIconShadow: file(
      relativePath: { eq: "images/tensiq-icon-shadow.png" }
    ) {
      childImageSharp {
        sizes(maxWidth: 960) {
          ...GatsbyImageSharpSizes_withWebp_noBase64
        }
      }
    }
    imgTensiqIcon: file(
      relativePath: { eq: "images/tensiq-icon-with-shadow.png" }
    ) {
      childImageSharp {
        sizes(maxWidth: 960) {
          ...GatsbyImageSharpSizes_withWebp_noBase64
        }
      }
    }
    imgJensIcon: file(
      relativePath: { eq: "images/jens-icon-with-shadow.png" }
    ) {
      childImageSharp {
        sizes(maxWidth: 960) {
          ...GatsbyImageSharpSizes_withWebp_noBase64
        }
      }
    }
  }
`;
