import { Section } from '@/components/Section';
import { getImagePath } from '@/utils/get-image-path';
import Image from 'next/image';
import Link from 'next/link';

export const About = () => {
  return (
    <Section id="about">
      <div className="w-full h-full flex flex-col justify-between">
        <h1 className="text-center text-2xl font-bold text-secondary">
          Коуч в кармане
        </h1>

        <div className="relative">
          <div className="absolute inset-0 -m-1 rounded-md bg-gradient-to-r from-purple-500 via-pink-500 via-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 animate-rainbow-border"></div>
          <Image
            src={getImagePath('coaches.jpg')}
            alt=""
            width={1280}
            height={853}
            className="relative object-cover object-top w-full rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <p>
            Привет!{' '}
            <span className="border-b border-secondary">Коуч в кармане</span> -
            это команда виртуальных коучей, которые помогут тебе решить любые
            проблемы. Каждый из них выслушает тебя и поможет:
          </p>
          <ul className="list-disc pl-5">
            <li>найти ответ на личный вопрос любой сложности;</li>
            <li>получить быструю консультацию в любой области;</li>
            <li>
              набросать несколько решений на выбор для любой из стоящих перед
              тобой задач.
            </li>
          </ul>

          <p>
            Хочешь лучше понять самого себя и то, как добиться задуманных
            изменений? Стартуй, и всё получится ✨
          </p>
        </div>

        <Link href="#coaches" className="text-center bg-primary rounded-md p-3">
          ↓ Познакомиться с коучами ↓
        </Link>
      </div>
    </Section>
  );
};
