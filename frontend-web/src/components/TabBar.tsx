import { useState, type JSX } from "react";

export default function Admin({sections}: {sections: Record<string, JSX.Element>}): JSX.Element {
    const [element, setElement] = useState<JSX.Element>(<></>);
    const [currentSection, setCurrentSection] = useState<string>("");

    return (
        <>
            <div role="group">
                {Object.entries(sections).map(([key, component]) => (
                    <button
                        key={key}
                        type="button"
                        disabled={currentSection === key}
                        onClick={(): void => {
                            setElement(component);
                            setCurrentSection(key);
                        }}
                    >
                        {key}
                    </button>
                ))}
            </div>

            {element}
        </>
    );
}
