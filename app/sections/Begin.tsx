import { Section } from '@/components/Section';
import Link from 'next/link';

export const Begin = () => {
  return (
    <Section
      id="begin"
      className="flex items-center justify-center gap-5 md:text-xl"
    >
      <div className="max-w-3xl w-fit flex flex-col gap-5">
        <p>
          Мы готовы помочь тебе в любое время дня и ночи в удобном формате
          телеграм-бота.
        </p>

        <p>Начни общение с нами прямо сейчас, нажав на кнопку ниже.</p>

        <Link
          href="https://t.me/k_v_karmane_bot?start=ref1EZa4iJ1vv9xEx7"
          target="_blank"
          className="text-center md:text-xl text-background dark:text-foreground bg-secondary rounded-md p-3 block mx-auto md:w-fit"
        >
          ✨ Let&apos;s go! ✨
        </Link>
      </div>
    </Section>
  );
};
