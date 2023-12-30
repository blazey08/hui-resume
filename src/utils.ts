

export function ProgrammingLanguageBadge(lang: string){
    switch(lang){
        case "Go":
            return "bg-red-500";
        case "Python":
            return "bg-blue-500";
        case "React":
            return "bg-yellow-500";

        default:
            return "bg-gray-500";

    }
}