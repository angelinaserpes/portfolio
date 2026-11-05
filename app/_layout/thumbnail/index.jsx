'use client';

import { useRef } from 'react';

import { useFollowPointer } from '@/hooks';

import {
  ThumbnailCursorCircle,
  ThumbnailCursorLabel,
  ThumbnailLabel,
  ThumbnailList,
  ThumbnailModal,
} from './components';
import { scaleUp } from './variants';

export function Thumbnail() {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const modal = useRef(null);

  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const cursor = useRef(null);

  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const label = useRef(null);

  const {
    item: {
      active,
      index,
    },
    handlePointerEnter,
    handlePointerLeave,
    moveItems,
  } = useFollowPointer({
    modal,
    cursor,
    label,
  });

  return (
    <section
      className='container relative'
      onPointerMove={({ clientX, clientY }) =>
        moveItems(clientX, clientY)
      }
    >

      <div className='my-20 flex flex-col gap-10 md:my-28'>

        <div className='flex items-end justify-between border-t border-current/20 pt-6'>

          <div>
            <ThumbnailLabel>
              Selected work
            </ThumbnailLabel>

            <p className='mt-4 max-w-sm text-sm opacity-40'>
              Seven projects. Seven very different problems.
            </p>
          </div>

          <p className='hidden text-[10px] uppercase tracking-[0.25em] opacity-35 md:block'>
            01 — 07
          </p>

        </div>

        <ThumbnailList
          handlePointerEnter={handlePointerEnter}
          handlePointerLeave={handlePointerLeave}
          moveItems={moveItems}
        />

        <ThumbnailModal
          ref={modal}
          variants={scaleUp}
          active={active}
          index={index}
        />

        <ThumbnailCursorCircle
          ref={cursor}
          variants={scaleUp}
          active={active}
        />

        <ThumbnailCursorLabel
          ref={label}
          variants={scaleUp}
          active={active}
        >
          View
        </ThumbnailCursorLabel>

      </div>

    </section>
  );
}