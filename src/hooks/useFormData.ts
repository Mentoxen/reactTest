import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface IFormFields {
  inputString: string;
  inputWords: string;
}

const useFormData = () => {
  const { register, handleSubmit } = useForm<IFormFields>();
  const [originalSentence, setOriginalSentence] = useState<string[]>();

  const getOriginalSentence = ({ inputString, inputWords }: IFormFields) => {
    const answer: string[] = [];
    let word = '';

    inputString.split('').forEach((value) => {
      word += value;

      if (Array.from(inputWords.split(',')).includes(word)) {
        answer.push(word);
        word = '';
      }
    });

    return answer;
  };

  const onSubmit = (data: IFormFields) => {
    setOriginalSentence(getOriginalSentence(data));
  };

  return {
    onSubmit: handleSubmit(onSubmit),
    originalSentence,
    register
  };
};

export default useFormData;
