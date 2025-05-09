import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CoursesPage from "./pages/CoursesPage"
import AboutUsPage from "./pages/AboutUsPage"
import PageNotFound from "./pages/404Page"
import ProductsPage from "./pages/ProductsPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import Programmers from "./components/Programmers"
// import LandingPage from "./pages/LandingPage"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        {/* <Route path="/landing" element={<LandingPage/>}/> */}
        <Route path="/landing" element={<Navigate to="/" replace/>}/>
        <Route path="/courses" element={<CoursesPage/>}/>
        {/* <Route path="/about-us" element={<AboutUsPage/>}/> */}
        <Route path="/about-us" element={<AboutUsPage/>}>
          <Route path="programmers" element={<Programmers/>}/>
          <Route path="users" element={<div>Users</div>}/>
        </Route>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/products/:id" element={<ProductDetailsPage/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
