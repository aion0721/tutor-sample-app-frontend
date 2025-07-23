import {
  Box,
  SimpleGrid,
  Button,
  Flex,
  PaginationRoot,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationItems,
  PaginationPageText,
} from "@chakra-ui/react";
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

export const PaginatedGrid = ({ items, itemsPerPage = 2 }: PaginatedGridProps) => {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const start = (page - 1) * itemsPerPage;
  const currentItems = items.slice(start, start + itemsPerPage);

  return (
    <Box>
      <Box overflowX="auto">
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap={4}
          mb={4}
          w="max-content"
        >
          {currentItems.map((item, index) => (
            <CardComponent key={start + index} {...item} />
          ))}
        </SimpleGrid>
      </Box>
      {pageCount > 1 && (
        <PaginationRoot
          count={items.length}
          page={page}
          pageSize={itemsPerPage}
          onPageChange={(e) => setPage(e.page)}
        >
          <Flex justify="center" gap={2} mt={2}>
            <PaginationPrevTrigger asChild>
              <Button size="sm">Prev</Button>
            </PaginationPrevTrigger>
            <PaginationItems
              render={(p) => (
                <Button
                  size="sm"
                  variant={p.value === page ? "solid" : "outline"}
                >
                  {p.value}
                </Button>
              )}
            />
            <PaginationNextTrigger asChild>
              <Button size="sm">Next</Button>
            </PaginationNextTrigger>
          </Flex>
          <Flex justify="center" mt={1}>
            <PaginationPageText format="compact" />
          </Flex>
        </PaginationRoot>
      )}
    </Box>
  );
};
