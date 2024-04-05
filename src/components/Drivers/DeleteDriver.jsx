import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";

const DeleteDriver = ({ isOpen, onClose, handleDelete, isLoading }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete driver</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            Are you sure to delete this Driver? It will be permanently deleted
            and cannot be restored again!
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button
            colorScheme="red"
            onClick={() => handleDelete()}
            isLoading={isLoading}
          >
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteDriver;
