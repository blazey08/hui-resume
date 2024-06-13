export function ProgrammingLanguageBadge(lang: string) {
  switch (lang) {
    case "Go":
      return "bg-red-500";
    case "Python":
      return "bg-blue-500";
    case "React":
      return "bg-yellow-500";
    case "Rust":
      return "bg-yellow-700";
    case "Html":
      return "bg-green-500";
    case "CSS":
      return "bg-cyan-500";
    default:
      return "bg-gray-500";
  }
}
