import { ReactNode, useState } from 'react';
import FocusTrap from 'focus-trap-react';
import styles from '../sections/focusTrap/container.module.css';

const Button = ({
  text,
}: {
  text?: string;
  onClick?: (text: string) => void;
}) => (
  <button tabIndex={1} className={styles.focus_button}>
    {text ? text : 'Push to Escape'}
  </button>
);

const FocusableThing = () => (
  <div tabIndex={1} className={styles.focus_thing}></div>
);

const FocusContainer = ({ children }: { children?: ReactNode }) => {
  const [isActive, setIsActive] = useState(false);

  const deactivate = () => {
    setIsActive(false);
  };

  return (
    <>
      <FocusTrap
        focusTrapOptions={{
          // onActivate: () => void,
          onDeactivate: () => {
            console.log('deactivate', this);
          },
          // checkCanReturnFocus: ,
          // initialFocus: () => false,
          // fallbackFocus: 'fallbackFocus',
          // checkCanFocusTrap: promoise,
          clickOutsideDeactivates: true,
        }}
      >
        <div tabIndex={1} className={styles.focus_container}>
          {children}
        </div>
      </FocusTrap>
    </>
  );
};

const FocusTrapPage = () => {
  return (
    <>
      <h1 className={`${styles.focus_title} fallbackFocus`}>Focus Trap</h1>
      <div className={styles.page_grid}>
        <FocusContainer>
          <div className={styles.container_grid}>
            <FocusableThing />
            <FocusableThing />
            <FocusableThing />
            <FocusableThing />
          </div>
          <Button />
        </FocusContainer>

        <FocusContainer>
          <div className={styles.container_grid}>
            <FocusableThing />
            <FocusableThing />
            <FocusableThing />
            <FocusableThing />
          </div>
          <Button />
        </FocusContainer>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gridColumn: 2,
            gridRow: 1,
            gridRowEnd: 3,
          }}
        >
          <Button text="Focus on 1" />
          <Button text="Focus on 2" />
          <Button text="Focus on 3" />
          <Button text="Focus on 4" />
        </div>

        <FocusContainer>
          <div className={styles.container_grid}>
            <FocusableThing />
            <FocusableThing />
            <FocusableThing />
          </div>
          <Button />
        </FocusContainer>

        <FocusContainer>
          <div className={styles.container_grid}>
            <FocusableThing />
            <FocusableThing />
            <FocusableThing />
          </div>
          <Button />
        </FocusContainer>
      </div>
    </>
  );
};

export default FocusTrapPage;
