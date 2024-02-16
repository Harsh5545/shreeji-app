import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const ItemComponent = ({ data }) => {
  return (
    <div className="">
      <Card>
      <CardHeader>{data.name}</CardHeader>
      <CardContent>Hello</CardContent>
      <CardContent>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </CardContent>
    </Card>
    </div>
  );
};

export default ItemComponent;
