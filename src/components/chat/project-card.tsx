import { StarIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { CircleIcon } from "lucide-react";

export interface IProjectCardsProps {
  title: string;
  desc: string;
  lang: string;
  stars: number;
  link: string;
}

export function ProjectCard(props: IProjectCardsProps) {
  return (
    <Card className="lg:text-lg">
      <a href={props.link} target="_blank">
        <CardHeader className="">
          <div className="space-y-1">
            <CardTitle>{props.title}</CardTitle>
            <CardDescription>{props.desc}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 text-base text-muted-foreground">
            <div className="flex items-center">
              <CircleIcon className="mr-1 h-3 fill-sky-400 text-sky-400" />
              {props.lang}
            </div>
            <div className="flex items-center">
              <StarIcon className="mr-1 h-5" />
              {props.stars == 0 ? `🙂` : props.stars}
            </div>
          </div>
        </CardContent>
      </a>
    </Card>
  );
}
