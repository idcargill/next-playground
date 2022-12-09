import React, { MutableRefObject, useRef } from 'react';


interface DragonProps {
  name: string;
}

class Dragon1 extends React.Component<DragonProps> {
  public name: string;
  public targetRef: React.RefObject<HTMLInputElement>;

  constructor(props: DragonProps) {
    super(props);
    this.name = props.name;
    this.targetRef = React.createRef();
  }

  handleClick = () => {
    if (this.targetRef.current) {
      console.log(this.targetRef.current);
      this.targetRef.current.focus();
    }
  }

  render() {
    console.log('Dragon1 Render');


    return (
      <div>
        <div style={{ height: '200px', backgroundColor: 'green' }}>
          <input ref={this.targetRef} name="name" type="text"></input>
        </div>
        <p onClick={this.handleClick}>Dragon: {this.name}</p>
      </div>
    )
  }
}


const Dragon2 = ({name}: DragonProps) => {
  const targetRef = useRef();

  const handleClick = () => {
    if (targetRef?.current) {
      targetRef.current.innerText = "BAM! SHARKNADO!";
    }
  }

  return (
    <>
      <div ref={targetRef as any}></div>
      <p onClick={handleClick}>Dragon 2: {name} </p>
    </>
  )

}

export const RefExample = () => (
  <>
    <Dragon1 name={"Fluffykins"} />
    <Dragon2 name="Frank"/>
  </>
)