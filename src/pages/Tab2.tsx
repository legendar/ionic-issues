import { IonBackButton, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import CenteredContainer from '../components/CenteredContainer';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2 Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2 Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <CenteredContainer>
          <IonButton routerLink="/tab2/nested">go to list page</IonButton>
        </CenteredContainer>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
