import React from "react";
import { cn } from "@/lib/utils";

const GridBackground = ({ className, opacity = 0.3 }) => {
  return (
    <div className={cn("opacity-30", className)} style={{ opacity }}>
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:80px_80px]",
          "[background-image:linear-gradient(to_right,#b9b9b9_.5px,transparent_.1px),linear-gradient(to_bottom,#b9b9b9_.5px,transparent_0px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_0px),linear-gradient(to_bottom,#262626_.2px,transparent_0px)]",
        )}
      />
    </div>
  );
};

export default GridBackground;
