import React from 'react'
import { StyleSheet } from 'react-native'
import Color from 'color'

export { default as colors } from './colors'
export { default as elevations } from './elevation'

export const radiis = [0, 2, 4]

export const fontweights = {
  regular: '400',
  bold: '700',
}

export const fonts = {
  normal: {},
  mono: {},
  // fontFamily: 'Roboto' }
}

// 1em = 16px
const EM = 16
// 352, 400, 640, 832, 1024
export const breakpoints = [22 * EM, 25 * EM, 40 * EM, 52 * EM, 64 * EM]

export const bp = value => breakpoints[Math.min(value, breakpoints.length)]

export const lineheights = [1, 1.35, 1.5, 1.75, 2]

export const lh = value => lineheights[Math.min(value, lineheights.length)] * EM

const GS = 8
export const spaces = [
  0,
  1 / 2 * GS,
  1 * GS,
  2 * GS,
  3 * GS,
  4 * GS,
  5 * GS,
  6 * GS,
  7 * GS,
  8 * GS,
  9 * GS,
  10 * GS,
  11 * GS,
  12 * GS,
  13 * GS,
  14 * GS,
  15 * GS,
  16 * GS,
]
export const sp = value => spaces[value]

const FI = 2
export const fontsizes = [
  EM - 2 * FI,
  EM - 1 * FI,
  EM,
  EM + 2 * FI,
  EM + 4 * FI,
  EM + 3 * FI,
  EM + 4 * FI,
  EM + 5 * FI,
  EM + 6 * FI,
]
export const fs = value => fontsizes[Math.min(value, fontsizes.length)]

export const header = {
  1: StyleSheet.create({
    0: {
      ...fonts.normal,
      marginTop: 6,
      fontWeight: fontweights.bold,
      marginTop: sp(3),
      fontSize: fs(4),
    },
  }),
  2: StyleSheet.create({
    0: {
      ...fonts.normal,
      marginTop: 6,
      fontWeight: fontweights.bold,
      marginTop: sp(3),
      fontSize: fs(2),
    },
  }),
  3: StyleSheet.create({
    0: {
      ...fonts.normal,
      marginTop: 6,
      fontWeight: fontweights.bold,
      marginTop: sp(3),
      fontSize: fs(1),
    },
  }),
}

export const list = {
  normal: StyleSheet.create({
    0: { flex: 1 },
  }),
}

export const listItem = {
  normal: StyleSheet.create({
    0: { flex: 1 },
  }),
}

export const listParagraph = {
  normal: StyleSheet.create({
    0: { flex: 1, flexDirection: 'row', marginTop: sp(1) },
    1: { flex: 1, flexDirection: 'row', marginTop: sp(2) },
    2: { flex: 1, flexDirection: 'row', marginTop: sp(3) },
    3: { flex: 1, flexDirection: 'row', marginTop: sp(4) },
    4: { flex: 1, flexDirection: 'row', marginTop: sp(5) },
  }),
  text: StyleSheet.create({
    0: { ...fonts.normal, marginTop: sp(0) },
  }),
}

export const text = {
  normal: StyleSheet.create({
    0: { ...fonts.normal, fontSize: 14, paddingVertical: 4, lineHeight: lh(1) },
    1: { ...fonts.normal, fontSize: 14, paddingVertical: 4, lineHeight: lh(2) },
    2: { ...fonts.normal, fontSize: 14, paddingVertical: 4, lineHeight: lh(3) },
    3: { ...fonts.normal, fontSize: 14, paddingVertical: 4, lineHeight: lh(4) },
    4: { ...fonts.normal, fontSize: 14, paddingVertical: 4, lineHeight: lh(5) },
  }),
  em: StyleSheet.create({
    0: {
      ...fonts.normal,
      fontSize: 14,
      fontStyle: 'italic',
      paddingVertical: 4,
      lineHeight: lh(1),
    },
  }),
  strong: StyleSheet.create({
    0: {
      ...fonts.normal,
      fontSize: 14,
      fontWeight: fontweights.bold,
      paddingVertical: 4,
      lineHeight: lh(1),
    },
  }),
}

