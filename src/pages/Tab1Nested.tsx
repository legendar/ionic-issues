import { IonContent, IonButton, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CenteredContainer from '../components/CenteredContainer';

const Tab1Nested: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1 Nested</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1 Nested</IonTitle>
          </IonToolbar>
        </IonHeader>
        <CenteredContainer>
          <IonButton routerLink="/tab1/nested/subnested">Go to sub nested page</IonButton>
        </CenteredContainer>
      </IonContent>
    </IonPage>
  );
};

export default Tab1Nested;
