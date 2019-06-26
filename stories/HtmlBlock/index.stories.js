import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import HtmlBlock from '../../src/components/PlanEditor/HtmlBlock';
import RichTextHtml from '../../src/components/PlanEditor/RichTextHtml';

const stories = storiesOf('All Components', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

// Knobs for React props
stories.add('Html Block', () => {
    return (
        <RichTextHtml handleContentChange={action('RichTextEditorChangeAction')} content="" />
    )
});