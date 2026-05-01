import { useState } from 'react'
import Navbar from '../components/common/Navbar'
import PostList from '../components/post/PostList'
import Footer from '../components/common/footer'
import CategoriesPanel from '../components/post/CategoriesPanel'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="bg-[#09090b] min-h-screen text-white flex flex-col font-[Outfit]">
      <Navbar/>
      
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row gap-12 min-h-[calc(100vh-80px)]">
        {/* Left Side: Categories Panel */}
        <aside className="w-full md:w-64 flex-shrink-0 relative">
          <div className="sticky top-20 h-[calc(100vh-80px)] flex flex-col justify-center -ml-8 lg:-ml-12">
            <CategoriesPanel 
              selectedCategory={selectedCategory} 
              setSelectedCategory={setSelectedCategory} 
            />
          </div>
        </aside>
        
        {/* Right Side: Post List */}
        <main className="flex-grow">
          <PostList selectedCategory={selectedCategory} />
        </main>
      </div>

      <Footer/>
    </div>
  )
}

export default Home;