import { useState } from "react";
import StitchApp from "./components/StitchApp";
import WorkspaceApp from "./components/WorkspaceApp";

export default function App() {
  const [view, setView] = useState<"home" | "workspace">("home");
  const [wsPrompt, setWsPrompt] = useState("");
  const [wsProject, setWsProject] = useState("Minimal Finance Tracker");

  if (view === "workspace") {
    return (
      <WorkspaceApp
        projectName={wsProject}
        prompt={wsPrompt}
        onBack={() => setView("home")}
      />
    );
  }

  return (
    <StitchApp
      onSubmit={(prompt, projectName) => {
        setWsPrompt(prompt);
        if (projectName) setWsProject(projectName);
        setView("workspace");
      }}
    />
  );
}
