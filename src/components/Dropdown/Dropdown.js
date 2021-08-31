import React from 'react';
import { useState } from 'react';
import './Dropdown.css';

function defaultOnchange(value) {
    console.log(value);
}

function Dropdown({ title, options = [], multiSelect = false, onChange = defaultOnchange }) {

    const [open, setOpen] = useState(false);

    const [selection, setSelection] = useState([]);


    const toggle = () => setOpen(!open);



    const handleClick = item => {

        if (!selection.some(current => current.id === item.id)) {
            if (!multiSelect) {
                setSelection([item]);
                setOpen(false);
                onChange(item.value);

            } else if (multiSelect) {
                setSelection([...selection, item]);
                onChange(selection);
            }
        } else {
            let selectionAfterRemoval = selection;
            selectionAfterRemoval = selectionAfterRemoval.filter(
                current => current.id !== item.id
            );
            setSelection([...selectionAfterRemoval]);
            setOpen(false);
            onChange(selectionAfterRemoval);
        }


    }

    const isItemInSelection = (item) => {
        if (selection.some(current => current.id === item.id)) {
            return true;
        }
        return false;
    }


    return (
        <div className="dropdown-wrapper">
            <div
                tabIndex={0}
                className="dropdown-header"
                role="button"
                onKeyPress={() => toggle()}
                onClick={() => toggle()}>

                <div className="dropdown-header-title">
                    <p>{!multiSelect ? selection[0] ? selection[0].label : title : title}</p>
                </div>
                <div className="dropdown-header-action">
                    <p>{open ? 'Close' : 'Open'}</p>
                </div>

            </div>
            {open && (
                <ul className="dropdown-items">
                    {options.map((item, index) => (
                        <li className="dropdown-item" key={index}>
                            <button type="button" onClick={() => {
                                handleClick(item)
                            }}>
                                <span>{item.label}</span>
                                <span>{isItemInSelection(item) && 'Selected'}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}

        </div>



    )
}


export default Dropdown;