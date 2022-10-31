import { Button, ButtonProps } from '@digimo-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    onClick: {
      action: 'click',
    },
    variant: {
      options: ['primary', 'secundary', 'tertiary'],
      control: {
        type: 'inline-radio',
      }
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      }
    },
    disabled: {
      control: {
        type: 'boolean',
      }
    }
  }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secundary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secundary',
    children: 'Create new',
  }
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  }
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  }
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    )
  }
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  }
}