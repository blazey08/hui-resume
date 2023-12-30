import { ProgrammingLanguageBadge } from "@/utils";
import { Heading4 } from "../common/typography/Heading4";
import { Heading5 } from "../common/typography/Heading5";
import { Subtext1 } from "../common/typography/Subtext1";
import { Badge } from "../ui/badge";
import { CardHeader, Card, CardContent, CardDescription, CardTitle, CardFooter } from "../ui/card";
import { Separator } from "../ui/separator";
import { ProjectDetails } from "./projectList";

interface ProjectCardProps {
    card: ProjectDetails;
}

export function ProjectCard({ card }: ProjectCardProps) {

    const imagePath = `/images/${card.image}`
    return (
        <Card>
            <CardHeader>
                <CardTitle> {card.name} </CardTitle>
                <CardDescription>
                    {card.description}
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <img src={imagePath} alt={card.name} style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }} />
                <Heading4>Project Description</Heading4>
                {card.longtext}
                <Separator className="my-4" />
                <div>
                    <Heading5>Tags:</Heading5>
                    {card.languages.map((lang, index) => (
                        <Badge
                            key={index}
                            className={ `${ProgrammingLanguageBadge(lang)} mr-1` }>
                            {lang}
                        </Badge>
                    ))}

                </div>
            </CardContent>
            <CardFooter>
                <Subtext1>Credits: Me</Subtext1>
            </CardFooter>
        </Card>
    )
}