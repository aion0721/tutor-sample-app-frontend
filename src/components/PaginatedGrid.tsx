import { Box, SimpleGrid, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { CardComponent } from "./Card";

export type CardData = {
  title: string;
  description: string;
};

type PaginatedGridProps = {
  items: CardData[];
  itemsPerPage?: number;
};

export const PaginatedGrid = ({
  items,
  itemsPerPage = 4,
}: PaginatedGridProps) => {
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const start = page * itemsPerPage;
  const currentItems = items.slice(start, start + itemsPerPage);

  const handlePrev = () => setPage((p) => Math.max(0, p - 1));
  const handleNext = () => setPage((p) => Math.min(pageCount - 1, p + 1));

  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} mb={4}>
        {currentItems.map((item, index) => (
          <CardComponent key={start + index} {...item} />
        ))}
      </SimpleGrid>
      {pageCount > 1 && (
        <Flex justify="center" gap={2}>
          <Button size="sm" onClick={handlePrev} disabled={page === 0}>
            Prev
          </Button>
          <Button
            size="sm"
            onClick={handleNext}
            disabled={page === pageCount - 1}
          >
            Next
          </Button>
        </Flex>
      )}
    </Box>
  );
};
