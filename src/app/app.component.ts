import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';

@Component({
    selector: 'mc-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'mc';

    ngOnInit() {
        /*
        let x = Observable.of(["um", "dois", "tres"]);
        console.log(x);
        x.subscribe(
          this.handleProcess,
          this.handleError,
          this.handleComplete
        );
        */
    }

    /*
    handleProcess(arr: string[]): void {
        console.log("000: " + arr[0]);
        console.log("222: " + arr[2]);
    }

    handleError(err: any): void {
        console.log(err);
    }

    handleComplete(): void {
        console.log('completo');
    }
    */
}
