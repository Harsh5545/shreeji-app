
import React from "react";
import { Card, Skeleton, Button } from "@nextui-org/react";

export default function NewCardLoading() {
  return (
    <Card isFooterBlurred radius="lg" className="border-none w-[310px] mx-auto mb-4 bg-indigo-800/10">
      <Skeleton className="rounded-lg m-2 p-2">
        <div className="h-48 rounded-lg bg-gray-300"></div>
      </Skeleton>

      <Skeleton className="w-4/5 mt-2 mb-1 mx-auto rounded-lg">
        <div className="h-4 w-11/12 rounded-lg bg-gray-300"></div>
      </Skeleton>

      <Skeleton className="w-4/5 my-5 mb-2 mx-auto rounded-lg">
        <Button variant="light" disabled>Loading...</Button>
      </Skeleton>
    </Card>
  );
}

