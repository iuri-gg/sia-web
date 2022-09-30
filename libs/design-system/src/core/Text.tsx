import { styled } from '../config/theme'

export const Text = styled('span', {
  boxSizing: 'border-box',
  color: '$textContrast',
  display: 'inline-block',
  fontFamily: '$sans',
  lineHeight: '1',
  // avoid clipping decenders when overflow is hidden
  padding: '0.14em 0',

  variants: {
    font: {
      mono: {
        fontFamily: '$mono',
      },
      sans: {
        fontFamily: '$sans',
      },
    },
    color: {
      verySubtle: {
        color: '$textVerySubtle',
      },
      subtle: {
        color: '$textSubtle',
      },
      contrast: {
        color: '$textContrast',
      },
      lo: {
        color: '$loContrast',
      },
      accent: {
        color: '$accent11',
      },
    },
    weight: {
      extrabold: {
        fontWeight: '700',
      },
      bold: {
        fontWeight: '600',
      },
      semibold: {
        fontWeight: '500',
      },
      regular: {
        fontWeight: '400',
      },
    },
    size: {
      '10': {
        fontSize: '$10',
      },
      '12': {
        fontSize: '$12',
      },
      '14': {
        fontSize: '$14',
      },
      '16': {
        fontSize: '$16',
      },
      '18': {
        fontSize: '$18',
      },
      '20': {
        fontSize: '$20',
      },
      '24': {
        fontSize: '$24',
      },
      '32': {
        fontSize: '$32',
      },
      '40': {
        fontSize: '$40',
      },
      '64': {
        fontSize: '$64',
      },
    },
    noWrap: {
      true: {
        whiteSpace: 'nowrap',
      },
    },
    ellipsis: {
      true: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
  },

  defaultVariants: {
    weight: 'regular',
    font: 'sans',
    color: 'contrast',
    size: '14',
  },
})
