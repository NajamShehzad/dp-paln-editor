import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, object, array, files } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions'
import HeadingBlock from '../../src/components/HeadingBlock';

const stories = storiesOf('All Components', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

// Knobs for React props
stories.add('Heading Block', () => {

    const label = 'Object';
    const defaultValue = {
        backgroundColor: 'red'
    };
    const groupId = 'GROUP-ID1';

    const newValue = object(label, defaultValue);

    const array123 = array("array123", ["najam", newValue])

    const label1 = 'Styles11';
    const value1 = object(label1 + "123456", { newValue, name: "najam", arra1y: [array123,array123] });
    console.log(value1);

    // const value = object(label, defaultValue, 313);
    const headingText = text('Text', 'This is heading text');
    // const headingText1 = text('Text2', 'This is heading text', 313);
    // console.log(value);
    return (
        <HeadingBlock content={headingText} array123={array123} value={value1} />
    )
});