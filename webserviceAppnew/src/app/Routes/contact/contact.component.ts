import { Component } from '@angular/core';
import { InfoService } from 'src/app/info.service';
import { Viewer } from 'src/app/viewer';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 submitted=false;
 userModel=new Viewer('','','','','');

 constructor(private _info:InfoService){}

 onSubmit()
 {
  this.submitted=true;
    this._info.send(this.userModel).
    subscribe(
      data=>console.log('Success!',data),
    )
 }

}
