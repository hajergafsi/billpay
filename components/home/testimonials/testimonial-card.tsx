import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Link } from "lucide-react";
import React from "react";
import { Rating } from "@mui/material";

type Props = {
  name: string;
  text: string;
  rating: number;
};

const TestimonialCard = ({ name, text, rating }: Props) => {
  return (
    <div>
      <Card className="flex flex-col items-center justify-center border-none bg-transparent lg:px-12 shadow-none">
        <CardHeader>
          <Rating
            className="text-[#74B3CE]"
            name="read-only"
            value={rating}
            readOnly
          />
        </CardHeader>
        <CardContent>
          <p className="text-black font-fira font-light font-md italic text-center">
            {text}
          </p>
          <p className="mt-4 font-semibold text-black font-fira font-md text-center">
            {name}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestimonialCard;
