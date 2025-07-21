// src/components/CardComponent.tsx
import { Box, Heading, Text } from "@chakra-ui/react";

type CardProps = {
  title: string;
  description: string;
};

export const CardComponent = ({ title, description }: CardProps) => (
  <Box
    bg="white"
    p={4}
    borderRadius="md"
    boxShadow="sm"
    border="1px solid"
    borderColor="gray.200"
    _hover={{ boxShadow: "md" }}
  >
    <Heading as="h4" size="md" mb={2}>
      {title}
    </Heading>
    <Text fontSize="sm" color="gray.600">
      {description}
    </Text>
  </Box>
);
