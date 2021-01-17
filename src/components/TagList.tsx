import React from 'react'

import type { Tag } from '~/types'

type Props = {
  tags: Tag[]
}

export function TagList({ tags }: Props) {
  return (
    <div className="flex">
      {tags.map((t) => (
        <div className="py-0.5 px-1.5 rounded-lg border-2 border-black mr-1">
          {t}
        </div>
      ))}
    </div>
  )
}
