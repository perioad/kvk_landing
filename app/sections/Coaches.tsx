import { CoachCard } from '@/components/CoachCard';
import { Section } from '@/components/Section';

const coaches = [
  {
    name: 'Neo',
    image: 'neo.png',
    description:
      'Тренирует твой навык фокусировки на главной цели. С ним не расслабишься.',
  },
  {
    name: 'Dr. Freudy',
    image: 'freudy.png',
    description:
      'Помогает улучшить отношения с важными для тебя людьми через (не психо-) анализ взаимных ожиданий.',
  },
  {
    name: 'Lucy',
    image: 'lucy.png',
    description:
      'Показывает, как достигать большего, извлекая уроки из собственного прошлого опыта. Мягко подводит к серьёзным выводам.',
  },
  {
    name: 'Pepe',
    image: 'pepe.png',
    description:
      'Открыт для любых твоих вопросов. Обладает нечеловеческой чувствительностью и способностью давать дельные советы.',
  },
  {
    name: 'Dude',
    image: 'dude.png',
    description:
      'Лучший коуч из всех пофигистов. Величайший пофигист из всех коучей.',
  },
];

export const Coaches = () => {
  return (
    <Section id="coaches" className="flex items-center">
      <div className="flex gap-5 overflow-x-auto h-fit p-5">
        {coaches.map((coach) => (
          <CoachCard
            className="w-[90%] md:w-[30%] h-100%"
            key={coach.name}
            name={coach.name}
            image={coach.image}
            description={coach.description}
          />
        ))}
      </div>
    </Section>
  );
};
