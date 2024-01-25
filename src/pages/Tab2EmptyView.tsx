import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CenteredContainer from '../components/CenteredContainer';
import './Tab1.css';

const Tab2EmptyView: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2 List Page Empty View</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2 List Page Empty View</IonTitle>
          </IonToolbar>
        </IonHeader>
        <CenteredContainer>There no items</CenteredContainer>
      </IonContent>
    </IonPage>
  );
};

export default Tab2EmptyView;
