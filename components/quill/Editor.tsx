import { Box, useColorModeValue } from '@chakra-ui/react';
import ReactQuill from 'react-quill';
import './editor.css';

interface QuillEditor {
  placeholder?: string
}

export const QuillEditor = ({ ...rest }: QuillEditor) => {

  const className = useColorModeValue('quill-light', 'quill-dark')

  return <Box>
    <ReactQuill className={className + " quill-editor"} theme="snow" {...rest} />
  </Box>
}