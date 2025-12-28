import ProjectCard from "./ProjectCard";
import CreateProjectCard from "./CreateProjectCard";

export default function ProjectSection() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold">Projects</h2>
        <p className="text-xs text-gray-400">Architects design houses</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-2">
        <ProjectCard
          image="/icons/Modern.svg"
          project="Project #1"
          title="Modern"
          description="As Uber works through a huge amount of internal management turmoil."
        />

        <ProjectCard
          image="/icons/Scandinavian.svg"
          project="Project #2"
          title="Scandinavian"
          description="Music is something that every person has his or her own specific opinion about."
        />

        <ProjectCard
          image="/icons/Minimalist.svg"
          project="Project #3"
          title="Minimalist"
          description="Different people have different taste, and various types of music."
        />

        <CreateProjectCard />
      </div>
    </div>
  );
}
