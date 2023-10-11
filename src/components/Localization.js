import React from "react";
import { Dropdown, DropdownToggle } from "react-bootstrap";
import { languages } from "../utils/languages/lang";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../store/language/languageSlice";

const Localization = () => {
    const dispatch = useDispatch();
    const language = useSelector((state) => state.language);

    console.log(language);
    const handleSelect = (event) => {
        console.log(event.target);
        // dispatch(changeLanguage(event));
    };

    return (
        <Dropdown onSelect={handleSelect}>
            <DropdownToggle>Bir dil seciniz</DropdownToggle>
            <Dropdown.Menu>
                {languages.map((language) => (
                    <Dropdown.Item
                        key={language.value}
                        eventKey={language.value}
                        onClick={handleSelect}>
                        {language.name}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default Localization;
