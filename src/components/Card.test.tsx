import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { describe, it, expect } from 'vitest'
import { CardComponent } from './Card'


describe('CardComponent', () => {
  it('renders given title and description', () => {
    render(
      <ChakraProvider value={defaultSystem}>
        <CardComponent title="Hello" description="World" />
      </ChakraProvider>
    )
    expect(screen.getByRole('heading', { name: 'Hello' })).toBeInTheDocument()
    expect(screen.getByText('World')).toBeInTheDocument()
  })
})
