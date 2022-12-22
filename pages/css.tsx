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
    className={styles.item}
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
      isEnter: false,
      loadItem: false,
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
      loadItem: true,
    });

  }

  handleRef = (node) => {
    if (node) {
      const key = node.id;
      this.itemRef[key] = node;
    }
  }

  handeFade = () => {
    this.setState({ isEnter: !this.state.isEnter });
  }

  render() {

    return (
      <>
      <CSSTransition
        key={'hi'}
        in={this.state.isEnter}
        timeout={3000}
        classNames={{
          enter: styles['kitten-enter'],
          enterActive: styles['kitten-enter-active'],
          enterDone: styles['kitten-enter-done']
        }}
      >
        <h1 className={styles.kitten} onClick={this.handeFade}>List Reference</h1>
      </CSSTransition>
      <TransitionGroup className="list">
      <ul>
        {this.state.data.lenght < 2
          ? null
          : (
            <>
          {this.state.data.map((item, idx) => (
            <CSSTransition 
              key={item.name}
              in={true}
              timeout={1000}
              classNames={{
                enter: styles['item-enter'],
                enterActive: styles['item-enter-active'],
                enterDone: styles['item-enter-end'],
                exit: styles['item-exit'],
                exitActive: styles['item-exit-active'],
                exitDone: styles['item-exit-end'],
              }}
            >
              <ListItem
                key={item.name} 
                ref={this.handleRef} 
                name={item.name} 
                id={`${idx}`} 
                onClick={this.handleClick}
              />
            </CSSTransition>
          ))}
          </>
          )}
        </ul>
        <button onClick={this.addData}>add</button>
      </TransitionGroup>
    </>
  )
  
}

}



export default CssPage;
