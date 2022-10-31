import { styled } from '../../styles/stitches.config'
import { Text } from '../Text'

export const MultiStepContainer = styled('div', {})

export const Label = styled(Text, {
  color: '$gray200',

  defaultVariants: {
    size: '$xs',
  },
})

export const Steps = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  gap: '$2',
  marginTop: '$1',
})

export const Step = styled('div', {
  backgroundColor: '$gray600',
  borderRadius: '$px',
  height: '$1',

  variants: {
    active: {
      true: {
        backgroundColor: '$gray100',
      },
    },
  },
})
