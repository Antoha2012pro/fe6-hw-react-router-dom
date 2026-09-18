import React from "react";
import { cn } from "../../shared/utils/cn";

const Skeleton = ({ className }) => {
  return <div className={cn("bg-gray-200 animate-pulse rounded", className)} />;
};

export default Skeleton;
