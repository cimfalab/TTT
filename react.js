// Example 1
import React from 'react';

class Hello extends React.Component {
    render() {
        return <textarea>Hi</textarea>; // REACT_DEPRECATED_DOM_ELEMENT_PROP alarm because child node is set on 'textarea' element.
    }
}

// Example 2
import React from 'react';

class Hello extends React.Component {
    render() {
        return (
            <select>
                <option value="hi">Hi</option>
                <option selected value="hello">Hello</option> {/* REACT_DEPRECATED_DOM_ELEMENT_PROP alarm because 'selected' prop is set on 'option' element. */}
           </select>
        );
    }
}
