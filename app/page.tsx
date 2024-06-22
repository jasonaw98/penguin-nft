import { Hero } from "@/components/Hero";
import Main from "@/components/Main";
import ToggleTheme from "@/components/toggle-theme";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pb-24">
      <div className="absolute z-10 flex w-full max-w-4xl justify-end pt-16">
      <ToggleTheme />
      </div>
      <Hero />
      <Main />
    </main>
  );
}
