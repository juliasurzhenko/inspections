import { Component } from '@angular/core';
import { remult } from 'remult';
import { Inspection } from 'src/shared/inspect';

@Component({
  selector: 'app-inspection',
  templateUrl: './inspection.component.html',
  styleUrls: ['./inspection.component.scss']
})
export class InspectionComponent {
  inspections: Inspection[] = [];

  inspectionComment = '';
  inspectionDate = '';
  inspectionBus = NaN;

  inspectionRepo = remult.repo(Inspection)

  async addInspection(){
    try{
      await this.inspectionRepo.insert({
        insp_comment:this.inspectionComment,
        insp_date:this.inspectionDate,
        bus_id:this.inspectionBus
      });
      this.inspectionComment = '';
    }
    catch(error:any){
      console.error(error)
    }
  }

  async deleteInspection(inspection: Inspection){
    try{
      await this.inspectionRepo.delete(inspection);
    }
    catch(error:any){
      console.error(error)
    }
  }

  async saveInspection(inspection: Inspection){
    try {
      await this.inspectionRepo.save(inspection);
    } catch (error: any) {
      console.error(error)
    }
  }

  unSub = () => {};
  ngOnInit(){
    this.unSub = this.inspectionRepo
    .liveQuery({
      orderBy: {
        inspection_id: 'desc'
      }
    })
    .subscribe((info) => {this.inspections = info.applyChanges(this.inspections)})
  }

  ngOnDestroy(){
    this.unSub();
  }
}
// this.inspectionRepo
// .find({
//   orderBy: {
//     inspection_id: 'desc'
//   }
// })
// .then((inspections) => {this.inspections = inspections})