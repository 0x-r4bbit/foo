import {Component, View, NgIf} from 'angular2/angular2';

@Component({
    selector: 'chatter-card',
    properties: ['item']
})
@View({
    templateUrl: 'components/chatter-card.html',
    directives: [NgIf]
})
export class ChatterCard {
    showDetails: boolean;

    constructor() {
        // hide details by default
        this.showDetails = false;
    }

    toggle() {
        this.showDetails = !this.showDetails;
    }
}
