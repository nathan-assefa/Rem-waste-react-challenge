import { Badge } from "@/components/ui/badge";
import { Truck } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">SkipHire Pro</h1>
              <p className="text-sm text-slate-500">
                Professional Waste Solutions
              </p>
            </div>
          </div>
          <Badge variant="secondary" className="hidden sm:flex">
            NR32 Area
          </Badge>
        </div>
      </div>
    </header>
  );
}
