import React from 'react';
import Staff from './Staff';
import './NotesOnStaff.css'

enum NotePosition {
    High,
    Mid,
    Low
}

export interface INoteInMeasure {
    note: string;
    position: NotePosition
}

const notesInMeasure: INoteInMeasure[] = [
    {note: 'F', position: NotePosition.High},
    {note: 'C', position: NotePosition.High},
    {note: 'A', position: NotePosition.High},
    {note: 'G', position: NotePosition.High},
];

const NotesOnStaff = () => {
    return (
        <div className="NotesOnStaff">
            {
                notesInMeasure.map(note => <Staff currentNote={note}/>)
            }
        </div>
    )
};

export default NotesOnStaff;