import { Section } from '@/components/Section';
import Image from 'next/image';
import Link from 'next/link';

export const About = () => {
  return (
    <Section>
      <div className="w-full h-full overflow-hidden flex flex-col justify-around">
        <Image
          src="/coaches.jpg"
          alt=""
          width={1280}
          height={853}
          className="object-cover object-top w-full "
        />

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos culpa et
          ipsum! Perspiciatis maxime distinctio, voluptatibus culpa architecto
          praesentium repellat illo aut pariatur adipisci quam, veniam aliquam
          unde dignissimos autem.
        </p>

        <Link href="/" className="text-center bg-primary rounded-md p-3">
          ↓ Познакомиться с коучами ↓
        </Link>
      </div>
    </Section>
  );
};
