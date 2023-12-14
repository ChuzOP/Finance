import { montserrat } from '@/app/utils/fonts'
import clsx from 'clsx'
import React from 'react'

type props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  variant:
    | 'title-01'
    | 'title-02'
    | 'title-03'
    | 'title-04'
    | 'subtitle-01'
    | 'subtitle-02'
    | 'subtitle-03'
    | 'text-01'
    | 'text-02'
  thin?: boolean
  normal?: boolean
  bold?: boolean
  semibold?: boolean
  underline?: boolean
  italic?: boolean
  className?: string
  children?: string
}

const variantStyles: Record<
  props['variant'],
  {
    fontSize: string
    lineHeight: string
  }
> = {
  'title-01': {
    fontSize: '48px',
    lineHeight: '120%',
  },
  'title-02': {
    fontSize: '40px',
    lineHeight: '40px',
  },
  'title-03': {
    fontSize: '32px',
    lineHeight: '32px',
  },
  'title-04': {
    fontSize: '24px',
    lineHeight: '24px',
  },
  'subtitle-01': {
    fontSize: '20px',
    lineHeight: '28px',
  },
  'subtitle-02': {
    fontSize: '18px',
    lineHeight: '24px',
  },
  'subtitle-03': {
    fontSize: '16px',
    lineHeight: '20px',
  },
  'text-01': {
    fontSize: '14px',
    lineHeight: '18px',
  },
  'text-02': {
    fontSize: '12px',
    lineHeight: '16px',
  },
}

export const Text = ({
  variant = 'text-01',
  bold = false,
  underline = false,
  italic = false,
  thin = false,
  semibold = false,
  normal,
  children,
  className,
  ...rest
}: props) => {
  const { fontSize, lineHeight } = variantStyles[variant]
  return (
    <div
      className={clsx(
        // prettier-ignore
        {
            'font-thin': thin,
            'font-normal': normal,
            'font-semibold': semibold,
            'font-bold': bold,
            'underline': underline,
            'italic': italic,
        },
        montserrat.className,
        className,
      )}
      style={{
        fontSize,
        lineHeight,
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
