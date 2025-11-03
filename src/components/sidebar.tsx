import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Home, User, Settings, Bell } from "lucide-react";

export function Sidebar() {
  return (
    <div className="h-screen w-64 bg-background text-foreground flex flex-col">
      <div className="p-4 border-b border-border">
        <h1 className="text-2xl font-bold">MuseoMatrix</h1>
      </div>
      <ScrollArea className="flex-1 p-4">
        <nav className="flex flex-col space-y-2">
          <Button variant="ghost" className="justify-start gap-2">
            <Home className="h-5 w-5" />
            Home
          </Button>
          <Button variant="ghost" className="justify-start gap-2">
            <User className="h-5 w-5" />
            Profile
          </Button>
          <Button variant="ghost" className="justify-start gap-2">
            <Settings className="h-5 w-5" />
            Settings
          </Button>
          <Button variant="ghost" className="justify-start gap-2">
            <Bell className="h-5 w-5" />
            Notifications
          </Button>
          <Button variant="ghost" className="justify-start gap-2">
            Help
          </Button>
        </nav>
      </ScrollArea>
      <div className="p-4 border-t border-border">
        <p className="text-sm text-muted-foreground">© 2025 MyApp</p>
      </div>
    </div>
  );
}
