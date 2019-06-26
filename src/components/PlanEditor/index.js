import React from 'react'
import {
  sortableContainer,
  sortableElement,
} from 'react-sortable-hoc'
import RichTextEditor from 'react-rte'
// import { Gluejar } from 'react-gluejar'

import arrayMove from 'array-move'
import { Input, Button } from 'antd';
import 'antd/lib/input/style/index.css';

import BLOCK_TYPE from './BlockType'
import HeadingBlock from './HeadingBlock/'
import HtmlBlock from './HtmlBlock/'
import ImageBlock from './ImageBlock/'
import BlockHandler from './BlockHandler/'
import AddBlockMenu from './AddBlockMenu/'
import './BlockEditor.css'
import RichTextHtml from './RichTextHtml';

const DragableBlock = sortableElement(({ index, type, content, width, handleDelete, handleWidth, handleClickMenu, handleContentChange }) => {
  switch (type) {
    case BLOCK_TYPE.HEADING:
      return (
        <div>
          <HeadingBlock
            index={index}
            type={type}
            content={content}
            handleContentChange={handleContentChange}
          />
          <BlockHandler index={index} type={type} content={content} handleDelete={handleDelete} handleWidth={handleWidth} />
          <AddBlockMenu index={index} onClickMenu={handleClickMenu} />
        </div>
      )
    case BLOCK_TYPE.HTML:
      return (
        <div>
          <RichTextHtml
            index={index}
            type={type}
            content={content}
            handleContentChange={handleContentChange}
          />
          {/* <HtmlBlock
            index={index}
            type={type}
            content={content}
            handleContentChange={handleContentChange}
          /> */}
          <BlockHandler index={index} type={type} content={content} handleDelete={handleDelete} handleWidth={handleWidth} />
          <AddBlockMenu index={index} onClickMenu={handleClickMenu} />
        </div>
      )
    case BLOCK_TYPE.IMAGE:
      console.log("Content is here ===>", content)
      return (
        <div>
          <ImageBlock
            index={index}
            type={type}
            content={content}
            width={width}
            handleContentChange={handleContentChange}
          />
          <BlockHandler index={index} type={type} content={content} handleDelete={handleDelete} handleWidth={handleWidth} />
          <AddBlockMenu index={index} onClickMenu={handleClickMenu} />

        </div>
      )
    default:
      break;
  }
});

const SortableContainer = sortableContainer(({ children }) => {
  return <div> {children} </div>;
});

class PlanEditor extends React.Component {
  constructor(props) {
    super(props);
    const { blocks } = this.props
    let recivedBlock = [{ type: "HTML", content: "<div><h1>Najam Shehzad Butt </h1></div>" }]
    let finalArrayToState = recivedBlock.map(data=>{
      if (data.type == "HTML") {
        console.log("ContentHere ====>>>", data.content.toString('html'));
        return {...data,content:RichTextEditor.createValueFromString(data.content,'html')}
      }
    })
    this.state = {
      name: '',
      blocks: finalArrayToState ? finalArrayToState : [],
    };
  }


  handleContentChange = (index, type, content) => {
    var { blocks } = this.state;
    blocks[index - 1] = { type, content };
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

  handleWidth = (index, width) => {
    var { blocks } = this.state;
    var type = blocks[index - 1].type;
    var content = blocks[index - 1].content;
    blocks[index - 1] = { type, content, width: width };
    this.setState({ blocks: blocks });
  }

  onSave = () => {
    console.log("Save Click ==>", this.state)
    const { blocks } = this.state;
    blocks.map(singleData => {
      if (singleData.type == "HTML") {
        console.log("ContentHere ====>>>", singleData.content.toString('html'));
      }
    })
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ blocks }) => ({
      blocks: arrayMove(blocks, oldIndex - 1, newIndex - 1),
    }));
  };

  render() {
    return (
      <div className="blockEditor">
        <Input placeholder='Name' />
        <AddBlockMenu index={0} onClickMenu={this.handleClickMenu} />

        <SortableContainer onSortEnd={this.onSortEnd} useDragHandle>
          {this.state.blocks.map((block, key) => {
            return (
              <DragableBlock
                key={key}
                index={key + 1}
                type={block.type}
                content={block.content}
                width={block.width}
                handleDelete={this.handleDelete}
                handleWidth={this.handleWidth}
                handleClickMenu={this.handleClickMenu}
                handleContentChange={this.handleContentChange}
              />
            )
          })
          }
        </SortableContainer>
        <Button onClick={this.onSave} >Save Curent Plan</Button>
      </div>
    );
  }
}

export default PlanEditor;
