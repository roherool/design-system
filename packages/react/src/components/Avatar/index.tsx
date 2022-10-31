import { User } from 'phosphor-react';
import { ComponentProps, ElementType } from 'react';
import { AvatarContainer, AvatarFallback, AvatarImage } from "./styles";

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  as?: ElementType
}

Avatar.displayName = 'Avatar'