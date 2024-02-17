import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

export default function NewCardLoading() {

  return (
    <Card isFooterBlurred radius="lg" className="border-none w-[310px] mx-auto">
      <Skeleton  className="rounded-lg m-2 p-2">
        <div className="h-44 rounded-lg bg-default-300 p-2"></div>
      </Skeleton>

      <Skeleton  className="w-4/5 mt-2 my-2 rounded-lg mx-auto">
        <div className="h-6 w-11/12 rounded-lg bg-default-200"></div>
      </Skeleton>
    </Card>
  );
}
