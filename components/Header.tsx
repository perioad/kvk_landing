import Image from 'next/image';
import Link from 'next/link';
import { getImagePath } from '@/utils/get-image-path';

export const Header = () => {
  return (
    <header className="h-[80px] px-5 flex justify-between items-center backdrop-blur-xs fixed top-0 left-0 right-0 z-10">
      <Link href="/">
        <Image src={getImagePath('logo.png')} alt="" width={50} height={50} />
      </Link>

      <nav>
        <ul className="flex gap-5">
          <li>
            <Link href="/">О нас</Link>
          </li>
          <li>
            <Link href="/">Коучи</Link>
          </li>
          <li>
            <Link href="/">Контакты</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
