'use client'
import { Box, useColorModeValue } from '@chakra-ui/react';
import ReactQuill from 'react-quill';
import './editor.css';

interface IQuillEditor {
  placeholder?: string
}

const QuillEditor = ({ ...rest }: IQuillEditor) => {

  const className = useColorModeValue('quill-light', 'quill-dark')

  return <Box>
    <ReactQuill className={className + " quill-editor"} theme="snow" {...rest} />
  </Box>
}

export default QuillEditor