import { Content } from "./components/shared/main-page-content/content/content";
import { Sidebar } from "./components/shared/main-page-content/sidebar/sidebar";

export default function Home() {
  return (
    <div className="flex gap-4 h-[calc(100vh-32px)]">
      <Sidebar />
      <Content />
    </div>
  );
}
