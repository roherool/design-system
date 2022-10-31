import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles/stitches.config'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  overflow: 'hidden',

  height: '$12',
  width: '$12',
})

export const AvatarImage = styled(Avatar.Image, {
  borderRadius: 'inherit',
  objectFit: 'cover',

  height: '100%',
  width: '100%',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  backgroundColor: '$gray400',
  color: '$gray800',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: '100%',
  width: '100%',

  svg: {
    height: '$6',
    width: '$6',
  },
})
