import { LightningElement, api, track } from 'lwc';
import {
    FlowNavigationNextEvent,
} from 'lightning/flowSupport';

export default class rtcAutonext extends LightningElement {
    @api availableActions = [];
    @api delay;
    @track loadCheck;  
    
    connectedCallback() {
        setTimeout(() => {
 // check if NEXT is allowed on this screen
 if (this.availableActions.find((action) => action === 'NEXT')) {

    // navigate to the next screen
        const navigateNextEvent = new FlowNavigationNextEvent();
        this.dispatchEvent(navigateNextEvent);
     }
        }, this.delay);
           

        
    }
}


