import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-communication-channels',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './communication-channels.component.html',
  styleUrls: ['../communication-channels/communication-channels.component.scss']
})
export class CommunicationChannelsComponent {
  displayedColumns: string[] = ['id', 'name', 'type', 'contact', 'isVerified'];
  channels =  [
    { id: 640, name: 'Sware', type: 'SMS, Email', contact: 'support@sware.com', isVerified: true },
    { id: 639, name: 'Aquinim', type: 'SMS, Email', contact: '-', isVerified: true },
    { id: 638, name: 'SendX', type: '+SMS, Email', contact: '-', isVerified: true },
    { id: 637, name: 'Qai-Qai', type: 'SMS, Email', contact: '-', isVerified: true },
    { id: 636, name: 'Mega-send', type: 'Email', contact: '-', isVerified: true },
  ];
}
