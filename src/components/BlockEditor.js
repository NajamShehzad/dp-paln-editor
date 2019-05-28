import React from 'react'
import {
  sortableContainer,
  sortableElement,
} from 'react-sortable-hoc'
import arrayMove from 'array-move'
import { Input } from 'antd';
import 'antd/lib/input/style';

import BlockHandler from './BlockHandler'
import HeadingBlock from './HeadingBlock'
import HtmlBlock from './HtmlBlock'
import ImageBlock from './ImageBlock'
import BLOCK_TYPE from './BlockType'
import PopupMenu from './PopupMenu'
import './BlockEditor.css'

const DragableBlock = sortableElement(({index, type, content, handleDelete, handleClickMenu, handleContentChange}) => {
  switch (type) {
    case BLOCK_TYPE.HEADING:
      // console.log(content);
      return (
        <div>
          <HeadingBlock
            index={index}
            type={type}
            content={content}
            handleContentChange={handleContentChange}
          />
          <BlockHandler index={index} handleDeleteBlock={handleDelete} />
          <PopupMenu index={index} onClickMenu={handleClickMenu} />
        </div>
      )
    case BLOCK_TYPE.HTML:
      return (
        <div>
          <HtmlBlock
            type={type}
            handleContentChange={handleContentChange}
          />
          <BlockHandler index={index} handleDelete={handleDelete} />
          <PopupMenu index={index} onClickMenu={handleClickMenu} />
        </div>
      )
    // case BLOCK_TYPE.IMAGE:
    //   return (
    //     <div>
    //       <ImageBlock type={blockType} handleBlockContent={handleBlockContent} />
    //       <BlockHandler index={index} handleDeleteBlock={handleDeleteBlock} />
    //       <PopupMenu index={index} onClickMenu={handleClickMenu} />
    //     </div>
    //   )
    default:
      break;
  }
});

const SortableContainer = sortableContainer(({children}) => {
  return <div> {children} </div>;
});

class BlockEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      blocks: [],
    };
  }

  handleContentChange = (index, type, content) => {
    var { blocks } = this.state;
    blocks[index - 1] = { type,  content};
    this.setState({ blocks: blocks });
  }

  handleClickMenu = (index, type) => {
    var { blocks } = this.state;
    blocks.splice(index, 0, { type: type, content: '' });
    this.setState({ blocks: blocks });
  }

  handleDelete = (index) => {
    var { blocks } = this.state;
    blocks.splice(index - 1, 1);
    this.setState({ blocks: blocks });
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({blocks}) => ({
      blocks: arrayMove(blocks, oldIndex - 1, newIndex - 1),
    }));
  };

  render() {
    return (
      <div className="blockEditor">
        <Input /*className="nameInput"*/ size='small' placeholder='Name' />
        <PopupMenu index={0} onClickMenu={this.handleClickMenu} />

        <SortableContainer onSortEnd={this.onSortEnd} useDragHandle>
          {this.state.blocks.map((block, key) => {
            return (
              <DragableBlock key={key} 
                index={key + 1}
                type={block.type} 
                content={block.content}
                handleDelete={this.handleDelete}
                handleClickMenu={this.handleClickMenu}
                handleContentChange={this.handleContentChange}
              />
            )})
          }
        </SortableContainer>
      </div>
    );
  }
}

export default BlockEditor;
