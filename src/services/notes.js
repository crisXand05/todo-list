const url = 'https://notes-api-backend.onrender.com/api/note'

export const getAll = () =>fetch(url).then(res => res.json())

export const create = (note) => fetch(url,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
}).then( res => res.json())
