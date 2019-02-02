import React from 'react';
import './Staff.css';
import { treble } from '../util/notes';
import { Note } from './Note';
import { INoteInMeasure } from './NotesOnStaff';

const isEven = (index: number) => index % 2 === 0;

interface IProps {
    currentNote: INoteInMeasure;
}

const Staff = ({ currentNote }: IProps) => {
    let position = -1;
    return (
        <div className="staff">
            {treble.map((note, index) => {
                const isMatch = currentNote.note === note;
                isMatch && position++;
                    return (
                        <div className={isEven(index) ? 'line' : 'space'} data-value={note}>
                            {isMatch && position === currentNote.position && <Note/>}
                        </div>
                    );
                }
            )}
        </div>
    )
};

export default Staff;