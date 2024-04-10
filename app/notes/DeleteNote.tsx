"use client"

import { useRouter } from 'next/navigation';

export default function DeleteNote({ note }: any) {

    const router = useRouter()

    const deleteNote = async () => {
        await fetch(`http://127.0.0.1:8090/api/collections/Notes/records/${note.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-store'
        });
        router.push('/notes')
        router.refresh()
    };

    return (
        <button onClick={deleteNote}>
            Delete
        </button>

    )
}
