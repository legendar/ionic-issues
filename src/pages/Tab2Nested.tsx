import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton, useIonRouter } from '@ionic/react';
import './Tab2.css';
import Tab2EmptyView from './Tab2EmptyView';
import { useState } from 'react';
import CenteredContainer from '../components/CenteredContainer';

const DEFAULT_ITEMS = [
  'Pokémon Yellow',
  'Mega Man X',
  'The Legend of Zelda',
  'Pac-Man',
  'Super Mario World',
]

const Tab2Nested: React.FC = () => {
  const [items, setItems] = useState(DEFAULT_ITEMS)
  const {push} = useIonRouter();

  const removeAllItemsAndNavigate = () => {
    setItems([])
    push('/tab2')
  }

  if(items.length === 0) {
    return <Tab2EmptyView />
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2 List Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2 List Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList inset={true}>
          {items.map(item => (
            <IonItem>
              <IonLabel>{item}</IonLabel>
            </IonItem>
          ))}
        </IonList>
        <CenteredContainer>
          <IonButton onClick={removeAllItemsAndNavigate}>Remove all items and navigate to home</IonButton>
        </CenteredContainer>
      </IonContent>
    </IonPage>
  );
};

export default Tab2Nested;
