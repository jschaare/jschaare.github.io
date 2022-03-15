import { useState } from "react";
import { Modal, ModalOverlay, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import Main from "../components/layout/main";
import { PostGridItem } from "../components/post-grid-item";
import PostModal from "../components/post-modal";
import { SlideBox } from "../components/slidebox";
import { IPost } from "../types/post";
import { HeehawBot } from "./projects/heehaw-bot";
import { LolLookup } from "./projects/lol-lookup";
import { MyWebsite } from "./projects/my-website";
import { Rumble } from "./projects/rumble";


function Projects() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [projectData, setProjectData] = useState<IPost>();

    function openProjectModal(p: IPost) {
        setProjectData(p);
        onOpen();
    }

    return (
        <Main>
            <SimpleGrid columns={2}>
                <SlideBox delay={0.1}>
                    <PostGridItem
                        thumbnail={"/images/heehawbot.jpg"}
                        title={"HeehawBot"}
                        click={() => openProjectModal({ title: "HeehawBot", children: <HeehawBot /> })}
                    >
                        Personal bot for my Discord server
                    </PostGridItem>
                </SlideBox>
                <SlideBox delay={0.2}>
                    <PostGridItem
                        thumbnail={"/images/lol-lookup.jpg"}
                        title={"LoL Lookup"}
                        click={() => openProjectModal({ title: "LoL Lookup", children: <LolLookup /> })}
                    >
                        Scouting tool for League of Legends
                    </PostGridItem>
                </SlideBox>
                <SlideBox delay={0.3}>
                    <PostGridItem
                        thumbnail={"/images/fatdoge.jpg"}
                        title={"Personal Website"}
                        click={() => openProjectModal({ title: "Personal Website", children: <MyWebsite /> })}
                    >
                        This website!
                    </PostGridItem>
                </SlideBox>
                <SlideBox delay={0.4}>
                    <PostGridItem
                        thumbnail={"/images/rumble.jpg"}
                        title={"Rumble"}
                        click={() => openProjectModal({ title: "Rumble", children: <Rumble /> })}
                    >
                        API wrapper for live LoL game data
                    </PostGridItem>
                </SlideBox>
            </SimpleGrid>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <PostModal
                    title={projectData?.title}
                >
                    {projectData?.children}
                </PostModal>
            </Modal>
        </Main>
    );
}

export default Projects;