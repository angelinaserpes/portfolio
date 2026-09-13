'use client';

import { motion } from 'framer-motion';
import {
  ArrowDownLeft,
  ArrowUpRight,
} from 'lucide-react';
import Link from 'next/link';

import { MagneticButton } from '@/components';

import {
  Container,
  MainTitle,
  Row,
} from './index.styled';

/**
 * @param {Object} props
 * @param {import('framer-motion').MotionValue<number>} props.transformX
 */
export function UserDetails({ transformX }) {
  return (
    <Container>

      <Row>

        <div className='mb-6 flex items-center justify-between'>

          <p className='text-[10px] uppercase tracking-[0.28em] opacity-40'>
            Made it this far?
          </p>

          <motion.div
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ArrowDownLeft
              size={24}
              strokeWidth={1.1}
            />
          </motion.div>

        </div>

        <div className='flex items-center gap-8'>
          <MainTitle>
            Let&apos;s make
          </MainTitle>
        </div>

        <div className='flex items-center justify-between'>

          <MainTitle>
            something.
          </MainTitle>

        </div>

      </Row>

      <Row>

        <div className='relative w-full'>

          <div className='h-[1px] bg-muted-foreground' />

          <div className='absolute right-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2'>

            <motion.div
              style={{
                x: transformX,
              }}
            >
              <Link
                href='/contact'
                passHref
              >
                <MagneticButton
                  variant='primary'
                  size='lg'
                >
                  <span className='flex items-center gap-3'>
                    Let&apos;s connect
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.2}
                    />
                  </span>
                </MagneticButton>
              </Link>
            </motion.div>

          </div>

        </div>

      </Row>

    </Container>
  );
}