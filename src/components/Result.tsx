import React, { FC } from 'react';

const Result: FC<{ originalSentence?: string[] }> = ({ originalSentence }) => {
  if (!originalSentence) {
    return null;
  }

  return (
    <pre className="shadow-md mb-6 bg-slate-800	text-indigo-300 p-4 rounded-md text-sm">
      Result: {JSON.stringify(originalSentence)}
    </pre>
  );
};

export default Result;
