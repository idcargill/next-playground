import React, { useRef } from 'react';
import { observe } from 'react-intersection-observer';

const Block = ({ title, handleClick, targetRef}) => {
  return (
    <>
      <div 
        className='block' 
        onClick={handleClick}
        ref={targetRef}
      >
        {title}
      </div>
    </>
  )
}

const BlockColumn = ({ handleClick }) => {
  const arr = Array(20).fill().map((x, i) => i);
  return (
    arr.map((block) => (
      <Block 
        key={`id${block}`} 
        title={`block: ${block}`} 
        handleClick={handleClick}
      />
    ))
  )
}

const ForwardBock = ({ title, handleClick, targetRef }) => (
  <Block 
    title={title}
    handleClick={handleClick}
    targetRef={targetRef}
  />
)

const visRef = React.createRef();

const observationOptions = {
  root: null,
  rootMargin: '300px',
  threshold: 0,
}

class IntersectionObserver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    }
  }

  componentDidMount() {
    if (visRef.current) {
      const unObserveFunc = observe(
        visRef.current,
        (isView, element) => {
          if (element.isIntersecting) {
            element.target.style = 'border: 5px solid red;'
            console.log(element);
            unObserveFunc?.();
          }
        },
        observationOptions
        )
    };
  }
  
  handleClick = (ev) => {
    ev.target.style = 'color:blue;'
    this.setState({
      clicks: this.state.clicks + 1,
    })
  }


  render() {

    return (
      <>
        <h1>React Hooks</h1>
        <p>{this.state.clicks}</p>
          <BlockColumn handleClick={(ev) =>this.handleClick(ev)}/> 
          {/* <Block title='observed' targetRef={visRef} /> */}
          <ForwardBock title='forwardBlock' targetRef={visRef} />
      </>
    )
  }
}

export default IntersectionObserver;