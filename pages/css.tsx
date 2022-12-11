import React from 'react';
import ReactCSSTransitionGroup, { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from '../sections/cssPage/style.module.css';

const data = [
  {
    name: 'Ian',
    title: 'dude'  
  },
  {
    name: 'Mike',
    title: 'rig',
  },
  {
    name: 'Alex',
    title: 'hermit'
  }
];

type ListItemProps = {
  name: string;
  id: string;
  key?: number;
  title?: string;
  ref?: any;
  onClick?: (_e: any) => void;
}

const ListItem = React.forwardRef((props:any, ref) => (
  <li 
    className={styles.list_item} 
    ref={ref} 
    onClick={props.onClick}
    id={props.id}
  >
    {props.name}
  </li>
));

ListItem.displayName = 'ListItem';



type State = any;
type Props = any;

class CssPage extends React.Component<State,Props> {
  itemRef: any[];
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    }
    
    this.itemRef = [];
  }

  addData = () => {
    const newData = [...this.state.data, { name: 'Frank', title: 'Punisher' }];
    this.setState({ data: newData });
  }

  handleClick = (e:any) => {
    const id = e.target.id;
    this.setState({
      data : this.state.data.filter((item:any, idx:any) => String(idx) !== id),
    });

  }

  handleRef = (node) => {
    if (node) {
      const key = node.id;
      this.itemRef[key] = node;
    }
  }

  render() {

    return (
      <>
      <h1>List Reference</h1>
        <TransitionGroup component='ul'>
        {this.state.data.map((item, idx) => (
          <CSSTransition key={idx} in={this.state.data} timeout={1500} classNames={styles.list_item}>
            <ListItem 
              key={idx} 
              ref={this.handleRef} 
              name={item.name} 
              id={`${idx}`} 
              onClick={this.handleClick}
            />
          </CSSTransition>
        ))}
        </TransitionGroup>
        <button onClick={this.addData}>add</button>
    </>
  )
  
}

}



export default CssPage;
