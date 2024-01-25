import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CenteredContainer from '../components/CenteredContainer';

const Tab1SubNested: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1 Sub Nested</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1 Sub Nested</IonTitle>
          </IonToolbar>
        </IonHeader>
        <CenteredContainer>
            Click browser back button, then browser forward button
        </CenteredContainer>
      </IonContent>
    </IonPage>
  );
};

export default Tab1SubNested;
