import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles/stitches.config'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  cursor: 'pointer',
  fontFamily: '$default',
  fontWeight: '$medium',
  minWidth: 120,
  padding: '0 $4',
  textAlign: 'center',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  svg: {
    height: '$4',
    width: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        background: '$ignite500',
        color: '$white',

        '&:not(:disabled):hover': {
          background: '$ignite300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      secundary: {
        border: '2px solid $ignite500',
        color: '$ignite300',

        '&:not(:disabled):hover': {
          background: '$ignite500',
          color: '$white',
        },

        '&:disabled': {
          borderColor: '$gray200',
          color: '$gray200',
        },
      },

      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled:': {
          color: '$gray600',
        },
      }
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      }
    }
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  }

})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'