import React from "react";
import { Button } from "@nextui-org/react";


const CelebrateButton = ({ buttonRef,handleConfetti }) => {
  

  return (
    <Button
      ref={buttonRef}
      disableRipple
     
      variant="flat"
      onPress={handleConfetti}
    >
      SEND
    </Button>
  );
};

export default CelebrateButton;
