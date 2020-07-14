import { Component, OnInit,Inject } from '@angular/core';
import {EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Validators } from '@angular/forms';
import {OnlineBookingRequest} from '../../onlineBookingDetail';
import {DataApiService} from '../../data-api.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  title = 'KhybercityDevelopers';
  onlineBookingDetail:OnlineBookingRequest=new OnlineBookingRequest();
  public bookingForm: FormGroup;
  submitted = false;
  successalert:boolean=false;
  msgalert:string='';
  warnAlert:boolean=false;
  message:any;
  showModal: boolean;
  response:any=[];


  constructor(private formBuilder: FormBuilder,
    private service:DataApiService,
  private dialogRef: MatDialogRef<BookingFormComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
   }
 

  ngOnInit() {
    this.bookingForm = this.formBuilder.group({
      applicantName: [ this.data.applicantName],
      gaurdianName: [ this.data.gaurdianName],
      applicantCnic: [ this.data.applicantCnic],
      presentAddress: [ this.data.presentAddress ],
      permanantAddress: [ this.data.permanantAddress],
      officeTelephoneNo: [ this.data.officeTelephoneNo],
      residence: [ this.data.residence ],
      mobileNumber: [ this.data.mobileNumber],
      email: [ this.data.email , [ Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      nomineeName: [ this.data.nomineeName],
      nomineeGaurdian: [ this.data.nomineeGaurdian],
      relationWithApplicant: [ this.data.relationWithApplicant],
      nomineeCnic: [ this.data.nomineeCnic],
      plotSize: [ this.data.plotSize],
      type:[this.data.type],
      slipNumber: [ this.data.slipNumber],
      date: [ this.data.date ],
      amountRs: [ this.data.amountRs ],
      rupees: [ this.data.rupees ],



    });
    this.submitted=false;  
  }
  public submitData(submitData){
    this.onlineBookingDetail=new OnlineBookingRequest();
    this.onlineBookingDetail.applicantName=this.ApplicantName.value;
    this.onlineBookingDetail.gaurdianName=this.GaurdianName.value;
    this.onlineBookingDetail.applicantCnic=this.ApplicantCnic.value;
    this.onlineBookingDetail.presentAddress=this.PresentAddress.value;
    this.onlineBookingDetail.permanantAddress=this.PermanantAddress.value;
    this.onlineBookingDetail.officeTelephoneNo=this.OfficeTelephoneNo.value;
    this.onlineBookingDetail.residence=this.Residence.value;
    this.onlineBookingDetail.mobileNumber=this.MobileNumber.value;
    this.onlineBookingDetail.email=this.Email.value;
    this.onlineBookingDetail.nomineeName=this.NomineeName.value;
    this.onlineBookingDetail.nomineeGaurdian=this.NomineeGaurdian.value;
    this.onlineBookingDetail.relationWithApplicant=this.RelationWithApplicant.value;
    this.onlineBookingDetail.nomineeCnic=this.NomineeCnic.value;
    this.onlineBookingDetail.plotSize=this.PlotSize.value;
    this.onlineBookingDetail.type=this.Type.value;
    this.onlineBookingDetail.slipNumber=this.SlipNumber.value;
    this.onlineBookingDetail.date=this.Date.value;
    this.onlineBookingDetail.amountRs=this.AmountRs.value;
    this.onlineBookingDetail.rupees=this.Rupees.value;

    this.submitted = true;  
    this.save();  
    }
  
save() {  
    this.service.submitUserData(this.onlineBookingDetail)  
      .subscribe(data=>{ this.response.push(data);this.successalert=true},error=>{ this.response.push(error);this.warnAlert=true});
    this.onlineBookingDetail = new OnlineBookingRequest(); 


  }  
  get ApplicantName(){  
    return this.bookingForm.get('applicantName');  
  } 
  get GaurdianName(){  
    return this.bookingForm.get('gaurdianName');  
  } 
  get ApplicantCnic(){  
    return this.bookingForm.get('applicantCnic');  
  } 
  get PresentAddress(){  
    return this.bookingForm.get('presentAddress');  
  } 
  get PermanantAddress(){  
    return this.bookingForm.get('permanantAddress');  
  } 
  get OfficeTelephoneNo(){  
    return this.bookingForm.get('officeTelephoneNo');  
  } 
  get Residence(){  
    return this.bookingForm.get('residence');  
  } 
  get MobileNumber(){  
    return this.bookingForm.get('mobileNumber');  
  } 
  get Email(){  
    return this.bookingForm.get('email');  
  } 
  get NomineeName(){  
    return this.bookingForm.get('nomineeName');  
  } 
  get NomineeGaurdian(){  
    return this.bookingForm.get('nomineeGaurdian');  
  } 
  get RelationWithApplicant(){  
    return this.bookingForm.get('relationWithApplicant');  
  } 
  get NomineeCnic(){  
    return this.bookingForm.get('nomineeCnic');  
  } 
  get PlotSize(){  
    return this.bookingForm.get('plotSize');  
  } 
  get Type(){  
    return this.bookingForm.get('type');  
  }
  get SlipNumber(){  
    return this.bookingForm.get('slipNumber');  
  }
  get Date(){  
    return this.bookingForm.get('date');  
  } 
  get AmountRs(){  
    return this.bookingForm.get('amountRs');  
  }
  get Rupees(){  
    return this.bookingForm.get('rupees');  
  }


  onSubmit() {    
      if (this.bookingForm.valid) {
        this.bookingForm.reset();
      }
    }  
  closeAlertt(){
    this.warnAlert=false;
  }
closeAlert(){
  this.successalert=false;
} 


}
