import {Injectable} from '@angular/core';
import {IndividualConfig, ToastrService} from "ngx-toastr";
import {ERROR_TOAST, INFO_TOAST, SUCCESS_TOAST, WARNING_TOAST} from "../../constants/toast.constants";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(
    private toast: ToastrService
  ) {
  }

  // Method to show a toast
  showToast(type: string, title: string, message: string): void {
    const toastSettings: Partial<IndividualConfig> = {
      timeOut: 7000,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing',
    };
    if (type === SUCCESS_TOAST) {
      this.toast.success(`${message}`, `${title}`, toastSettings);
    } else if (type === ERROR_TOAST) {
      this.toast.error(`${message}`, `${title}`, toastSettings);
    } else if (type === WARNING_TOAST) {
      this.toast.warning(`${message}`, `${title}`, toastSettings);
    } else if (type === INFO_TOAST) {
      this.toast.info(`${message}`, `${title}`, toastSettings);
    }
  }

  // Method to delete all the toast showed in the view
  clearAllToast(): void {
    this.toast.clear();
  }
}
