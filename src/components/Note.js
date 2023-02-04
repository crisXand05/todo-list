const Note = ({content, important})=> <li>{content} <strong>{important ? 'Importante' : 'No importante'}</strong></li>

export default Note