import React from 'react';
import { useState,useRef,useEffect } from 'react';
import './Dropdown.css';

function defaultOnchange(value) {
    console.log(value);
}

function Dropdown({ title, options = [], multiSelect = false, onChange = defaultOnchange }) {

    // useState
    const [open, setOpen] = useState(false);

    const [selection, setSelection] = useState([]);

    // useRef

    const wrapperRef = useRef(null);


    // useEffect

    useEffect(() => {
       
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                closeDropdown();
            }
        }

       
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);


    // callback Function

    const toggle = () => setOpen(!open);

    const closeDropdown = () => setOpen(false);

    const isOpen = open ? 'open' : '';

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
        <div ref={wrapperRef} className="dropdown-wrapper">
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
                    <p>{open ? <ion-icon name="chevron-up-outline"></ion-icon> : <ion-icon name="chevron-down-outline"></ion-icon>}</p>
                </div>

            </div>

            <ul className={`dropdown-items glass ${isOpen}`}>
                {options.map((item, index) => (
                    <li className="dropdown-item" key={index} onClick={() => {
                        handleClick(item)
                    }}>
                        <button type="button">
                            <span>{item.label}</span>
                            <span>{isItemInSelection(item) && <ion-icon name="checkmark-outline"></ion-icon>}</span>
                        </button>
                    </li>
                ))}
            </ul>

        </div>



    )
}


export default Dropdown;