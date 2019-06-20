import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, files } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions'
import ImageBlock from '../../src/components/ImageBlock';

const stories = storiesOf('All Components', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

// Knobs for React props
stories.add('Image Block', () => {


    const label = 'Images';
    const defaultValue = [];

    let value = files(label, defaultValue);
    if (value.length) {
        let data = dataURLtoBlob(value[0]);
        console.log("File From Data URL", data);
        let newFIle = blobToFile(data, "myFile")
        var file = new File([newFIle], "name");
        console.log("From StoryBook", file)
        value = [file];
    }
    console.log(value)
    return (
        <ImageBlock content={value} />
    )
});

function blobToFile(theBlob, fileName) {
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    return theBlob;
}
function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}