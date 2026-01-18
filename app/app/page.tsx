import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen w-200 items-center justify-center">
      <div className="rounded-full flex items-center overflow-hidden w-full border border-border bg-white p-2">
        <Input
          id="username"
          type="text"
          placeholder="e.g Do my chores"
          className="p-2 h-max rounded-none shadow-none bg-white border-none"
          required
        />
        <div className="bg-primary w-max p-2 rounded-full text-white">
          <Plus />
        </div>
      </div>
    </div>
  );
}
