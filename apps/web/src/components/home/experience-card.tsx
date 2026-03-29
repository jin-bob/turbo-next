import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/src/components/ui/card';

type ExperienceCardProps = {
  projectName: string;
  description: string;
  content: string[];
};

export default function ExperienceCard({
  content,
  description,
  projectName,
}: ExperienceCardProps) {
  return (
    <Card className="group transition-all duration-300 ease-out hover:scale-[1.05] hover:shadow-xl">
      <CardHeader className="text-3xl transition-colors duration-300">
        {projectName}
      </CardHeader>

      <CardDescription className="px-6 transition-colors duration-300">
        {description}
      </CardDescription>

      <CardContent>
        <ul className="">
          {content.map((item, index) => (
            <li
              key={index}
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
