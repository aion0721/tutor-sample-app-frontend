import {
  Box,
  Center,
  EmptyState,
  Heading,
  Presence,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import { TbCircleDotted } from "react-icons/tb";
import CardGroup from "./CardGroup";
import type { CardData } from "@/types";

/** FadeBox
 * - show: 表示／非表示
 * - overlay: true なら absolute で重ねる
 */
const FadeBox: React.FC<
  React.PropsWithChildren<{ show: boolean; overlay?: boolean }>
> = ({ show, overlay = false, children }) => (
  <Presence
    present={show}
    animationName={{ _open: "fade-in", _closed: "fade-out" }}
    animationDuration="slow"
    style={overlay ? { position: "absolute", inset: 0 } : undefined}
  >
    {children}
  </Presence>
);

/* 本体 ------------------------------------------------- */
export type SectionProps = {
  title: string;
  items: CardData[] | null; // null = loading
};

type SectionPhase = "loading" | "empty" | "data";

const getPhase = (items: CardData[] | null): SectionPhase =>
  items === null ? "loading" : items.length === 0 ? "empty" : "data";

export const Section: React.FC<SectionProps> = ({ title, items }) => {
  const phase = getPhase(items);

  return (
    <Box
      p={6}
      borderWidth="1px"
      borderColor="gray.300"
      rounded="lg"
      shadow="sm"
    >
      <Heading as="h2" size="lg">
        {title}
      </Heading>

      <Box position="relative" minH="150px">
        <FadeBox show={phase === "data"}>
          <CardGroup items={items ?? []} />
        </FadeBox>

        <FadeBox show={phase === "loading"} overlay>
          <Center py={8} h="full">
            <Spinner size="lg" />
          </Center>
        </FadeBox>

        <FadeBox show={phase === "empty"} overlay>
          <Center h="full">
            <EmptyState.Root>
              <EmptyState.Content>
                <EmptyState.Indicator>
                  <TbCircleDotted />
                </EmptyState.Indicator>
                <VStack textAlign="center">
                  <EmptyState.Title>No data</EmptyState.Title>
                </VStack>
              </EmptyState.Content>
            </EmptyState.Root>
          </Center>
        </FadeBox>
      </Box>
    </Box>
  );
};
