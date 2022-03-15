import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import About from "./pages/about"
import NotFound from "./pages/notfound"
import Projects from "./pages/projects"
import Posts from "./pages/posts"
import theme from "./lib/theme"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route index element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </ChakraProvider>
)
