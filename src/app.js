// angular-related imports
import {bootstrap, Component, View, NgFor} from 'angular2/angular2';

// components
import {ChatterList} from './components/chatter-list';
import {ChatterCard} from './components/chatter-card';

// services
import {DataService} from './services/DataService';


@Component({
    selector: 'fireside-chats-app',
    viewInjector: [DataService]
})

@View ({
    templateUrl: 'app.html',
    directives: [ChatterList, ChatterCard, NgFor]
})

export class FiresideChatsApp {
    organisers: Array;
    showChatRoom: boolean;

    constructor(dataService: DataService) {
        dataService.getOrganisers().then((organisers) => {
            this.organisers = organisers;
        });
    }

    startChat() {
        this.showChatRoom = true;
    }

    endChat() {
        this.showChatRoom = false;
    }
}

// bootstrap the app
bootstrap(FiresideChatsApp);
