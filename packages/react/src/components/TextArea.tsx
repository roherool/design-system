import { ComponentProps } from "react";
import { styled } from "../styles/stitches.config";

export const TextArea = styled('textarea', {
  backgroundColor: '$gray900',
  border: '2px solid $gray900',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  minHeight: 80,
  padding: '$3 $4',

  color: '$white',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  resize: 'vertical',

  '&:placeholder': {
    color: '$gray400',
  },

  '&:focus': {
    borderColor: '$ignite300',
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
})


export interface TextAreaProps extends ComponentProps<typeof TextArea> { }

TextArea.displayName = 'TextArea'