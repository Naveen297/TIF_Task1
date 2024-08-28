import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "./card";
import img1 from "../Assets/1.jpeg";
import img2 from "../Assets/2.jpeg";
import img3 from "../Assets/3.jpeg";
import img4 from "../Assets/4.jpeg";
import img5 from "../Assets/5.jpeg";
import img6 from "../Assets/6.jpeg";

const ArticlesSection = () => {
  const cardsData = [
    { imgSrc: img1, title: "Grilled Tomatoes at Home", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." },
    { imgSrc: img2, title: "Snacks for Travel", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." },
    { imgSrc: img3, title: "Post-workout Recipes", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." },
    { imgSrc: img4, title: "How To Grill Corn", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." },
    { imgSrc: img5, title: "Crunchwrap Supreme", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." },
    { imgSrc: img6, title: "Broccoli Cheese Soup", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(cardsData.length / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardsData.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (direction) => {
    setCurrentPage((prev) => {
      if (direction === "next") {
        return prev < totalPages ? prev + 1 : prev;
      } else {
        return prev > 1 ? prev - 1 : prev;
      }
    });
  };

  return (
    <div className="md:ml-[100px] md:mt-[50px]">
      <p className="text-[#0E2368] font-bold GAP-4 md:font-medium font-sans md:text-[56px] text-[28px] text-center md:text-left md:mt-4 mt-4">
        Latest Articles
      </p>
      <div className="relative mt-8 mr-4 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            {currentCards.map((card, index) => (
              <Card key={index} imgSrc={card.imgSrc} title={card.title} description={card.description} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-center mt-8">
        <button 
          onClick={() => paginate("prev")} 
          className="px-2 py-1 rounded-lg mx-2 bg-white border border-[#0E2368] text-[#0E2368] hover:bg-[#0E2368] hover:text-white transition-colors"
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        <span className="text-[#0E2368] font-sans font-semibold">
          {currentPage}/{totalPages}
        </span>
        <button 
          onClick={() => paginate("next")} 
          className="px-2 py-1 rounded-lg mx-2 bg-white border border-[#0E2368] text-[#0E2368] hover:bg-[#0E2368] hover:text-white transition-colors"
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ArticlesSection;
