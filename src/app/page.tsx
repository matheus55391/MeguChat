'use client'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter()

  const handleOpen = () => {
    onOpen();
  }

  const onLogin = () => {
    router.push('/chat')
  }

  return (
    <main className="flex flex-col h-[100vh] items-start justify-center space-y-6 p-8">
      <h1 className="text-4xl font-bold"></h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold">Welcome to <span className="text-3xl font-bold text-blue-400">MeguChat!</span></h2>
        <p className="text-lg font-medium">
          It looks like you don’t have a message selected. Choose an existing message or start a new conversation.
        </p>
      </div>

      <Button color="primary" className="rounded-full px-8" onClick={handleOpen}>
        Start Chat
      </Button>
      <Modal
        size={'md'}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Login</ModalHeader>
              <ModalBody>
                <form>
                  <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                      Username:
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="mt-1 p-2 w-full border rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password:
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="mt-1 p-2 w-full border rounded-md"
                    />
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onLogin}>
                  Login
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </main>
  );
}
