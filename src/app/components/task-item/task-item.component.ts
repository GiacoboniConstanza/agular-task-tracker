import { Component, OnInit, Input} from '@angular/core';
import { Task } from 'src/app/Task';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
