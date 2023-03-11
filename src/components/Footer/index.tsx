import VercelLogo from '@/Icons/VercelLogo';

import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <div className="font-mono">
      <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
        <Link href="/" className="text-3xl md:text-4xl">
          {'<Vibey/>'}
        </Link>
        <span className="text-base md:text-xl">© 2022, Open Source</span>
      </div>
      <div className="mt-7 mb-10 h-1 rounded-lg bg-base-300" />
      <p className="text-center">
        Thanks to all contributers to maintain this. 🙏 ❤️‍🔥 You can contribute at{' '}
        <a
          href="https://github.com/UniKonf/vibey"
          className="udnerline text-primary"
          target="_blank"
          rel="noreferrer"
        >
          UniKonf/vibey
        </a>
        .{' '}
      </p>
      <div className="mt-2 flex justify-center">
        <VercelLogo />
      </div>
    </div>
  );
};

export default Footer;
