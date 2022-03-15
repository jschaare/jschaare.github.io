import React from "react";
import { Box, Button, Image, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader } from '@chakra-ui/react'
import { IPost } from "../types/post";

const PostModal = (props: IPost) => (
    <ModalContent backgroundColor="gray.800">
        <ModalHeader>{props.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody my={4}>
            {props.children}
        </ModalBody>
    </ModalContent>
);

export default PostModal;