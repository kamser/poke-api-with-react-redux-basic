

export interface CustomFormProps{
    handleOnSubmit: (event: Event | any) => void;
    setFormValue: (formValue: string) => void;
    formValue: string;

}