import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ArtistComponent } from './artist.component';
import { EventsComponent } from '../events/events.component';
import { ArtistService } from '../../models/artist/artist.service';
import { EventService } from '../../models/event/event.service';

@NgModule({
    declarations: [
        ArtistComponent,
        EventsComponent
    ],
    imports: [
        CommonModule,
        ModalModule.forRoot()
    ],
    exports: [
        ArtistComponent,
        EventsComponent
    ],
    providers: [ArtistService, EventService]
})
export class ArtistModule { }
