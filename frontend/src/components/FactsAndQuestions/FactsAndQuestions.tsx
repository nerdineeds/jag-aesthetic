'use client';
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface Question {
  question: string;
  answer: string;
  id: number;
}

interface QuestionsProps {
  questions: Question[];
}

interface OpenQuestionsState {
  [key: number]: boolean;
}

const FactsAndQuestions: React.FC<QuestionsProps> = ({
  questions,
}) => {
  const [openQuestions, setOpenQuestions] =
    useState<OpenQuestionsState>({});

  const toggleQuestion = (id: number): void => {
    setOpenQuestions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="py-12 w-full mx-auto max-w-5xl">
      <h2 className="text-2xl font-medium tracking-tight pb-4">
        Frequently asked questions
      </h2>
      <div className="w-full bg-lightgrey/50 p-3 rounded-3xl grid md:grid-cols-2 gap-4">
        {questions.map((question) => (
          <div
            key={question.id}
            onClick={() => toggleQuestion(question.id)}
            className="bg-white shadow-md rounded-2xl mb-2 w-full cursor-pointer h-fit flex flex-col justify-between items-center"
          >
            <div
              className={`flex w-full px-3 items-center justify-between py-3`}
            >
              <h3 className="font-medium transition-all">
                {question.question}
              </h3>

              <button className="sr-only">
                <FaChevronDown
                  className={`w-3 h-3 transition-transform ${
                    openQuestions[question.id] ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
            {openQuestions[question.id] && (
              <div className="text-base text-muted-foreground transition-all mt-3 bg-gray-50 p-4 rounded-b-lg">
                {question.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FactsAndQuestions;
