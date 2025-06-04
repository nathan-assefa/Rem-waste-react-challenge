import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ArrowRight, Calendar, CheckCircle, MapPin, Star } from "lucide-react";

type Skip = {
  id: number;
  size: number;
  price_before_vat: number;
  vat: number;
  hire_period_days: number;
  postcode: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
};

type Props = {
  skip: Skip;
  isSelected: boolean;
  onSelect: (id: number) => void;
};

export default function SkipCard({ skip, isSelected, onSelect }: Props) {
  const totalPrice =
    skip.price_before_vat + (skip.price_before_vat * skip.vat) / 100;

  return (
    <Card
      key={skip.id}
      className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group ${
        isSelected
          ? "ring-4 ring-blue-200 shadow-2xl border-blue-300"
          : "border-slate-200 hover:border-blue-200"
      }`}
      onClick={() => onSelect(skip.id)}
    >
      {skip.size === 6 && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <Star className="w-3 h-3 mr-1" />
            Popular
          </Badge>
        </div>
      )}

      <CardHeader className="pb-4">
        <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-200 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          <div className="relative z-10 text-center">
            <div className="w-24 h-16 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-lg mx-auto mb-2 shadow-lg transform group-hover:scale-110 transition-transform duration-300" />
            <Badge variant="secondary" className="bg-white/90 text-slate-700">
              {skip.size} Yard Skip
            </Badge>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            {skip.size} Yard Skip
          </h3>
          <p className="text-slate-600">
            Perfect for{" "}
            {skip.size === 4
              ? "small to medium projects"
              : "larger renovations and clear-outs"}
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-blue-500" />
            <span className="text-slate-600">
              {skip.hire_period_days} day hire
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-green-500" />
            <span className="text-slate-600">{skip.postcode} area</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {skip.allowed_on_road && (
            <Badge
              variant="outline"
              className="text-green-600 border-green-200"
            >
              Road Placement OK
            </Badge>
          )}
          {skip.allows_heavy_waste && (
            <Badge variant="outline" className="text-blue-600 border-blue-200">
              Heavy Waste OK
            </Badge>
          )}
        </div>

        <div className="bg-slate-50 rounded-xl p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-slate-600">Price before VAT:</span>
            <span className="font-medium">£{skip.price_before_vat}</span>
          </div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-slate-600">VAT ({skip.vat}%):</span>
            <span className="font-medium">
              £{((skip.price_before_vat * skip.vat) / 100).toFixed(2)}
            </span>
          </div>
          <div className="border-t border-slate-200 pt-3">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-slate-900">
                Total Price:
              </span>
              <span className="text-2xl font-bold text-blue-600">
                £{totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          className={`w-full h-12 text-base font-semibold transition-all duration-300 ${
            isSelected
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(skip.id);
          }}
        >
          {isSelected ? (
            <>
              <CheckCircle className="w-5 h-5 mr-2" />
              Selected
            </>
          ) : (
            <>
              Select This Skip
              <ArrowRight className="w-5 h-5 ml-2" />
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
