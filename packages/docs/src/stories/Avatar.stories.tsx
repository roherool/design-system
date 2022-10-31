import { Avatar, AvatarProps } from '@digimo-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/roherool.png',
    alt: 'Roberto Oliveira'
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      }
    }
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  }
}