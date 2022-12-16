type FormData = {
  text: string;
  speed: string;
};

import {
  FormProvider as ReactHookFormProvider,
  useForm,
} from 'react-hook-form';

const DEFAULT_FORM_VALUES: FormData = {
  text: '구름톤',
  speed: '2',
} as const;

type Props = {
  defaultValues?: FormData;
  children: React.ReactNode;
};

function FormProvider({
  defaultValues = DEFAULT_FORM_VALUES,
  children,
}: Props) {
  const formMethods = useForm<FormData>({
    defaultValues,
  });

  return (
    <ReactHookFormProvider {...formMethods}>{children}</ReactHookFormProvider>
  );
}

export default FormProvider;
