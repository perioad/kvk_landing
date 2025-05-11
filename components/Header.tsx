import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="h-[80px] shadow px-5 lg:px-10 flex justify-between items-center backdrop-blur-xs fixed top-0 left-0 right-0 z-10">
      <Link href="/">
        <Image src={'logo.png'} alt="" width={50} height={50} />
      </Link>

      <nav>
        <ul className="flex gap-5 md:text-xl">
          <li>
            <Link
              className="lg:hover:shadow-[0_2px_0] shadow-secondary transition-all duration-300"
              href="#about"
            >
              О нас
            </Link>
          </li>
          <li>
            <Link
              className="lg:hover:shadow-[0_2px_0] shadow-secondary transition-all duration-300"
              href="#coaches"
            >
              Коучи
            </Link>
          </li>
          <li>
            <Link
              className="lg:hover:shadow-[0_2px_0] shadow-secondary transition-all duration-300"
              href="#begin"
            >
              Начать
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
