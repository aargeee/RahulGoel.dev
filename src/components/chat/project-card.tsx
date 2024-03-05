import { StarIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { CircleIcon } from "lucide-react";

export function ProjectCard() {
    return (
      <Card className="">
        <CardHeader className="">
          <div className="space-y-1">
            <CardTitle>shadcn/ui</CardTitle>
            <CardDescription>
              Beautifully designed components that you can copy and paste into
              your apps. Accessible. Customizable. Open Source.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CircleIcon className="mr-1 h-3 fill-sky-400 text-sky-400" />
              TypeScript
            </div>
            <div className="flex items-center">
              <StarIcon className="mr-1 h-3" />
              20k
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }