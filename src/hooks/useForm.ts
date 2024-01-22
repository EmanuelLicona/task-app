import { useMemo, useEffect, useState } from 'react';

interface IFormState {
  [key: string]: string;
}

interface IFormValidations {
  [key: string]: [(value: string) => boolean, string];
}


export const useForm = (initialForm: IFormState = {}, formValidations: IFormValidations = {}): any => {

  const [formState, setFormState] = useState<IFormState>(initialForm);
  const [formValidation, setFormValidation] = useState<{ [key: string]: string | null }>({});

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null ) return false
    }

    return true
  }, [formValidation])

  useEffect(() => {
    createValidators()
  }, [formState])

  useEffect(() => {
    setFormState(initialForm)
  }, [initialForm])

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const onResetForm = () => {
    setFormState(initialForm)
  }

  const createValidators = () => {
    const formCheckedValues: { [key: string]: string | null } = {};
    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];
      formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
    }
    setFormValidation(formCheckedValues);
  };


  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,

    isFormValid,
    ...formValidation,
  }
}