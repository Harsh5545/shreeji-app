import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Checkbox,
  Input,
  Link,
  Textarea,
} from "@nextui-org/react";
import { MailIcon } from "./MailIcon.jsx";
import { PhoneIcon } from "./PhoneIcon.jsx";
import { NameIcon } from "./NameIcon.jsx";
import { apiCall } from "../../Api/Api.js";
import toast, { Toaster } from "react-hot-toast";
export default function CustomModel({ isOpen, onOpen, onOpenChange }) {
  // const notify = () => toast.success("We Will get Back You Soon.");

  const postData = async () => {
    const apiUrl = "https://api.hdfonline.in/api/v1/sendMail";

    const postData = {
      mail_info: "value1",
      user: "chatapp585@gmail.com",
      password: "zsgklfeiarxcoyac",
      from: "Bhavishm009@gmail.com",
      to: "Bhavishm009@gmail.com",
      subject: "Hello ",
      description: "Something New",
      html: "<div>Hello</div>",
    };

    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const responseData = await apiCall({
        url: apiUrl,
        method: "POST",
        data: postData,
        headers: headers,
      });
    } catch (error) {
      console.error("Error in posting data:", error);
    }

  };

  // const myPromise = postData;

  //   toast.promise(myPromise, {
  //     loading: "Sending Message...",
  //     success: "We Will get Back You Soon.",
  //     error: "Oop's Something Went Wrong..",
  //   });

    // toast.promise(
    //   postData,
    //   {
    //     loading: "Sending Message...",
    //     success: "We Will get Back You Soon.",
    //     error: "Oop's Something Went Wrong..",
    //   },
    //   {
    //     style: {
    //       minWidth: '250px',
    //     },
    //     success: {
    //       duration: 5000,
    //       icon: '🔥',
    //     },
    //   }
    // );

  return (
    <>
      <Toaster />
      <Modal
        backdrop={"blur"}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Contact Us
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <NameIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Name"
                  placeholder="Enter your Name"
                  variant="bordered"
                />
                <Input
                  autoFocus
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input
                  endContent={
                    <PhoneIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Phone No"
                  placeholder="Enter your Phone No"
                  variant="bordered"
                />
                <Textarea
                  label="Description"
                  variant="bordered"
                  placeholder="Enter your description"
                  disableAnimation
                  disableAutosize
                  classNames={{
                    input: "resize-y min-h-[40px]",
                  }}
                />
                <div className="flex py-2 px-1 justify-between"></div>
              </ModalBody>
              <ModalFooter className="mx-auto roboto-bold">
                <Button color="success" onPress={onClose} onClick={postData}>
                  Send Message
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
