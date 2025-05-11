import { cn } from '@/utils/cn';
import Image from 'next/image';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  name: string;
  image: string;
  description: string;
};

export const CoachCard = ({ name, image, description, className }: Props) => {
  return (
    <div
      className={cn(
        'group  bg-gray-50 rounded-xl shadow-secondary shadow-[5px_5px_0_rgba(--secondary)] transition-all duration-300  overflow-hidden flex flex-col shrink-0',
        className
      )}
    >
      <div className="relative lg:grayscale-100 lg:group-hover:grayscale-0 transition-all duration-300 w-full pt-[75%]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6 text-xl text-foreground md:text-xl flex flex-col dark:text-background">
        <h2 className="font-bold">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
