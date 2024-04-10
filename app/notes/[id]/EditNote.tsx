"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function EditNote({ note }: any) {
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    const router = useRouter()

    const update = async () => {
        await fetch(`http://127.0.0.1:8090/api/collections/Notes/records/${note.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                content,
            }),
        });
    };

    return (
        <form onSubmit={update}>
            <h3>Update a note</h3>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">Update Note</button>
        </form>
    );
}
