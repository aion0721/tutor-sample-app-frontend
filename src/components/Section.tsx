import {
  Box,
  Center,
  EmptyState,
  Heading,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import CardGroup from "./CardGroup";
import type { CardData } from "@/types";
import { TbCircleDotted } from "react-icons/tb";
import React from "react";

export type SectionProps = {
  title: string;
  items: CardData[] | null; // null = loading
};

const SectionFrame: React.FC<{ title: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => (
  <Box
    p={6}
    borderWidth="1px"
    borderColor="gray.300"
    borderRadius="lg"
    boxShadow="sm"
  >
    <Heading as="h2" size="lg" mb={4}>
      {title}
    </Heading>

    {children}
  </Box>
);

export const Section: React.FC<SectionProps> = ({ title, items }) => {
  /* ─── Loading ─── */
  if (items === null) {
    return (
      <SectionFrame title={title}>
        <Center py={8}>
          <Spinner size="lg" />
        </Center>
      </SectionFrame>
    );
  }

  /* ─── Empty ─── */
  if (items.length === 0) {
    return (
      <SectionFrame title={title}>
        <EmptyState.Root>
          <EmptyState.Content>
            <EmptyState.Indicator>
              <TbCircleDotted />
            </EmptyState.Indicator>
            <VStack textAlign="center">
              <EmptyState.Title>Empty</EmptyState.Title>
            </VStack>
          </EmptyState.Content>
        </EmptyState.Root>
      </SectionFrame>
    );
  }

  /* ─── Data ─── */
  return (
    <SectionFrame title={title}>
      <CardGroup items={items} />
    </SectionFrame>
  );
};
