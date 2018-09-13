// Example 1
import React from 'react';

class Hello extends React.Component {
    render() {
        return <textarea></textarea>; // REACT_DEPRECATED_DOM_ELEMENT_PROP alarm because child node is set on 'textarea' element.
    }
}
