import { useState } from "react";
import { motion } from "framer-motion";
import { Cat } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const catImages = [
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
];

const catFacts = [
  "Cats spend 70% of their lives sleeping.",
  "A group of cats is called a 'clowder'.",
  "Cats have over 20 vocalizations, including the famous meow.",
  "A cat's sense of smell is 14 times stronger than a human's.",
  "Cats can jump up to 6 times their length.",
  "The first cat in space was a French cat named Felicette in 1963.",
  "Cats can't taste sweetness.",
  "A cat's hearing is much more sensitive than a human's or dog's.",
];

const Index = () => {
  const [currentFact, setCurrentFact] = useState(catFacts[0]);

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * catFacts.length);
    setCurrentFact(catFacts[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-12"
        >
          <Cat className="h-16 w-16 text-blue-500 mr-4" />
          <h1 className="text-5xl font-bold text-gray-800">All About Cats</h1>
        </motion.div>

        <Carousel className="mb-12">
          <CarouselContent>
            {catImages.map((src, index) => (
              <CarouselItem key={index}>
                <img
                  src={src}
                  alt={`Cat ${index + 1}`}
                  className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-xl text-gray-700 mb-8 text-center"
        >
          Cats are fascinating creatures that have been domesticated for thousands of years. 
          Known for their independence, agility, and affectionate nature, cats have become 
          one of the most popular pets worldwide.
        </motion.p>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cat Fact Generator</h2>
          <p className="text-lg text-gray-700 mb-4">{currentFact}</p>
          <Button onClick={getRandomFact} className="w-full">Get New Fact</Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">More Interesting Cat Facts</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {catFacts.slice(0, 5).map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