export const icon = {
  normal: StyleSheet.create({
    0: { fontSize: 18, color: 'purple' },
    1: { fontSize: 22, color: 'red' },
    2: { fontSize: 24, color: 'blue' },
  }),
}

export const paragraph = {
  normal: StyleSheet.create({
    0: { flex: 1, flexDirection: 'row', marginTop: sp(2) },
  }),
  text: StyleSheet.create({
    0: { ...fonts.normal, marginTop: sp(2) },
  }),
}

export const table = {
  normal: StyleSheet.create({
    0: {
      marginVertical: sp(2),
      alignSelf: 'center',
      width: '80%',
      borderWidth: 1,
      borderColor: '#000000',
      borderRadius: 5,
      overflow: 'hidden',
    },
  }),
  info: StyleSheet.create({
    0: {
      marginTop: sp(3),
      marginVertical: sp(2),
      alignSelf: 'center',
      width: '100%',
      borderTopWidth: 2,
      borderTopColor: '#7743CE',
      borderBottomWidth: 1,
      borderBottomColor: '#7743CE',
      overflow: 'hidden',
    },
    3: {
      marginTop: sp(3),
      marginVertical: sp(2),
      alignSelf: 'center',
      width: '100%',
      borderTopWidth: 2,
      borderTopColor: '#7743CE',
      borderBottomWidth: 1,
      borderBottomColor: '#7743CE',
      overflow: 'hidden',
    },
  }),
}

export const tableHeader = {
  normal: StyleSheet.create({
    0: {
      flex: 1,
    },
  }),
  info: StyleSheet.create({
    0: {
      flex: 1,
    },
  }),
}

export const tableHeaderCell = {
  normal: StyleSheet.create({
    0: {
      flex: 1,
      paddingVertical: sp(1),
      paddingHorizontal: sp(2),
      backgroundColor: 'green',
    },
  }),
  info: StyleSheet.create({
    0: {
      flex: 1,
      paddingVertical: sp(1),
      paddingHorizontal: sp(2),
      backgroundColor: 'white',
    },
  }),
}

export const tableHeaderText = {
  normal: StyleSheet.create({
    0: {
      ...fonts.normal,
      fontWeight: fontweights.bold,
    },
  }),
}

export const tableBodyText = {
  normal: StyleSheet.create({
    0: {
      ...fonts.normal,
      fontWeight: 'normal',
    },
  }),
}

export const tableRow = {
  normal: StyleSheet.create({
    0: {
      //    borderBottomWidth: 1,
      //    borderColor: '#000000',
      flexDirection: 'row',
    },
  }),
  info: props => {
    const { rowindex, rowcount } = props
    const row = rowindex + 1
    if (row && rowcount) {
      return StyleSheet.create({
        0: {
          flexDirection: 'row',
          backgroundColor: Color('#7743CE').lighten(row / rowcount * 0.7),
        },
      })
    }
    return tableRow.normal
  },
}

export const tableBody = {
  normal: StyleSheet.create({
    0: {},
  }),
}

export const tableBodyCell = {
  normal: StyleSheet.create({
    0: {
      flex: 1,
      paddingVertical: sp(1),
      paddingHorizontal: sp(2),
    },
  }),
}

export const ytTitle = {
  normal: StyleSheet.create({
    0: {
      ...fonts.normal,
      paddingTop: 5,
      fontWeight: fontweights.bold,
      textAlign: 'center',
    },
  }),
}

export const ytOuterContainer = {
  normal: StyleSheet.create({
    0: {
      flex: 1,
      marginVertical: 10,
      flexDirection: 'column',
      alignItems: 'center',
    },
  }),
}

export const ytInnerContainer = {
  normal: StyleSheet.create({
    0: {
      width: '80%',
    },
  }),
}
// 56.25%
export const aspectRatio = {
  normal: StyleSheet.create({
    0: {
      flex: 1,
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '28.13%',
      paddingBottom: '28.13%'
    },
  }),
}

const theme = {
  breakpoints,
  bp,
  spaces,
  sp,
  lineheights,
  lh,
  fontsizes,
  fs,
}

export default theme