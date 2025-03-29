import {NoteCard, NoteTitle, NoteText} from '../../styledComponents'

const NoteItem = ({noteDetails}) => {
  const {title, note} = noteDetails

  return (
    <NoteCard>
      <NoteTitle>{title}</NoteTitle>
      <NoteText>{note}</NoteText>
    </NoteCard>
  )
}

export default NoteItem
