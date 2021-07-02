import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SharedService {
  language: Subject<any> = new Subject();
}
