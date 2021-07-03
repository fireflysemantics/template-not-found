import { Component } from '@angular/core';
import { TableData } from 'projects/table/src/lib/data-table/data-table';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    this.table = new TableData()

    this.table.headers = this.columns
    this.table.rows = this.data;
    this.table.stickyHeaders = ['ID']
    this.table$ = of(this.table)
  }

  ngOnInit(): void {
  }


  /*
  ================================
  NO DATA MESSAGE DEMO
  ================================
  */

  noDataMessage: string = 'No Data'
  isDataLoaded$: Observable<boolean> = of(false)
  isDataLoadedTrue$: Observable<boolean> = of(true)
  isProgressCompleteFalse$: Observable<boolean> = of(false)

  table!: TableData;

  table$!: Observable<TableData>;
  tableZeroRows$!: Observable<TableData>;
  tableZeroColumns$!: Observable<TableData>;

  columns: string[] = ['ID', 'TITLE', 'DESCRIPTION']
  data: any[] = [
    { ID: 1, TITLE: "Lets do this! ", DESCRIPTION: "We really out to do this" },
    { ID: 2, TITLE: "Lets do this!", DESCRIPTION: "We really out to do this" },
    { ID: 3, TITLE: "Lets do this! ", DESCRIPTION: "We really out to do this" },
    { ID: 4, TITLE: "Lets do this!", DESCRIPTION: "We really out to do this" },
    { ID: 5, TITLE: "Lets do this! ", DESCRIPTION: "We really out to do this" },
    { ID: 6, TITLE: "Lets do this!", DESCRIPTION: "We really out to do this" },
    { ID: 7, TITLE: "Lets do this! ", DESCRIPTION: "We really out to do this" },
    { ID: 8, TITLE: "Lets do this!", DESCRIPTION: "We really out to do this" },
    { ID: 9, TITLE: "Lets do this! ", DESCRIPTION: "We really out to do this" },
    { ID: 10, TITLE: "Lets do this!", DESCRIPTION: "We really out to do this" },
    { ID: 11, TITLE: "Lets do this! ", DESCRIPTION: "We really out to do this" },
    { ID: 12, TITLE: "Lets do this!", DESCRIPTION: "We really out to do this" },
    { ID: 13, TITLE: "Lets do this! ", DESCRIPTION: "We really out to do this" },
    { ID: 14, TITLE: "Lets do this!", DESCRIPTION: "We really out to do this" }
  ]

  dataOneRow: any[] = [
    { ID: 1, TITLE: "Lets do this! ", DESCRIPTION: "We really out to do this" }
  ]}
