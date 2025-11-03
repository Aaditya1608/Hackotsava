import { Button } from "@/components/ui/button";

export function Home() {
  return (
    <div className="flex flex-1 flex-col p-8 bg-background text-foreground">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">Welcome to MyApp</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          This is the home page. Use the sidebar to navigate through the app.
        </p>
      </header>
      <main className="flex flex-col gap-6">
        <section className="bg-card p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">Getting Started</h2>
          <p className="mb-4">
            Use this sample home page to show content while the sidebar navigation allows access to different sections.
          </p>
          <Button variant="default">Learn More</Button>
        </section>
        <section className="bg-card p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">Features</h2>
          <ul className="list-disc list-inside">
            <li>Responsive sidebar navigation</li>
            <li>Accessible UI components</li>
            <li>Modern design with shadcn UI</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
