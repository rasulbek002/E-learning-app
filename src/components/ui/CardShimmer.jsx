import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React from "react";

export default function CardShimmer() {
  return (
    <div>
      <Skeleton style={{ height: "70px", margin: "12px" }} count={3} />
    </div>
  );
}
