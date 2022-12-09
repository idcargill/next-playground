import React from 'react';
import styles from '../sections/ref/ref.module.css'

type person = {
  name: string;
  food: string;
}

const data: person[] = [
  {
    name: 'Ian',
    food: 'sushi',
  },
  {
    name: 'Krista',
    food: 'noodles',
  },
  {
    name: 'Mike',
    food: 'not fish',
  },
  {
    name: 'Kelly',
    food: 'nothing',
  }
];



export async function getServerSideProps() {
  return {
    props: {
      title: 'Callback Refs used in Array',
      data: data,
    }
  }
}


class ColorCycle {
  iteration: number;
  colors = [
    '#e29d9d',
    '#9de59d',
    '#edb0ed',
    '#8181e1',
  ];

  constructor() {
    this.iteration = 0;
    this.colors = this.colors;
  }
  
  public getColor() {
    this.iteration +=1;
    if (this.iteration >3) {
      this.iteration = 0;
    }
    return this.colors[this.iteration] 
  }
}


type RefProps = any;
type RefState = any;

class RefPage extends React.Component<RefProps, RefState> {
  itemRef: any[];
  listRef: any[];
  colorPicker: ColorCycle;

  constructor(props: RefProps) {
    super(props)

    this.itemRef = [];
    this.listRef = [];
    this.colorPicker = new ColorCycle();
  }


  handleClick = (ev) => {
    const target = this.itemRef[ev.target.id];
    target.style.backgroundColor= this.colorPicker.getColor();
  };

  callbackRef = (node) => {
    if (node) {
      const key = node.id.toString();
      this.itemRef[key] = node;
    }
  }

  handleReset = () => {
    this.itemRef.forEach((item) => {
      item.style.backgroundColor='inherit'
    });
  };

  handleListRef = (node) => {
    if (node) {
      const key = node.id;
      this.listRef[key] = node;
    }
  }

  handleListTransform = (ev) => {
    const id = ev.target.id;
    const target = this.listRef[id];
    target.className = styles.magnify_list_item;
  }
  
  render() {
    const { title, data } = this.props;

    return (
      <div className={styles.page_container}>
        <h1>{title}</h1>
        <p>Click items to cycle color.</p> 
        <p>Callback ref and a DOM id link the elements into a Ref array</p>
        <div className={styles.list_container}>
          <button className={styles.button} onClick={this.handleReset}>Reset</button>
          {data.map((item: person, idx: number) => {
            return (
              <p 
                key={idx} 
                ref={this.callbackRef} id={String(idx)} 
                className={styles.list_container_item} 
                onClick={this.handleClick}
              >
                {item.name} eats {item.food}
              </p>
              );
            })}
        </div>
        
        <div className={styles.second_container}>
          <h2>Transform items with refs in array</h2>
          <ol className={styles.ordered_list}>
            {data.map((item:person, idx:string) => (
              <li 
              className={styles.ordered_list_item} 
              key={`${item.name}${Math.random() *100}`}
              id={`${String(Math.random() * 100)}`}
              ref={this.handleListRef}
              onClick={this.handleListTransform}
              >
                {item.name}
              </li>
              ))
            }
          </ol>
        </div>

      </div>
    )
  }
}


export default RefPage;
