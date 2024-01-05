import React, { useState } from "react";
import AccordianItem from "./AccordianItem";

const faqs = [
  {
    id: 1,
    question: "What is Netflix Gpt?",
    answer: `Netflix is a streaming service that offers a wide variety of
    award-winning TV shows, movies, anime, documentaries and more – on
    thousands of internet-connected devices. You can watch as much as you
    want, whenever you want, without a single ad – all for one low monthly
    price. There's always something new to discover, and new TV shows and
    movies are added every week!`,
  },
  {
    id: 2,
    question: "How much does netflix Gpt cost?",
    answer: "it's a personal project so it's free!",
  },
  {
    question: "Where can I watch?",
    answer: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
  },
  {
    id: 3,
    question: "What can I watch on Netflix Gpt?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    id: 4,
    question: "Is Netflix Gpt good for kids?",
    answer: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
  },
];

function Accordian() {
  const [index, setIndex] = useState(null);
  return (
    <div className="pt-16 pb-14 border-b-[6px] border-gray-800 bg-black">
      <div className="w-[60%] mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-5">
          Frequently Asked Questions
        </h1>
        <div className="flex flex-col gap-[7px]">
          {faqs.map((faq, idx) => (
            <AccordianItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isClicked={index === idx}
              setIndex={setIndex}
              idx={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Accordian;
