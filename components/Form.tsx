import { useFormContext } from 'react-hook-form';
import FormItem from 'components/FormItem';

type Props = {};

function Form({}: Props) {
  const { register } = useFormContext();

  return (
    <form className="flex flex-col gap-2 w-full max-w-xs">
      <FormItem label="텍스트">
        <input
          type="text"
          className="input input-bordered"
          defaultValue={'구름톤'}
          {...register('text', { required: true })}
        />
      </FormItem>
      <FormItem label="스피드">
        <input
          className="range range-sm"
          type="range"
          min="1"
          max="10"
          defaultValue={'2'}
          {...register('speed', { required: true })}
        />
      </FormItem>
    </form>
  );
}

export default Form;
