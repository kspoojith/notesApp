import {useState} from 'react'
import {
  NotesContainer,
  NotesHeading,
  Input,
  TextArea,
  Button,
  NotesList,
  EmptyNotesImage,
  EmptyText,
  InputContainer,
} from '../../styledComponents'
import NoteItem from '../NoteItem'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [notesList, setNotesList] = useState([])

  const addNote = () => {
    if (title.trim() !== '' && note.trim() !== '') {
      setNotesList([...notesList, {id: Date.now(), title, note}])
      setTitle('')
      setNote('')
    }
  }

  return (
    <NotesContainer>
      <NotesHeading>Notes</NotesHeading>
      <InputContainer>
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextArea
          placeholder="Take a Note..."
          value={note}
          onChange={e => setNote(e.target.value)}
        />
        <Button onClick={addNote}>Add</Button>
      </InputContainer>

      {notesList.length === 0 ? (
        <div>
          <EmptyNotesImage
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <EmptyText>No Notes Yet</EmptyText>
        </div>
      ) : (
        <NotesList>
          {notesList.map(eachNote => (
            <NoteItem key={eachNote.id} noteDetails={eachNote} />
          ))}
        </NotesList>
      )}
    </NotesContainer>
  )
}

export default Notes
