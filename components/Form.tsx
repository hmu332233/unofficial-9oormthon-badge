import { useFormContext } from 'react-hook-form';
import FormItem from 'components/FormItem';

type Props = {};

function Form({}: Props) {
  const { register } = useFormContext();

  return (
    <form
      className="flex flex-col gap-2 w-full max-w-xs"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <FormItem label="텍스트">
        <input
          type="text"
          className="input input-bordered"
          {...register('text', { required: true })}
        />
      </FormItem>
      <FormItem label="스피드">
        <input
          className="range range-sm"
          type="range"
          min="1"
          max="10"
          step="0.5"
          {...register('speed', { required: true })}
        />
      </FormItem>
    </form>
  );
}

export default Form;
