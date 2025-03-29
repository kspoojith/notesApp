import {createGlobalStyle} from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
 body {
  margin: 0px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
export const NotesContainer = styled.div`
  text-align: center;
  padding: 20px;
`

export const NotesHeading = styled.h1`
  font-family: "Bree Serif", serif;
  color: #4c63b6;
`

export const InputContainer = styled.div`
  background: #ffffff;
  max-width: 550px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Added shadow */
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  max-width: 500px;
  margin: 10px auto;
  padding: 8px;
  border: 1px solid #d8d8d8;
  border-radius: 5px;
`

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  max-width: 500px;
  height: 100px;
  margin: 10px auto;
  padding: 8px;
  border: 1px solid #d8d8d8;
  border-radius: 5px;
`

export const Button = styled.button`
  background-color: #4c63b6;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`

export const NotesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`

export const EmptyNotesImage = styled.img`
  width: 200px;
  margin: 20px auto;
`

export const EmptyText = styled.p`
  font-size: 18px;
  color: #334155;
`
export const NoteCard = styled.div`
  width: 250px;
  padding: 15px;
  border: 1px solid #aab8c8;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`

export const NoteTitle = styled.h3`
  font-size: 18px;
  color: #1e293b;
`

export const NoteText = styled.p`
  font-size: 14px;
  color: #475569;
`
