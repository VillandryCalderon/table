import { DataSource } from "@angular/cdk/table";
import { Component } from "@angular/core";
import { Personas } from "./models/Personas";

@Component({
  selector: "table-basic-example",
  styleUrls: ["table-basic-example.css"],
  templateUrl: "table-basic-example.html"
})
export class TableBasicExample {
  personasarray: Personas[] = [
    { id: 1, name: "Carmen", lastname: "Salazar" },
    { id: 2, name: "Glenda", lastname: "Sanchez" },
    { id: 3, name: "Mario", lastname: "Mendez" },
    { id: 4, name: "Jenny", lastname: "Granados" },
    { id: 5, name: "Byron", lastname: "Gonzales" },
    { id: 6, name: "Jose Pablo", lastname: "Rodriguez" },
    { id: 7, name: "Carlos", lastname: "Alvarado" },
    { id: 8, name: "Rosario", lastname: "Garcia" },
    { id: 9, name: "Villandry", lastname: "Calderon" },
    { id: 10, name: "Emily", lastname: "Obando" }
  ];

  SelectedPersona: Personas = new Personas();

  OpenForEdit(pers: Personas) {
    this.SelectedPersona = pers;
  }
 
  addorEdit() {
    if (this.SelectedPersona.id === 0) {
      this.SelectedPersona.id = this.personasarray.length + 1;
      this.personasarray.push(this.SelectedPersona);
    }
    this.SelectedPersona = new Personas();
  }

  delete() {
    if (confirm("Esta seguro que desea eliminarlo ")) {
      this.personasarray = this.personasarray.filter(
        x => x != this.SelectedPersona
      );
      this.SelectedPersona = new Personas();
    }
  }

  displayedColumns: string[] = ["id", "name", "lastName"];
  dataSource = Personas;
}
