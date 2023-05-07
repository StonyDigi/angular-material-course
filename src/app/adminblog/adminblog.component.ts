import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

export interface PeriodicElement {
  id: number;
  title: string;
  body: string;
  image: string;
  published_at: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
   title: 'My Best Blog', 
   body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eius.', 
   image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', 
   published_at: new Date()
  },
  {
    id: 2,
   title: 'My Best Blog', 
   body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eius.', 
   image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', 
   published_at: new Date()
  },
  {
    id: 3,
   title: 'My Best Blog', 
   body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eius.', 
   image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', 
   published_at: new Date()
  },
  {
    id: 4,
   title: 'My Best Blog', 
   body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eius.', 
   image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', 
   published_at: new Date()
  },
  {
    id: 5,
   title: 'My Best Blog', 
   body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eius.', 
   image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', 
   published_at: new Date()
  },

  
  
];

@Component({
  selector: 'app-adminblog',
  templateUrl: './adminblog.component.html',
  styleUrls: ['./adminblog.component.css']
})
export class AdminblogComponent implements OnInit {
  
  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['id', 'title', 'body', 'image', 'published_at', 'action'];
  

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  delete(id: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if(result == 'true') {
        this.dataSource = this.dataSource.filter(data => data.id != id);

      }
    })
  }

}
