import React from 'react'
import Input from '../components/Input'
import useFormData from '../hooks/useFormData'
import Result from '../components/Result'
import TestingData from '../components/TestingData'

const Form = () => {
  const { register, originalSentence, onSubmit } = useFormData()

  return (
    <form className="max-w-sm w-full m-auto text-center" onSubmit={onSubmit}>
      <TestingData />
      <Result originalSentence={originalSentence} />
      <Input
        id="inputString"
        placeholder="bedbathandbeyond"
        label="Input string:"
        register={register('inputString', { required: true })}
      />
      <Input
        id="inputWords"
        placeholder="'bed', 'bath', 'bedbath', 'and', 'beyond'"
        label="Input words:"
        register={register('inputWords', { required: true })}
      />
      <button className="text-sm inline-block mx-auto py-2 px-4 bg-blue-300 hover:bg-blue-500 text-white transition">
        Submit
      </button>
    </form>
  )
}

export default Form
