import { Section } from '@/components/Section';
import Image from 'next/image';
import Link from 'next/link';

export const About = () => {
  return (
    <Section id="about">
      <div className="w-full h-full gap-5 flex flex-col justify-between lg:justify-evenly">
        <h1 className="text-center text-2xl lg:text-4xl font-bold text-secondary">
          Коуч в кармане
        </h1>

        <div className="flex flex-col gap-8 lg:flex-row-reverse">
          <div className="relative h-fit">
            <div className="absolute inset-0 -m-1 rounded-md bg-gradient-to-r from-purple-500 via-pink-500 via-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 animate-rainbow-border"></div>
            <Image
              src={'coaches.jpg'}
              alt=""
              width={1280}
              height={853}
              className="relative object-cover object-top w-full rounded-md"
            />
          </div>

          <div className="flex flex-col md:text-xl lg:w-1/2 lg:gap-5">
            <p>
              Привет!{' '}
              <span className="border-b border-secondary">Коуч в кармане</span>{' '}
              - это команда виртуальных коучей, которые помогут тебе решить
              любые проблемы. Каждый из них выслушает тебя и поможет:
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
              изменений?
            </p>

            <Link
              href="#coaches"
              className="text-center bg-primary text-background dark:text-foreground rounded-md p-3 hidden lg:block"
            >
              ↓ Познакомиться с коучами ↓
            </Link>
          </div>
        </div>

        <Link
          href="#coaches"
          className="text-center bg-primary md:text-xl text-background dark:text-foreground rounded-md p-3 lg:hidden"
        >
          ↓ Познакомиться с коучами ↓
        </Link>
      </div>
    </Section>
  );
};
