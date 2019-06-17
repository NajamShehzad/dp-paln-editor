import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions'
import HeadingBlock from '../../src/components/HeadingBlock';

const stories = storiesOf('All Components', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

// Knobs for React props
stories.add('Heading Block', () => {
    const headingText = text('Text', 'This is heading text');

    return (
        <HeadingBlock content={headingText} />
    )
});